import { BookOpen, Clock, Target, TrendingUp } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"

// 模拟数据
const recentMaterials = [
  { id: 1, title: "React 高级教程", progress: 65, lastAccessed: "2小时前" },
  { id: 2, title: "TypeScript 入门到精通", progress: 30, lastAccessed: "昨天" },
  { id: 3, title: "Next.js 最佳实践", progress: 45, lastAccessed: "3天前" },
]

const todayTasks = [
  { id: 1, title: "复习单词", count: 20, type: "vocabulary" },
  { id: 2, title: "完成阅读", count: 1, type: "reading" },
  { id: 3, title: "口语练习", count: 15, type: "speaking" },
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 欢迎区域 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">你好，学习者</h1>
          <p className="text-muted-foreground">今天是个学习的好日子！</p>
        </div>
        <Button>开始新的学习</Button>
      </div>

      {/* 学习统计 */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">今日学习时长</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45分钟</div>
            <p className="text-xs text-muted-foreground">+20% 较昨日</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">已学单词</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">本周新增</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">学习目标</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">本周完成度</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">学习趋势</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">上升</div>
            <p className="text-xs text-muted-foreground">连续学习7天</p>
          </CardContent>
        </Card>
      </div>

      {/* 继续学习 */}
      <Card>
        <CardHeader>
          <CardTitle>继续学习</CardTitle>
          <CardDescription>你最近的学习内容</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMaterials.map((material) => (
              <div key={material.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{material.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    上次访问：{material.lastAccessed}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32">
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${material.progress}%` }}
                      />
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    继续
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 今日任务 */}
      <Card>
        <CardHeader>
          <CardTitle>今日任务</CardTitle>
          <CardDescription>需要完成的学习任务</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {todayTasks.map((task) => (
              <Card key={task.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{task.count}</div>
                  <Button variant="outline" size="sm" className="mt-2">
                    开始
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 