import { join } from 'path'
import winston, { addColors, createLogger, format } from 'winston'
import { type ILoggerConfig } from './type.t'

const { combine, timestamp, label, printf, prettyPrint } = format;
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] Level: ${level} | message: ${message}`;
});


export function CreateNewLogger(
  config: ILoggerConfig
): winston.Logger {

  const pathToLogsDir = config.pathToLogsDir || join("bin", "logs")

  const CATEGORY = config.prefix || "Set prefix in config";

  switch (config.mode) {
    case 'debug':
      return createLogger({
        level: 'debug',
        defaultMeta: config.metadata,

        format: combine(
          label({ label: CATEGORY }),
          timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
          }),
          prettyPrint(),
        ),
        transports: [
          new winston.transports.File({ filename: join(pathToLogsDir, 'error.log'), level: 'error' }),
          new winston.transports.File({ filename: join(pathToLogsDir, 'combined.log') }),
          new winston.transports.Console({ format: combine(label({ label: CATEGORY }), timestamp(), customFormat) })
        ]
      })
    case 'prod':
      return createLogger({
        level: 'info',
        defaultMeta: config.metadata,
        format: combine(
          label({ label: CATEGORY }),
          timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
          }),
        ),
        transports: [
          new winston.transports.File({ level: "warn", format: format.json(), filename: join(pathToLogsDir, 'combined.log') }),
          new winston.transports.Console({ format: combine(label({ label: CATEGORY }), timestamp(), customFormat) }),
        ]
      })

    case 'develop':
      return createLogger({
        level: 'debug',
        defaultMeta: config.metadata,
        format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
        transports: [
          new winston.transports.Console({}),
        ]
      })
  }
}