# Facebook UI Clone

A React Native mobile application replicating the Facebook home feed interface, built with Expo and styled-components. Includes AppBar, Stories, post feed, online users bar, and a post composer toolbar.

## 🚀 Technologies

- [React Native](https://reactnative.dev/) 0.63 (Expo SDK 39)
- [Expo](https://expo.dev/) ~39.0.2
- [styled-components](https://styled-components.com/) ^5.2.1
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (Feather, AntDesign, MaterialCommunityIcons, Ionicons)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 12+
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) installed globally
- Expo Go app on your phone (iOS or Android) — or an emulator

```bash
npm install -g expo-cli
```

## ⚙️ How to Run

```bash
# Clone the repository
git clone https://github.com/JoseGu1llardi/facebook-ui-clone.git

# Enter the app directory
cd facebook-ui-clone/app

# Install dependencies
npm install

# Start the development server
expo start
```

Then scan the QR code with Expo Go on your device.

## 🏗️ Project Structure

```
Facebook/
└── app/
    ├── App.js              # Root component — assembles all sections
    ├── app.json            # Expo configuration
    ├── package.json
    ├── assets/             # Images used in the UI (stories, avatars, posts)
    └── components/
        ├── AppBar.js       # Top navigation bar (logo + search + messenger icons)
        ├── ToolBar.js      # Post composer (Live / Photo / Room)
        ├── User.js         # Horizontal online users list
        ├── Story.js        # Horizontal stories carousel
        ├── Feed.js         # Post feed (hardcoded posts)
        └── Avatar.js       # Reusable avatar component (supports online indicator and story ring)
```

## 📌 Project Status

- [x] Archived — built as a UI study/practice project

## 👤 Author

**José Wellington Ribeiro**
GitHub: [https://github.com/JoseGu1llardi](https://github.com/JoseGu1llardi)
