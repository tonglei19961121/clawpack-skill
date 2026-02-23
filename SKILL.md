---
name: clawpack-skill
description: |
  OpenClaw 配置备份与恢复工具集成。通过 clawpack CLI 管理配置打包、多设备配置同步、GitHub Gist 云端备份。
  Use when: 用户需要 (1) 备份/打包 OpenClaw 配置，(2) 恢复/解压配置，(3) 管理多设备配置 profile，(4) 同步配置到 GitHub Gist，(5) 迁移配置到新电脑。
---

# Clawpack Skill

clawpack 是一个 OpenClaw 配置管理工具，支持本地打包、多设备配置管理和云端备份。

## 前提条件

确保 clawpack CLI 已安装：
```bash
npm install -g clawpack
```

## 工具使用指南

### 本地打包（无需 GitHub）

**打包当前配置：**
```bash
clawpack pack [output.zip]
```

**解压恢复配置：**
```bash
clawpack unpack <backup.zip>
```

### 多配置管理（Profile）

**添加配置：**
```bash
clawpack profile add <name> <gist-id> [description]
```

**列出所有配置：**
```bash
clawpack profile list
```

**切换当前配置：**
```bash
clawpack profile use <name>
```

**删除配置：**
```bash
clawpack profile remove <name>
```

### GitHub 云端备份

**备份到 GitHub Gist：**
```bash
clawpack backup [options]
```

**从 Gist 恢复：**
```bash
clawpack restore [gist-id|profile-name]
```

**查看状态：**
```bash
clawpack status
```

**列出备份的技能：**
```bash
clawpack list
```

## 常见场景

### 场景 1：换电脑迁移配置
```bash
# 旧电脑：打包
clawpack pack

# 新电脑：解压
clawpack unpack clawpack-backup-xxx.zip
```

### 场景 2：多设备同步（推荐）
```bash
# 设置 profile
clawpack profile add work-mac abc123 "公司 Mac"
clawpack profile add home-pc def456 "家用电脑"

# 公司电脑备份
clawpack profile use work-mac
clawpack backup

# 家用电脑同步
clawpack profile use home-pc
clawpack restore work-mac
```

### 场景 3：首次设置 GitHub 备份
```bash
# 1. 创建 GitHub Personal Access Token (gist scope)
# 2. 设置环境变量
export CLAWPACK_TOKEN=ghp_xxx

# 3. 备份
clawpack backup
```

## 环境变量

| 变量 | 说明 |
|------|------|
| `CLAWPACK_TOKEN` | GitHub Personal Access Token |

## 完整帮助

```bash
clawpack --help
```
