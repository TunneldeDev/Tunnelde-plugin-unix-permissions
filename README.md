# Unix Permissions · Unix 权限解读

Translate Unix permission bits between octal and symbolic notation, including special bits. No files are changed.

Open **Unix Permissions**, enter a value (for example `0755`), then choose **Inspect permissions**. Requires Node.js 22 or later. No network, files, saved input or host permissions. Copying is always explicit.

在八进制和符号表示之间转换 Unix 权限位，支持特殊位，不修改文件。打开插件页面，输入内容后点击「解读权限」。需要 Node.js 22 或更高版本；不读取文件、不联网，也不保存输入。

## Independent development

`npm ci --ignore-scripts` → `npm run build` → `npm run verify` → `npm run package`. Push a matching `vX.Y.Z` tag to publish this plugin independently. The Hub distributes the release URL and SHA-256; it does not build this package.
