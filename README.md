# BunTenplate

"BunTemplate" - это мой личный шаблон проекта, разработанный с целью облегчения начала работы для любого пользователя. Этот шаблон очень чист и минималистичен, имея всего лишь одну зависимость - ESLint.

### Структура проекта:
```vbnet
📦 App/
├── 📂 bin/            #(Папка с настройками)  alias "@bin/*"
│
├── 📂 internal/       #(Внутренние модули)      alias "@internal/*"
│
├── 📂 src/            #(Папка с исходным кодом)    alias "@/*"
│
├── 📂 test/           #(Папка с тестами)           alias "@test/*"
```

### Команды для работы:
```zsh
bun start # для запуска в продакшн режиме

bun dev # для режима разработчика с включенной поддержкой горячей перезагрузки (hot mode)

bun lint # для проверки кода на соответствие стандартам стиля кода
```


### Установка

```zsh
git clone --depth 1 git@github.com:DotBlood/template-bun-eslint.git 

cd template-bun-eslint

bun i

bun dev
```

