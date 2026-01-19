# TrafficTube

**TrafficTube** is a lightweight Chrome extension that adds a mini “Driver Budgie Point” tag to YouTube videos, showing a score based on video quality and engagement.

---

## 🐦 Features

- Shows a **mini score tag** for every video:  
- Score is calculated using multiple **criteria**:  
  - Video length  
  - Views (logarithmic scale for precision)  
  - Likes and like/view ratio  
  - Comments  
  - Channel subscriber count  
  - Video age  
- Score ranges **1–10** with color-coded emoji:  
  - 🔴 Low quality/engagement  
  - 🟡 Medium  
  - 🟢 High quality/engagement  
- Works **dynamically** on YouTube SPA pages (score updates when you change videos)  
- Minimalistic, **non-intrusive** design

<img width="231" height="51" alt="image" src="https://github.com/user-attachments/assets/1b2fa95a-d8a6-4e23-bdd5-ae94b19cf242" />

<img width="201" height="27" alt="image" src="https://github.com/user-attachments/assets/8c329c45-5694-4aa2-aaa2-216dcd7cd84f" />



---

---

## 📝 Notes

- Scores are **approximate** and based on engagement & quality indicators.  
- No user data is collected. Everything is computed **locally** in your browser.  
- Works only on `https://www.youtube.com/*` pages.

---

## 🖌️ Customization

- You can adjust scoring criteria in `content.js`:
  - Video length thresholds  
  - View/like/comment weightings  
  - Emoji thresholds  

---

**Enjoy TrafficTube and see which videos are real Driver Budgies! 🐦**


