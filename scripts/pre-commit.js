const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

const main = async () => {
  const { stdout } = await exec(`git diff --cached --name-only`)
  const files = stdout.trim().split(/\s/)

  if (files.length) {
    // 只检查脚本文件
    const scripts = files.filter((filename) => {
      const { dir, ext } = path.parse(filename)

      return fs.existsSync(filename) && dir.startsWith('components') && /\.(ts|tsx|js)$/.test(ext)
    })

    if (scripts.length) {
      try {
        // 修复lint可以自动修复的问题
        await exec(`eslint ${scripts.join(' ')} --fix`)

        // 如果不存在需要手动修复的问题，则把修复后的代码再次提交到暂存区
        await exec(`git add ${scripts.join(' ')}`)
      } catch (ex) {
        const { message } = ex

        console.error(message)
        process.exit(ex.code)
      }
    }
  }
}

main()
