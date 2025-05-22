import { BookOpen, Clock, CheckCircle } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Progress } from "~/components/ui/progress"

// 模拟数据
const currentLesson = {
  id: 1,
  title: "React Hooks 深入理解",
  description: "学习 React Hooks 的核心概念和使用场景",
  progress: 45,
  timeSpent: "30分钟",
  totalTime: "60分钟",
  sections: [
    {
      id: 1,
      title: "useState 和 useEffect",
      completed: true,
    },
    {
      id: 2,
      title: "useContext 和 useReducer",
      completed: true,
    },
    {
      id: 3,
      title: "自定义 Hooks",
      completed: false,
    },
    {
      id: 4,
      title: "性能优化",
      completed: false,
    },
  ],
}

export function Learning() {
  return (
    <div className="space-y-6">
      {/* 课程信息 */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{currentLesson.title}</CardTitle>
              <CardDescription>{currentLesson.description}</CardDescription>
            </div>
            <Button>继续学习</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>已学习 {currentLesson.timeSpent}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>总时长 {currentLesson.totalTime}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>整体进度</span>
                <span>{currentLesson.progress}%</span>
              </div>
              <Progress value={currentLesson.progress} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 章节列表 */}
      <Card>
        <CardHeader>
          <CardTitle>课程章节</CardTitle>
          <CardDescription>完成所有章节以掌握课程内容</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentLesson.sections.map((section) => (
              <div
                key={section.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-3">
                  {section.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2" />
                  )}
                  <span className="font-medium">{section.title}</span>
                </div>
                <Button variant="outline" size="sm">
                  {section.completed ? "复习" : "开始学习"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 学习工具 */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">笔记</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              查看笔记
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">练习</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              开始练习
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">讨论</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              参与讨论
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 