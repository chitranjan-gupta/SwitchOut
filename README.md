# 🔄 Open Link in Normal Window

## 📋 Overview

By default, browsers like Chrome and Firefox **do not allow extensions to open links from an Incognito Window to a Normal Window**.

This extension solves that limitation.

✅ It adds a **context menu item** (right-click menu) that allows users to **open links from Incognito Mode in a Normal Window**.

---

## 🧩 Features

- Right-click any link in Incognito Mode to open it in a Normal Window
- Lightweight and easy to use
- Secure and privacy-friendly
- Works in both Chrome and Firefox

---

## ⚙️ Installation

### 🔸 For Chrome

1. Go to `chrome://extensions/`
2. Enable **Developer Mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the extension's folder

**Important:**  
Once installed, **enable the extension in Incognito Mode**:
- In `chrome://extensions/`, find the extension
- Click **Details**
- Toggle on **Allow in Incognito**

### 🔹 For Firefox

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select the `manifest.json` file in the extension folder

To enable in private browsing:
- Go to `about:addons`
- Find the extension
- Click the three dots → **Manage**
- Scroll to **Run in Private Windows** → Select **Allow**

---

## 📂 File Structure

```
open-in-normal-window/
│
├── chrome/manifest.json
├── chrome/background.js
├── firefox/manifest.json
├── firefox/background.js
└── README.md
```

---

## 🧠 How It Works

1. When right-clicking a link, the extension adds a context menu item: **"Open in Normal Window"**.
2. When clicked, the extension:
   - Detects the link URL
   - Sends a message to create (or reuse) a normal window
   - Opens the link in a new tab in that window

---

## 🛠 Permissions Used

```json
"permissions": [
  "contextMenus",
  "tabs",
  "windows"
]
```

- `contextMenus`: To add right-click options
- `tabs`: To create a new tab in the normal window
- `windows`: To check or create browser windows

---

## 🖱️ Usage

1. Right-click any link in Incognito mode
2. Click **“Open in Normal Window”**
3. A new tab will open in a non-incognito window with the selected link

---

## 🚨 Troubleshooting

- **The menu item doesn’t appear in Incognito Mode.**
  - Make sure the extension is **allowed to run in Incognito Mode** (see Installation steps).

- **Nothing happens when I click "Open in Normal Window".**
  - Ensure a normal (non-incognito) window is already open, or the extension has permission to create one.
  - Check browser console logs for errors if you're developing the extension.

---

## 🔒 Privacy

This extension does **not collect or transmit any data**. All activity happens locally on your machine.

---

## 📃 License

MIT License
