import { join } from 'path'
import winston, { createLogger, format } from 'winston'
import { type ILoggerConfig } from './type.t'

const { combine, timestamp, label, printf, prettyPrint } = format
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] Level: ${level} | message: ${message}`
})

export function CreateNewLogger (
  config: ILoggerConfig
): winston.Logger {
  config.pathToLogsDir = typeof config.pathToLogsDir === 'undefined' ? join('bin', 'logs') : config.pathToLogsDir
  config.prefix = typeof config.prefix === 'undefined' ? 'BunTemplate' : config.prefix

  switch (config.mode) {
    case 'debug':
      return createLogger({
        level: 'debug',
        defaultMeta: config.metadata,

        format: combine(
          label({ label: config.prefix }),
          timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
          }),
          prettyPrint()
        ),
        transports: [
          new winston.transports.File({ filename: join(config.pathToLogsDir, 'error.log'), level: 'error' }),
          new winston.transports.File({ filename: join(config.pathToLogsDir, 'combined.log') }),
          new winston.transports.Console({ format: combine(label({ label: config.prefix }), timestamp(), customFormat) })
        ]
      })
    case 'prod':
      return createLogger({
        level: 'info',
        defaultMeta: config.metadata,
        format: combine(
          label({ label: config.prefix }),
          timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
          })
        ),
        transports: [
          new winston.transports.File({ level: 'warn', format: format.json(), filename: join(config.pathToLogsDir, 'combined.log') }),
          new winston.transports.Console({ format: combine(label({ label: config.prefix }), timestamp(), customFormat) })
        ]
      })

    case 'develop':
      return createLogger({
        level: 'debug',
        defaultMeta: config.metadata,
        transports: [
          new winston.transports.Console({ format: combine(label({ label: config.prefix }), timestamp(), customFormat) })
        ]
      })
  }
}
