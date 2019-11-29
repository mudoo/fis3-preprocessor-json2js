module.exports = function (content, file, opt) {
  if (!file.isJsonLike && !file.isJsLike){
    return content;
  }

  // Buffer转换
  if(content instanceof Buffer){
    content = content.toString('utf-8');
  }

  content = fis.compile.partial('module.exports='+ content, file, {
    ext: 'js',
    isJsLike: true
  })

  return content;
};
