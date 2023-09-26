# BunTenplate

"BunTemplate" is my personal project template, designed to make it easy for any user to get bunty started. This template is very clean and minimalistic with only one dependency, ESLint.

## Translate: 
* [**Русский**](https://github.com/DotBlood/template-bun-eslint/blob/master/bin/docks/README_ru.md) 
* [**English**](https://github.com/DotBlood/template-bun-eslint/blob/master/README.md)


### Project Structure:
```vbnet
📦 App/
├─── 📂 bin/ #(Customization folder) alias "@bin/*"
│
├─── 📂 internal/ #(Internal modules) alias "@internal/*"
│
├─── 📂 src/ #(Source code folder) alias "@/*"
│
├─── 📂 test/ #(Test folder) alias "@test/*"
```

### Commands to run:
```zsh
bun start # to start in production mode

bun dev # for developer mode with hot mode enabled

bun lint # to check code for compliance with code style standards
```


### Installation
```zsh
git clone --depth 1 [git@github.com:DotBlood/template-bun-eslint.git ](https://github.com/DotBlood/template-bun-eslint.git)
```

```zsh
cd template-bun-eslint
```

```zsh
bun i
```

```zsh
bun dev
```
