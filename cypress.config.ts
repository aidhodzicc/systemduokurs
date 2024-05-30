import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,

  env: {
    credentials: {
      name: 'Aid',
      lastName: 'Hodzic',
      password: 'Test123',
      address: 'Zmaja od Bosne',
    },
  },
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
  },
})
