# Logging Module

To use the logger, you simply need to call the `CreateNewLogger` function and then pass the configuration to it. The configuration is an object that adheres to the following interface:

```typescript
interface ILoggerConfig {
  mode: 'debug' | 'prod' | 'develop';
  pathToLogsDir: string | undefined;
  metadata: object | undefined;
  prefix: string | undefined;
}
```

In your case, you created loggerConfig in the bin/config folder and specified the following parameters:

```json
Copy code
{
    "mode": "develop",               // Can take 'debug' | 'prod' | 'develop'
    "prefix": "BunTemplate",         // Optional
    "pathToLogsDir": "./bin/logs",   // Optional
    "metadata": {}                   // Optional
}
```

After that, in the ./src/index.ts file, I created a constant logger, and now I can use it throughout the project.

```typescript
import { CreateNewLogger } from '@internal/logger/logger.ts'
import { type ILoggerConfig } from '@internal/logger/type.t'
import loggerConfig from '@config/loggerConfig.json'

const logger = CreateNewLogger(loggerConfig as ILoggerConfig)
logger.info("Hello, world!")
```

The output will be as follows based on the above configuration:

```bash
2023-09-24T19:49:30.179Z [BunTemplate] Level: info | message: Hello, world!
```

In "prod" and "debug" modes:

```json
{
  "message": "Hello, world!",
  "level": "info",
  "label": "BunTemplate",
  "timestamp": "Sep-24-2023 22:02:41"
}
```

## How to Use in Your Project

You can create a function that expects a logger of type winston.Logger as input and simply pass it there. I believe this is convenient, as you have one logger for the entire project.

Example:

```typescript
function TestFunction(log: winston.Logger){
  log.info('I am working!')
}

TestFunction(logger)

class TestClass{
  constructor(
    private readonly log: winston.Logger
  ){
    this.log.info('And here, I am working in a class')
  }
}

new TestClass(logger)
```
