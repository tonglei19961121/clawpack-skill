# Clawpack Skill for OpenClaw

让 OpenClaw 直接管理配置备份和恢复，无需手动运行命令。

## 安装

```bash
openclaw plugins install @openclaw/clawpack
```

或手动安装：
```bash
cd ~/.openclaw/extensions
npm install @openclaw/clawpack
```

## 使用方法

安装后，你可以直接通过对话使用 clawpack：

### 打包配置（本地文件）

```
用户：帮我打包当前配置
AI：我来帮你打包 OpenClaw 配置...
[使用 clawpack_pack 工具]
✅ 配置已打包：clawpack-backup-1234567890.zip
   位置：/Users/ray/clawpack-backup-1234567890.zip
   
你可以通过 U 盘、微信、邮件等方式将这个文件传输到其他设备，
然后在目标设备上运行：clawpack unpack clawpack-backup-1234567890.zip
```

### 解压配置

```
用户：解压 my-config.zip
AI：我来帮你解压配置...
[使用 clawpack_unpack 工具]
✅ 配置已恢复！

请运行以下命令使配置生效：
openclaw gateway restart
```

### 备份到 GitHub

```
用户：备份我的配置到 GitHub
AI：我来帮你备份到 GitHub...
[使用 clawpack_backup 工具]
✅ 备份成功！
   Gist ID: abc123def456
   
在其他设备恢复：
clawpack restore abc123def456 --full
```

### 查看状态

```
用户：检查 clawpack 状态
AI：我来检查...
[使用 clawpack_status 工具]
📊 clawpack 状态
   
   已安装：✅ v1.3.0
   GitHub 授权：✅ 已授权 (GITHUB_TOKEN)
   默认备份：abc123def456
```

## 可用工具

| 工具 | 用途 |
|------|------|
| `clawpack_pack` | 打包配置到本地文件 |
| `clawpack_unpack` | 从本地文件解压配置 |
| `clawpack_backup` | 备份到 GitHub |
| `clawpack_restore` | 从 GitHub 恢复 |
| `clawpack_status` | 检查状态 |
| `clawpack_list` | 列出已安装技能 |

## 依赖

- clawpack >= 1.3.0
- OpenClaw >= 2026.2.0

## License

MIT
