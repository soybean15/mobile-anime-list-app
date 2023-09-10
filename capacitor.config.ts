import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Ionic Sample',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
