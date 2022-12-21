import { App } from './app.js'
import { ExeptionFilter } from './errors/exeption.filter.js'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller.js'

const bootstrap = async () => {
  const logger = new LoggerService()
  const app = new App(logger, new UserController(logger), new ExeptionFilter(logger))
  await app.init()
}

bootstrap()
