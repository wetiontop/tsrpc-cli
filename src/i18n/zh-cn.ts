
export const i18nZhCn = {
    welcome: 'https://npmjs.com/tsrpc\n欢迎进入 TSRPC 实用工具 V${version}',
    help: `
使用说明：

    tsrpc proto <options>                生成TSRPC Proto文件
        --config <file>                     从指定的配置文件读取参数（忽略其它命令行参数）
        -i, --input <folder>                用来生成Proto的协议文件夹路径
        -o, --output <file>                 输出的文件路径，不指定将直接输出到命令行
                                            -o XXX.ts 和 -o XXX.json 将对应输出两种不同的格式
        -c, --compatible <file>             兼容模式：要兼容的旧Proto文件的路径（默认同output）
        --new                               不兼容旧版，生成全新的Proto文件
        --ugly                              输出为可读性较差但体积更小压缩格式
        --verbose                           显示调试信息
        --ignore <glob>                     从--input范围中要忽略的文件，Glob 表达式
                                            支持传入多个，例如 --ignore "AAA" --ignore "BBB"

    tsrpc api <options>                  自动生成TSRPC API实现
        --config <file>                     从指定的配置文件读取参数（忽略其它命令行参数）
        -i, --input <file>                  Proto文件的路径
        -o, --output <folder>               输出的API文件夹路径

    tsrpc sync <options>                 同步文件夹内容，以只读方式同步到目标位置
        --config <file>                     从指定的配置文件读取参数（忽略其它命令行参数）
                                            根据配置文件，初始化 Symlink 或只读复制文件
        --from <dir>                        要同步的源文件夹
        --to <dir>                          要同步到的目标位置（只读复制）

    tsrpc link <options>                 在目标位置创建到源的 Symlink，以实现自动同步
        --config <file>                     从指定的配置文件读取参数（忽略其它命令行参数）
                                            根据配置文件，初始化 Symlink
        --from <dir>                        要同步的源文件夹
        --to <dir>                          创建 Symlink 的目标位置

    tsrpc dev <options>                  启动本地开发服务器，当源代码变更时自动重启
        --config <file>                     从指定的配置文件读取参数（忽略其它命令行参数）

    tsrpc build <options>                构建 TSRPC 后端项目
        --config <file>                     从指定的配置文件读取参数（忽略其它命令行参数）
    
二进制调试工具：

    tsrpc encode <options> [exp]         编码JS表达式
        [exp]                               要编码的值（JS表达式，例如"123" "new Uint8Array([1,2,3])"）
        -p, --proto <file>                  编码要使用的Proto文件
        -s, --schema <id>                   编码要使用的SchemaID
        -i, --input <file>                  输入为文件，不可与[exp]同用（文件内容为JS表达式）
        -o, --output <file>                 输出的文件路径，不指定将直接输出到命令行
        --verbose                           显示调试信息
                                            
    tsrpc decode <options> [binstr]      解码二进制数据
        [binstr]                            要解码的二进制数据的字符串表示，如"0F A2 E3 F2 D9"
        -p, --proto <file>                  解码要使用的Proto文件
        -s, --schema <id>                   解码要使用的SchemaID
        -i, --input <file>                  输入为文件，不可与[binstr]同用
        -o, --output <file>                 输出的文件路径，不指定将直接输出到命令行
        --verbose                           显示调试信息

    tsrpc validate <options> [exp]       验证JSON数据
        [exp]                               要验证的值（JS表达式，例如"123" "new Uint8Array([1,2,3])"）
        -p, --proto <file>                  验证要使用的Proto文件
        -s, --schema <id>                   验证要使用的SchemaID
        -i, --input <file>                  输入为文件，不可与[exp]同用（文件内容为JS表达式）

    tsrpc show <file>                    打印二进制文件内容
`.trim(),
    example: `
使用示例：

    tsrpc proto --config tsrpc.config.ts
    tsrpc api   --config tsrpc.config.ts
    tsrpc sync  --config tsrpc.config.ts
    tsrpc link  --config tsrpc.config.ts
    tsrpc dev   --config tsrpc.config.ts
    tsrpc build --config tsrpc.config.ts
`.trim(),
    errCmd: '命令格式有误，键入 tsrpc -h 以查看帮助。',
    missingParam: '缺少 ${param} 参数，键入 tsrpc -h 以查看更多信息。',
    shouldBeDir: '${path} 应当为一个文件夹',
    protoSucc: '✔ ServiceProto 已生成到：${output}',
    protoFailed: (output: string) => `⨯ ServiceProto 生成失败: ${output}`,
    fileNotExists: '文件不存在：${file}',
    fileOpenError: '文件打开失败: ${file}',
    jsParsedError: 'JS表达式解析失败: ${file}',
    invalidProtoExt: '旧 ServiceProto 格式非法，仅支持 .ts 和 .json 文件: ${file}',
    protoParsedError: '旧 ServiceProto 文件解析失败: ${file}',
    expParsedError: '表达式解析失败',
    or: '或',
    and: '和',
    encodeSucc: '✔ 编码结果已生成到：${output}',
    decodeSucc: '✔ 解码结果已生成到：${output}',
    apiSucc: '✔ Api${apiName} 生成成功: ${apiPath}',
    allApiSucc: '✔ 完成，共生成 ${newCount} 个新的 API 文件。',
    validateSucc: '✔ 验证通过',
    validateFail: '⨯ 验证不通过: ${msg}',
    error: ' 错误 ',
    success: ' 成功 ',
    helpGuide: '键入 tsrpc -h 查看更多帮助信息',
    compatibleError: '兼容旧Proto失败: ${innerError}',
    canOptimizeByNew: (oldProtoPath: string) => `检测到协议中可优化的冗余信息，删除 '${oldProtoPath}' 即可优化，但将导致新旧协议的不兼容。`,
    dirNotExists: '文件夹不存在: ${dir}',
    codeError: 'TypeScript 构建失败，请检查代码报错',
    ifUpdateProto: '检测到协议变更，是否重新生成 ServiceProto？',
    ifSyncNow: '生成后执行同步（npm run sync）吗？',
    syncFailed: '执行 "npm run sync" 失败, 你可以手动完成同步。',
    deleteConfirm: '${target}\n目标已经存在，是否删除再继续？',
    canceled: '已取消',
    confInvalid: '配置文件解析失败: ${path}',
    missingConfigItem: (itemName: string) => `配置文件中缺少配置项 '${itemName}'`,
    nothingSyncConf: '配置文件中没有配置 sync 项目',
    syncedSucc: '✔ 同步完成',
    allSyncedSucc: '✔ 已完成所有同步',
    copy: '复制文件:',
    link: '创建 Symlink:',
    linkedSucc: '✔ Symlink 创建成功',
    allLinkedSucc: '✔ 已完成所有 Symlink 创建',

    devServerRestarting: '\n———— Dev Server 自动重启中 ————\n',
    startDevServer: '✔ 启动本地服务:',
    devServerStopped: '⨯ Dev Server 已停止运行',
    protoNotReady: '⨯ Dev Server 未启动，请先修复 ServiceProto 问题',

    buildClean: (outDir: string) => `清空目录 '${outDir}'`,
    buildTsc: `编译 TypeScript`,
    buildCopyFiles: `复制文件`,
    buildSucc: '构建成功！'
}