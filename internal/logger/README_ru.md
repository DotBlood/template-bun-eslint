# Модуль логгирования

Чтобы использовать логгер, вам достаточно вызвать функцию `CreateNewLogger`, а затем передать туда конфиг. Конфиг - это объект, соответствующий следующему интерфейсу:

```typescript
interface ILoggerConfig {
  mode: 'debug' | 'prod' | 'develop';
  pathToLogsDir: string | undefined;
  metadata: object | undefined;
  prefix: string | undefined;
}

В вашем случае, вы создали loggerConfig в папке bin/config и указали следующие параметры:

```json
{
    "mode": "develop",               // Может принимать 'debug' | 'prod' | 'develop'
    "prefix": "BunTemplate",         // Необязательный тип
    "pathToLogsDir": "./bin/logs",   // Необязательный тип
    "metadata": {}                   // Необязательный тип
}

```

После этого в файле ./src/index.ts я создал константу logger и теперь могу работать с ним по всему проекту.

```typescript
import { CreateNewLogger } from '@internal/logger/logger.ts'
import { type ILoggerConfig } from '@internal/logger/type.t'
import loggerConfig from '@config/loggerConfig.json'

const logger = CreateNewLogger(loggerConfig as ILoggerConfig)
logger.info("Привет, мир!")
```

При этом вывод будет исходя из конфигурации выше будет следующим:

```bash
2023-09-24T19:49:30.179Z [BunTemplate] Level: info | message: Привет, мир!
```

При режимах "prod" и "debug":

```json
{
  "message": "Привет, мир!",
  "level": "info",
  "label": "BunTemplate",
  "timestamp": "Сен-24-2023 22:02:41"
}
```

## Как использовать в проекте

Вы можете создать функцию, которая на входе ожидает логгер: winston.Logger, и просто передавать его туда. Думаю, это удобно, так как у вас один логгер для всего проекта.

Пример:

```typescript
function TestFunction(log: winston.Logger){
  log.info('Я работаю!')
}

TestFunction(logger)


class TestClass{
  constructor(
    private readonly log: winston.Logger
  ){
    this.log.info('А тут я работаю в классе')
  }
}

new TestClass(logger)
```
