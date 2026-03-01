(function(){
    'use strict';

    let lastVideoId = null;

    function parseNumber(text){
        if(!text) return 0;
        text = text.toLowerCase().replace(/\./g,'').replace(',','.');
        if(text.includes('m')) return parseFloat(text)*1_000_000;
        if(text.includes('k')) return parseFloat(text)*1_000;
        return parseFloat(text)||0;
    }

    function removeBox(){
        const old = document.getElementById("driver-budgie-box");
        if(old) old.remove();
    }

    async function addDriverBudgieBox(){
        try{
            if(!location.href.includes("watch")) {
                removeBox();
                lastVideoId = null;
                return;
            }

            const videoId = new URL(location.href).searchParams.get("v");
            if(!videoId || videoId===lastVideoId) return;
            lastVideoId = videoId;

            await waitForSelector('#container h1 yt-formatted-string',7000);
            await waitForSelector('#text-container yt-formatted-string',7000);

           
            const minutesText = document.querySelector('.ytp-time-duration')?.innerText || "0";
            const minutesParts = minutesText.split(':').map(Number);
            const minutes = minutesParts.length===3? minutesParts[0]*60+minutesParts[1]:minutesParts[0];

            const views = parseNumber(document.querySelector('span.view-count')?.innerText);
            const likes = parseNumber(document.querySelector('ytd-toggle-button-renderer:nth-child(1) yt-formatted-string')?.innerText);
            const comments = parseNumber(document.querySelector('#count yt-formatted-string')?.innerText);
            const subs = parseNumber(document.querySelector('#owner-sub-count')?.innerText);
            const dateText = document.querySelector('#info-strings yt-formatted-string')?.innerText || "";
            const isOld = /week|month|year/i.test(dateText);

          
            let score = 5;

           
            if(minutes<3) score -=2;
            else if(minutes>=3 && minutes<10) score -=1;
            else if(minutes>=10 && minutes<=25) score +=2;
            else score +=1;

            
            let viewFactor = Math.log10(Math.max(views,1));
            score += Math.min(viewFactor/2,2);

            
            const likeRatio = (likes>0 && views>0)? likes/views : 0;
            if(likeRatio<0.001) score -=2;
            else if(likeRatio<0.01) score -=1;
            else if(likeRatio>0.05) score +=2;
            else score +=1;

            let commentFactor = Math.log10(Math.max(comments,1));
            score += Math.min(commentFactor/2,1.5);

            let subFactor = Math.log10(Math.max(subs,1));
            score += Math.min(subFactor/2,2);

            if(isOld) score -=1;

            if(score<1) score=1;
            if(score>10) score=10;
            score = Math.round(score*10)/10;

            
            let emoji="🟡";
            if(score<=4.5) emoji="🔴";
            else if(score>=7.5) emoji="🟢";

            removeBox();

            const box = document.createElement("div");
            box.id="driver-budgie-box";
            box.innerText = `${score}/10 | The Driver Budgie Point | ${emoji}`;

            Object.assign(box.style,{
                position:"fixed",
                top:"80px",
                right:"10px",
                background:"rgba(0,0,0,0.85)",
                color:"#fff",
                padding:"4px 8px",
                borderRadius:"6px",
                fontSize:"12px",
                zIndex:"999999",
                lineHeight:"1.2",
                textAlign:"center",
                fontFamily:"Arial, sans-serif"
            });

            document.body.appendChild(box);

        } catch(e){
            console.log("Driver Budgie error:", e);
        }
    }

    function waitForSelector(selector, timeout=5000){
        return new Promise((resolve,reject)=>{
            const interval = setInterval(()=>{
                const el = document.querySelector(selector);
                if(el){ clearInterval(interval); resolve(el); }
            },300);
            setTimeout(()=>{ clearInterval(interval); reject('timeout'); }, timeout);
        });
    }

 
    window.addEventListener('yt-navigate-finish', ()=>{
        addDriverBudgieBox();
    });


    setTimeout(addDriverBudgieBox,1000);

})();
