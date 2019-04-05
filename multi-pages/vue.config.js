const glob = require('glob');
const path = require('path');
const PAGE_PATH = path.resolve(__dirname, './src/pages');
// 获取src/pages下面的页面
let pages = function (opt) {
  let entryFiles = glob.sync(PAGE_PATH + '/*/main.js');
  let map = {};
  entryFiles.forEach((filePath) => {
    let filename = path.basename(path.dirname(filePath));
    if (opt && !opt[filename]) {
      map[filename] = filePath;
    }
  });
  if (opt) {
    map = { ...map, ...opt };
  }
  return map
};

module.exports = {
  pages: pages()
};
