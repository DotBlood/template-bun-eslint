import { CreateNewLogger } from '@internal/logger/logger.ts'
import { type ILoggerConfig } from '@internal/logger/type.t'
import loggerConfig from '@config/loggerConfig.json'

const logger = CreateNewLogger(loggerConfig as ILoggerConfig)
logger.info('Hi World')
