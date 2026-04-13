# 华语中桥 | Huayu Zhongqiao

华语中桥（Huayu Zhongqiao）是一家致力于促进中国与“一带一路”沿线国家教育文化交流的专业机构。本项目是为该机构量身定制的官方落地页（Landing Page），主要面向阿塞拜疆等国际学生，提供高质量的中国留学咨询、短期研修项目及在华生活支持服务推介。

## 🚀 技术栈 (Tech Stack)

本项目采用现代化的前端技术栈构建，确保了高性能与良好的开发体验：

- **核心框架**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/)
- **动画库**: [Framer Motion](https://www.framer.com/motion/)
- **图标库**: [Lucide React](https://lucide.dev/)

## 📁 项目结构 (Project Structure)

```text
huayu-zhongqiao/
├── public/            # 静态资源（Favicon、图标精灵图、robots.txt、站点地图等）
├── src/               # 源代码目录
│   ├── assets/        # 图片、SVG等静态媒体资源
│   ├── components/    # 可复用的 React 页面区块组件 (Hero, About, Programs, etc.)
│   ├── App.tsx        # 根组件，负责页面布局和组件组装
│   ├── App.css        # 自定义全局组件样式
│   ├── data.ts        # 网站多语言（中/英）配置和文案静态数据
│   ├── index.css      # 全局样式与 Tailwind 指令入口
│   └── main.tsx       # React 应用的挂载入口
├── eslint.config.js   # ESLint 语法检查配置
├── package.json       # 项目依赖及执行脚本
├── tailwind.config.js # Tailwind CSS 配置文件
└── vite.config.ts     # Vite 构建工具配置
```

## 🛠️ 本地开发 (Getting Started)

要开始本地开发，请按照以下步骤操作：

1. **克隆项目**

   ```bash
   git clone <repository-url>
   cd huayu-zhongqiao
   ```

2. **安装依赖**

   本项目推荐使用 `npm`，你也可以使用 `yarn` 或 `pnpm`。

   ```bash
   npm install
   ```

3. **启动开发服务器**

   ```bash
   npm run dev
   ```

   服务器启动后，在浏览器中访问 [http://localhost:5173](http://localhost:5173) 即可实时预览项目。

## 📜 可用脚本 (Available Scripts)

在项目根目录下，你可以运行以下命令：

- `npm run dev`: 启动支持热更新（HMR）的本地开发服务器。
- `npm run build`: 运行 TypeScript 类型检查，并使用 Vite 构建生产环境产物。
- `npm run lint`: 运行 ESLint 检查代码中的潜在错误和格式问题。
- `npm run preview`: 在本地启动一个静态服务器，用于预览 `dist` 目录中的构建产物。

## 🌐 部署 (Deployment)

项目构建完成后，产物位于 `dist` 目录中。这些纯静态文件可以轻松部署到任何静态网站托管服务，例如：

- Vercel
- Netlify
- GitHub Pages
- Nginx / Apache

只需运行构建命令并上传 `dist` 文件夹即可：

```bash
npm run build
```

## 📝 许可证 (License)

本项目归华语中桥（Huayu Zhongqiao）所有。
