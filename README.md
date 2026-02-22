# Clawpack Skill for OpenClaw

让 OpenClaw 直接管理配置备份和恢复，无需手动运行命令。

## 版本

- **v1.1.0** - 支持多配置管理（profile）
- **v1.0.0** - 初始版本

## 安装

```bash
npm install -g clawpack-skill
```

或作为 OpenClaw 扩展：

```bash
cd ~/.openclaw/extensions
git clone https://github.com/tonglei19961121/clawpack-skill.git
cd clawpack-skill
npm install
```

## 使用方法

安装后，你可以直接通过对话使用 clawpack：

### 基础操作

```
用户：帮我打包当前配置
AI：我来帮你打包 OpenClaw 配置...
    [使用 clawpack_pack 工具]
    ✅ 配置已打包：clawpack-backup-1234567890.zip

用户：备份到 GitHub
AI：正在备份到 GitHub...
    [使用 clawpack_backup]
    ✅ 备份成功！Gist ID: abc123

用户：查看我有哪些配置
AI：让我查看你的备份配置...
    [使用 clawpack_profileList]
    你有 3 个配置：
    - work-mac (公司电脑)
    - home-pc (家用电脑)
    - laptop (笔记本)
```

### 多配置管理（v1.1.0 新功能）

```
用户：添加一个叫 work-mac 的配置，Gist ID 是 abc123
AI：我来添加...
    [使用 clawpack_profileAdd]
    ✅ 配置 "work-mac" 添加成功！

用户：切换到 work-mac 配置
AI：正在切换...
    [使用 clawpack_profileUse]
    ✅ 已切换到 "work-mac" 配置

用户：备份到公司电脑配置
AI：正在备份...
    [使用 clawpack_backup --profile work-mac]
    ✅ 已推送到 "work-mac" 配置

用户：从公司电脑恢复配置
AI：正在恢复...
    [使用 clawpack_restore work-mac]
    ✅ 配置已恢复！
```

## 可用工具

### 基础工具

| 工具 | 用途 | 示例对话 |
|------|------|----------|
| `clawpack_pack` | 打包配置到本地文件 | "帮我打包配置" |
| `clawpack_unpack` | 从本地文件解压 | "解压 backup.zip" |
| `clawpack_backup` | 备份到 GitHub | "备份到云端" |
| `clawpack_restore` | 从 GitHub 恢复 | "从云端恢复" |
| `clawpack_status` | 检查状态 | "检查 clawpack 状态" |
| `clawpack_list` | 列出技能 | "我有几个技能" |

### 多配置管理工具（v1.1.0）

| 工具 | 用途 | 示例对话 |
|------|------|----------|
| `clawpack_profileList` | 列出所有配置 | "查看我的配置" |
| `clawpack_profileAdd` | 添加新配置 | "添加 work-mac 配置" |
| `clawpack_profileUse` | 切换配置 | "切换到 work-mac" |
| `clawpack_profileRemove` | 删除配置 | "删除旧配置" |

## 多配置管理示例

### 场景 1：管理多台电脑

```
用户：我有 3 台电脑，公司、家里、笔记本
AI：我来帮你设置...

AI：已添加 3 个配置：
   - work-mac (公司 MacBook)
   - home-pc (家用台式机)  
   - laptop (笔记本)

用户：备份公司电脑
AI：已推送到 "work-mac" 配置

用户：家用电脑同步公司配置
AI：正在从 "work-mac" 恢复...
   ✅ 同步完成！
```

### 场景 2：使用昵称代替 Gist ID

```
用户：我不想记这么长的 Gist ID
AI：使用昵称功能！

用户：添加一个叫 "main" 的配置
AI：好的，Gist ID 是多少？
用户：abc123...
AI：✅ 已添加 "main" 配置

用户：以后直接用 "main" 恢复
AI：好的，执行：clawpack restore main
```

## 依赖

- clawpack >= 1.4.0
- OpenClaw >= 2026.2.0

## License

MIT
