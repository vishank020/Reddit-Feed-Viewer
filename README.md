
# 🔥 Reddit Feed Viewer

A sleek and responsive web app built with **HTML, CSS, and JavaScript** that lets you browse top Reddit posts from any subreddit in real-time. Whether you're a casual Redditor or just curious about what's trending — this lightweight viewer has you covered!

![Reddit Feed Viewer Banner](https://img.shields.io/badge/Built%20with-JavaScript%20%7C%20HTML%20%7C%20CSS-blue?style=flat&logo=javascript)


---

## 🚀 Features

- 🌐 Fetches top posts from any subreddit using Reddit's public API
- 💡 Light/Dark mode toggle with local storage persistence
- ⚡ Loading spinner to indicate fetch progress
- 📱 Fully responsive layout for mobile and desktop
- 🎨 Smooth UI animations and hover effects

---

## 📸 UI Preview

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light UI](screenshots/light_ui.png) | ![Dark UI](screenshots/dark_ui.png) |

---

## 🧰 Tech Stack

- **HTML5** – Page structure & semantics
- **CSS3** – Stylish and responsive UI
- **JavaScript (Vanilla)** – API calls, DOM manipulation, and interactivity
- **Reddit JSON API** – [https://www.reddit.com/r/{subreddit}/top.json](https://www.reddit.com/r/{subreddit}/top.json)

---

## 🛠️ How It Works

1. User enters a subreddit name.
2. Clicks the "Get Posts" button.
3. App fetches top 5 posts using Reddit’s public API.
4. Posts are rendered with title, snippet, and a direct link to the post.
5. UI theme is remembered using `localStorage`.

---

## 📂 Project Structure

```
📦 Reddit-Feed-Viewer
├── index.html        # Main HTML page
├── styles.css        # All styling for light/dark themes
├── script.js         # JS logic to fetch, render, and toggle themes
└── screenshots/      # UI preview images for README
```

---

## 💡 Future Scope

- ✅ Add post filters (e.g., Top, Hot, New)
- ✅ Support for NSFW filtering toggle
- 📥 Download posts as a CSV
- 📈 Analytics on subreddit activity
- 🧠 AI-based post summarizer

---

## 👨‍💻 Author

