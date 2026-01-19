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

---

---

## 🌐 Public Deployment

- To publish publicly on the Chrome Web Store:
  1. Zip the `TrafficTube/` folder.
  2. Create a developer account on Chrome Web Store (one-time $5 fee).
  3. Upload the zip and submit for review.
- Once approved, it will be available for everyone.

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
