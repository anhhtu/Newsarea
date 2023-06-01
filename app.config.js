import 'dotenv/config';

export default {
  "expo": {
    "name": "Newsarea.",
    "slug": "Newsarea.",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/icons/Logo.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./src/assets/icons/Artboard.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./src/assets/favicon.png"
    },

  }
}


