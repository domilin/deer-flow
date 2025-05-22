import { Search, Filter } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"

// 模拟数据
const materials = [
  {
    id: 1,
    title: "React 高级教程",
    description: "深入学习 React 的高级特性和最佳实践",
    category: "前端开发",
    level: "高级",
    duration: "8小时",
    progress: 65,
  },
  {
    id: 2,
    title: "TypeScript 入门到精通",
    description: "从基础到高级的 TypeScript 完整学习路径",
    category: "编程语言",
    level: "中级",
    duration: "12小时",
    progress: 30,
  },
  {
    id: 3,
    title: "Next.js 最佳实践",
    description: "使用 Next.js 构建现代化 Web 应用",
    category: "前端开发",
    level: "中级",
    duration: "6小时",
    progress: 45,
  },
]

export function Library() {
  return (
    <div className="space-y-6">
      {/* 搜索和筛选 */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="搜索学习材料..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* 材料列表 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {materials.map((material) => (
          <Card key={material.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{material.title}</CardTitle>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                  {material.level}
                </span>
              </div>
              <CardDescription>{material.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{material.category}</span>
                  <span>{material.duration}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>学习进度</span>
                    <span>{material.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${material.progress}%` }}
                    />
                  </div>
                </div>
                <Button className="w-full">继续学习</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 