module.exports = function(source) {
  // todo 水篇文章
  return source.replace(/(height\s?:[\s\S]*?)(\d{1,3})vh/g,'$1calc(var(--vh) * $2)');
}
