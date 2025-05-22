import { Calendar, Clock, Target } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Progress } from "~/components/ui/progress"

// 模拟数据
const reviewData = {
  today: {
    total: 50,
    completed: 20,
    remaining: 30,
    categories: [
      { name: "单词", count: 15 },
      { name: "短语", count: 8 },
      { name: "语法", count: 7 },
    ],
  },
  schedule: [
    {
      id: 1,
      title: "React 核心概念",
      type: "单词",
      count: 20,
      dueDate: "今天",
      priority: "高",
    },
    {
      id: 2,
      title: "TypeScript 类型系统",
      type: "语法",
      count: 15,
      dueDate: "明天",
      priority: "中",
    },
    {
      id: 3,
      title: "Next.js 路由",
      type: "短语",
      count: 10,
      dueDate: "后天",
      priority: "低",
    },
  ],
}

export function Review() {
  return (
    <div className="space-y-6">
      {/* 今日复习概览 */}
      <Card>
        <CardHeader>
          <CardTitle>今日复习</CardTitle>
          <CardDescription>完成今日复习任务，巩固学习成果</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span>今日目标</span>
              </div>
              <span className="font-medium">
                {reviewData.today.completed}/{reviewData.today.total}
              </span>
            </div>
            <Progress
              value={(reviewData.today.completed / reviewData.today.total) * 100}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {reviewData.today.categories.map((category) => (
                <Card key={category.name}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{category.count}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 复习计划 */}
      <Card>
        <CardHeader>
          <CardTitle>复习计划</CardTitle>
          <CardDescription>根据艾宾浩斯遗忘曲线安排复习</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reviewData.schedule.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.title}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.count} 个内容</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  开始复习
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 复习工具 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">复习统计</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              查看统计
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">调整计划</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              修改计划
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 