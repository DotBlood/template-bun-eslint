export interface ILoggerConfig {
  mode: 'debug' | 'prod' | 'develop'
  pathToLogsDir: string | './bin/logs'
  metadata: object | undefined
  prefix: string | undefined
}
