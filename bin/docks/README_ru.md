# BunTenplate

"BunTemplate" - это мой личный шаблон проекта, созданный для того, чтобы облегчить любому пользователю начало быстрой работы. Этот шаблон очень чистый и минималистичный, с единственной зависимостью - ESLint.

## Перевод: 
* [**Русский**](https://github.com/DotBlood/template-bun-eslint/blob/master/bin/docks/README_ru.md) 
* [**Английский**]("")


### Структура проекта:
```vbnet
📦 App/
├─── 📂 bin/ #(папка Customization) alias "@bin/*"
│
├─── 📂 internal/ #(Внутренние модули) alias "@internal/*"
│
├─── 📂 src/ #(Папка с исходным кодом) alias "@/*"
│
├─── 📂 test/ #(папка Test) alias "@test/*"
```

### Команды для запуска:
``zsh
bun start # для запуска в режиме производства

bun dev # для запуска в режиме разработчика с включенным горячим режимом

bun lint # для проверки кода на соответствие стандартам стиля кода
```


### Установка
``zsh
git clone --depth 1 git@github.com:DotBlood/template-bun-eslint.git 
```

``zsh
cd template-bun-eslint
```

``zsh
bun i
```

```zsh
булочка dev
```
