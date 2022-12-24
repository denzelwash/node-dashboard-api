import { Container } from 'inversify'
import { App } from './app.js'
import { ExeptionFilter } from './errors/exeption.filter.js'
import { LoggerService } from './logger/logger.service'
import { ILogger } from './logger/logger.interface'
import { TYPES } from './types.js'
import { UserController } from './users/users.controller.js'
import { IExeptionFilter } from './errors/exeption.filter.interface'

const appContainer = new Container()
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService)
appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter)
appContainer.bind<UserController>(TYPES.UserController).to(UserController)
appContainer.bind<App>(TYPES.Aplication).to(App)
const app = appContainer.get<App>(TYPES.Aplication)
app.init()

export {app, appContainer}
