const path = require('path')
const fs = require('fs')

// babel-plugins-import插件的customName函数
module.exports = function (name, file, type = 'lib') {
  const root = path.resolve(__dirname, `../../${type}`)
  var components = []

  fs.readdirSync(root).forEach(fileName => {
    var info = fs.statSync(root + '/' + fileName)

    if (info.isDirectory()) {
      components
      components = [...components, fileName]
    }
  })

  if (components.includes(name)) {
    return `lia-ui/${type}/${name}`
  }

  return `antd/${type}/${name}`
}
