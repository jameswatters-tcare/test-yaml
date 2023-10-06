import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'localDev',
      use: {
        baseURL: 'http://localhost:5173'
      }
    },
    {
      name: 'qa',
      use: {
        baseURL: 'http://localhost:5173'
      }
    }
  ],
  testDir: 'tests'
};

// In Dev, Run Server
if (true) {
  console.log('true')
  config.webServer = {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  };
}

export default config;
