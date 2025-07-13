# React 鼓机 (React Drum Machine)

一个使用 React 构建的交互式鼓机应用，允许用户通过点击或键盘按键触发不同的鼓点音效。

[在线体验](https://vhjihuang.github.io/react-drum-machine)

![React鼓机截图](https://via.placeholder.com/800x400?text=React+Drum+Machine)

## 功能特点

- 9个不同的鼓垫，每个都有独特的音效
- 支持鼠标点击和键盘按键触发音效
- 实时显示当前播放的音效名称
- 响应式设计，适配各种屏幕尺寸
- 视觉反馈效果，增强用户体验

## 技术栈

- **React 19** - 用于构建用户界面
- **Vite 7** - 现代前端构建工具
- **CSS3** - 样式和动画
- **Web Audio API** - 音频处理

## 安装与运行

### 前提条件

- Node.js (v18.0.0 或更高版本)
- npm (v9.0.0 或更高版本)

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/YOUR_USERNAME/react-drum-machine.git
cd react-drum-machine
```

2. 安装依赖
```bash
npm install
```

3. 本地运行
```bash
npm run dev
```

4. 打开浏览器访问 `http://localhost:5173/react-drum-machine/`

## 键盘快捷键

鼓机支持以下键盘快捷键来触发音效：

| 按键 | 音效 |
|------|------|
| Q | Heater-1 |
| W | Heater-2 |
| E | Heater-3 |
| A | Heater-4 |
| S | Clap |
| D | Open-HH |
| Z | Kick-n-Hat |
| X | Kick |
| C | Closed-HH |

## 项目结构

```
react-drum-machine/
├── public/             # 静态资源
├── src/                # 源代码
│   ├── components/     # React组件
│   │   ├── DrumMachine.jsx  # 主鼓机组件
│   │   └── DrumPad.jsx      # 鼓垫组件
│   ├── data/           # 数据文件
│   │   └── drumPads.js      # 鼓垫配置
│   ├── App.jsx         # 应用入口组件
│   ├── App.css         # 应用样式
│   ├── index.css       # 全局样式
│   └── main.jsx        # 应用入口点
├── index.html          # HTML模板
├── vite.config.js      # Vite配置
└── package.json        # 项目依赖和脚本
```

## 构建与部署

### 构建项目
```bash
npm run build
```

### 部署到GitHub Pages
```bash
npm run deploy
```

项目已部署在 [https://vhjihuang.github.io/react-drum-machine](https://vhjihuang.github.io/react-drum-machine)

## 开发计划

- [ ] 添加音量控制功能
- [ ] 实现不同音效库切换
- [ ] 添加录制和回放功能
- [ ] 支持自定义键盘映射

## 贡献指南

欢迎贡献！请随时提交问题或拉取请求。

## 许可证

MIT
