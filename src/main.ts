import { App } from './app.js'
import { LoggerService } from './loger/loger.service'

const bootstrap = async () => {
  const app = new App(new LoggerService())
  await app.init()
}

bootstrap()
