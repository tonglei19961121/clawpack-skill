FROM node:20-alpine

WORKDIR /app

# 安装依赖（不运行脚本）
COPY package*.json ./
RUN npm install --ignore-scripts

# 复制源码并构建
COPY . .
RUN npm run build

# 链接到全局（方便测试）
RUN npm link

# 创建 openclaw 目录结构
RUN mkdir -p /root/.openclaw/skills

# 将 skill 安装到 openclaw
RUN ln -s /app /root/.openclaw/skills/clawpack-skill

CMD ["node", "./dist/cli.js"]
