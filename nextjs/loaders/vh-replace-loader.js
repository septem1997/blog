module.exports = function(source) {
  return source.replace(/(height\s?:[\s\S]*?)(\d{1,3})vh/g,'$1calc(var(--vh) * $2)');
}
