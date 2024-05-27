import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,

  env: {
    credentials: {
      name: 'Aid',
      password: 'Test123',
    },
  },
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
  },
})
