#!/bin/bash

# 这个脚本用于启动 DeerFlow 项目的完整开发环境
# 它会同时启动后端服务器和前端 Web UI
# 设计原因：统一管理开发环境，避免手动启动多个服务

# 检查是否以开发模式运行
# 支持多种参数形式：--dev, -d, dev, development
# 设计原因：提供灵活的命令行参数，方便不同开发习惯的用户使用
if [ "$1" = "--dev" -o "$1" = "-d" -o "$1" = "dev" -o "$1" = "development" ]; then
  echo -e "Starting DeerFlow in [DEVELOPMENT] mode...\n"
  
  # 启动后端服务器，使用 uv 运行 Python 代码
  # --reload 参数启用热重载功能，方便开发
  # & 将进程放入后台运行
  # SERVER_PID 保存进程 ID，用于后续管理
  # 设计原因：热重载可以自动检测代码变化并重启服务器，提高开发效率
  uv run server.py --reload & SERVER_PID=$$!
  
  # 切换到 web 目录并启动前端开发服务器
  # 使用 pnpm 作为包管理器运行开发服务器
  # 同样放入后台运行并保存进程 ID
  # 设计原因：前后端分离开发，但统一管理
  cd web && pnpm dev & WEB_PID=$$!
  
  # 设置信号处理器，捕获 Ctrl+C (SIGINT) 和终止信号 (SIGTERM)
  # 当收到这些信号时，会同时终止两个服务器进程
  # 设计原因：确保程序可以优雅地退出，不会留下僵尸进程
  trap "kill $$SERVER_PID $$WEB_PID" SIGINT SIGTERM
  
  # 等待所有后台进程完成
  # 设计原因：保持脚本运行，直到所有服务被终止
  wait
else
  # 生产模式：直接运行后端服务器，不使用热重载
  # 设计原因：生产环境不需要热重载功能，提高性能
  echo -e "Starting DeerFlow in [PRODUCTION] mode...\n"
  uv run server.py
  
  # 切换到 web 目录并启动生产环境的前端服务器
  # 设计原因：生产环境使用优化后的构建版本
  cd web && pnpm start
fi
