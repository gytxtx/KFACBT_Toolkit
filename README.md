# KFACBT's Toolkit

<div align="center">
    <img width="100px" src="./Material/KFACBT_Toolkit.ico" align="center" alt="KFACBT's Toolkit" />
    <h2 align="center">KFACBT's Toolkit</h2>
    <p align="center">为 Windows 用户提供固定高级功能解决方案的应用程序。</p>
</div>

<div align="center">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/gytxtx/KFACBT_Toolkit?style=for-the-badge"> 
    <img alt="GitHub" src="https://img.shields.io/github/license/gytxtx/KFACBT_Toolkit?style=for-the-badge"> 
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gytxtx/KFACBT_Toolkit?style=for-the-badge"> 
</div>

> [!WARNING]
>
> ## 以下留言致以来自中国大陆的开发者：
>
> For English speakers, please ignore this message.
>
> **请不要继续在 issues 板块下发表任何无意义且无法促进此项目持续发展的内容**。在提交 issue 之前，请仔细思考你要发布的内容**是否合理**，如果不能，请不要浪费其他人的时间；同时请考虑**开发者能否修复/实现**，如果不能，请自己提交 PR 而不是 issue。
> 在交流时请尊重他人，不要使用不文明用语。请不要催促或强求开发者和其他贡献者，他们是一群热爱开源的志愿者，不是你的私人雇员！
>
> 尽可能在除国内社交平台外的其他地方使用英语而不是中文，我们会优先处理英文内容。

## 简介

**KFACBT's Toolkit** 是 [KFACBT](https://github.com/gytxtx) 使用 `易语言` 开发的一款面向 `Windows` 的工具箱。

- 技术关键词: 易语言 / EPL / 工具箱
- 支持的操作系统: Windows 7 - Windows 11

## 你应该需要知道的

> [!NOTE]\
> 以下简称 `KFACBT's Toolkit` 为 **应用程序**
>
> 该应用程序使用 `易语言` 编写，部分反病毒软件可能会向用户报告应用程序可能危害此电脑，请**忽略这一类提示并信任应用程序**。
>
> 除了应用程序内提供的功能，应用程序 **不会额外向 `Windows` 注册表写入不必要的数据，仅会在应用程序下的运行目录生成一个 `config.ini` 配置文件和 `Log.log` 日志文件**。
>
> 应用程序内提供的部分功能可能需要向用户申请 **管理员权限**。

## 重要信息

### 通知 1 - `2023.12.07`

> [!IMPORTANT]\
> 由于易语言的一些限制(如 **不支持 Unicode 、不支持 64 位软件开发、软件误报等** )，在 **2024 年** ，**结束对此易语言项目的开发和支持** ；
> 
> 在 **2024 年** ，此项目将会使用基于 `.NET 的 Visual Basic 语言` **重新开发** 。新项目将会 **继承易语言项目的大部分功能** ，支持 `Unicode` 、 `x64` 软件开发等；
> 
> 这个易语言项目的最终版本 **将会修复一些 Bug** ，会增加一些新功能或特性。
> 
> 新的基于 `Visual Basic .NET` 的项目的完成时间？纯看开发者本人心情(总之不要抱太大希望就是了)。
> 
> 感谢使用本产品的所有用户的支持与理解。

---

### 通知 2 - `2023.10.30`

> [!IMPORTANT]\
> 本项目在一些特定操作系统上(Windows 7 以下版本)将会停止支持。
> 
> Q:为什么此项目不支持 Windows 7 以下的版本？
> 
> A:因为新版本将会添加一些新的特性，而新特性不支持 Windows 7 以下的版本；还有 Windows 7 以下的操作系统基本没人在使用了

## 功能

目前，该工具箱含有以下功能。

- 时钟
- 蜂鸣器
- 桌面/分辨率管理
- 播放器
- 网域管理
- 朗读功能
- 系统管理功能

> 其他功能可以下载程序或编译源代码查看。

## To do list

 - [x] 添加背景图片
 - [x] 背景图片透明度
 - [x] 窗口背景色
 - [x] “背景音乐” 功能
 - [x] 优化“许可证”窗口，改为“设置向导”窗口
 - [ ] “设置向导”窗口内“许可协议”添加更新提示
 - [ ] “关闭计算机”功能增强
 - [x] 优化“电源选项”窗口（模块化、适配不同的 Windows 操作系统）
 - [ ] 适配 **Windows 11 24H2** “电源选项”窗口样式（去除 Windows 徽标）
 - [ ] 载入窗口优化
 - [ ] 重建用户群
 - [ ] “检查更新” 支持内置下载 + 点击跳转浏览器 + 复制下载链接
 - [ ] 浅色/深色主题（已放弃）
 - [ ] “个性化” 功能预览界面
 - [ ] “加载” 窗口阴影 
 - [ ] 动态壁纸
 - [ ] 更新已有功能 UI
 - [ ] 更新新版 “文件管理器”
 - [ ] 在启动时支持检查更新
 - [ ] 主题包功能
 - [ ] 程序文本一致化
 - [ ] 程序 UI 一致化
 - [ ] “嵌入式插件” 功能
 - [x] 更美观的 “更新日志” 界面
 - [x] 修复 “检查更新” 卡顿问题
 - [ ] “远程控制” 功能
 - [ ] Wi-Fi 连接管理
 - [x] “主窗口” UI 大改
 - [x] 主窗口添加问候语
 - [ ] 浅色/深色主题(放弃了)
 - [ ] DPI 缩放支持
 - [ ] 制作宣传视频
 - [ ] 添加 “感谢名单” 项目
 - [x] 更好的程序依赖呈现
 - [x] 许可证迁移至 Apache License 2.0
 - [ ] 内置下载器
 - [ ] 修复窗口图标问题
 - [ ] “记事本” 功能
 - [ ] “朗读文本” 窗口优化
 - [ ] “系统管理” 功能（做了一半）
 - [ ] 支持修改任务栏透明度
 - [ ] “计算器” 功能
 - [ ] “远程桌面管理器” 功能
 - [ ] FTP 管理（已放弃）
 - [ ] “文本比较” 功能优化
 - [ ] 更好的“公告/资讯”系统
 - [ ] 添加文档到 “帮助与支持” 中
 - [ ] 注册著作权
 - [ ] KFACBT's Toolkit v2

## 下载
前往 [Releases](https://github.com/gytxtx/KFACBT_Toolkit/releases) 页下载。

## 编译

该软件采用易语言编写，如果你想要编译该软件，请准备以下环境：

- Windows 7 和以上版本的电脑
- 易语言 v5.93 或更高版本

同时，该软件引用了 [精易模块](https://ec.125.la/)，请在编辑 / 引用代码时遵守相关协议。

## 文档

[文档](https://gytxtx.github.io/Docs/#/docs/KFACBT_Toolkit/)

## 协议

本软件采用 **Apache License 2.0** 协议，在分发、修改软件时 **必须要标注** 源码来源和原作者，并且在相关的文件或页面中保留原许可证的版权声明和免责声明。此外，你可以选择修改并分发该软件的修改版本，但无需开源你的修改，只需在分发时附上适用的 **Apache License 2.0** 协议副本。

## 其它
 - [易语言官网](https://dywt.com.cn/)
 - [信息 API](https://gytxtx.github.io/KFACBT_Toolkit/API/GetInformation.json) | 获取应用程序的最新信息。
 - [更新 API](https://gytxtx.github.io/KFACBT_Toolkit/API/GetLastVersionInfo.json) | 获取最新版本的更新信息。
 - [Apache License v2](https://www.apache.org/licenses/LICENSE-2.0)
 <!-- - [GNU GENERAL PUBLIC LICENSE Version 3](https://www.gnu.org/licenses/gpl-3.0.txt) -->

<!-- # KFACBT_Toolkit
KFACBT's Toolkit - KFACBT 的工具箱 | 使用易语言开发 -->
