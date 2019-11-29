# fis3-preprocessor-json2js
将JSON文件转成js文件，以支持合并等类JS操作

```javascript
fis.match('(i18n/**).json', {
    isMod: true,
    isJsLike: true,
    rExt: 'js',
    moduleId: '$1',
    preprocessor: fis.plugin('json2js')
  })
```
