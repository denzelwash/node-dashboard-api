import { App } from './app.js'

const bootstrap = async () => {
  const app = new App()
  await app.init()
}

bootstrap()
