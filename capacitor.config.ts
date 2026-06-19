import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  "appId": "com.ironpace.app",
  "appName": "Ironpace",
  "webDir": "www",
  server: {
    url: "http://127.0.0.1:5500/index.html"
  }
};

export default config;
