# ESDoc External DOM Events Plugin

Add links to DOM Event interfaces definitions in MDN documentation

## Install
```bash
npm install esdoc-external-events-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [{
      "name": "esdoc-external-events-plugin",
      "option": { "enable": true }
  }]
}
```

`enable` is default `true`.

## LICENSE
MIT

## Author
[Yaroslav "Yesley" Kovalev](https://github.com/yesley)
