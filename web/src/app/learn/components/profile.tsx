import { Calendar, Clock, Target, Trophy } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Progress } from "~/components/ui/progress"

// 模拟数据
const userData = {
  name: "张三",
  email: "zhangsan@example.com",
  avatar: "/avatars/default.png",
  level: "中级学习者",
  joinDate: "2024-01-01",
  stats: {
    totalLearningTime: "120小时",
    totalWords: 1500,
    streak: 30,
    completionRate: 85,
  },
  achievements: [
    {
      id: 1,
      title: "坚持不懈",
      description: "连续学习30天",
      icon: "🏆",
    },
    {
      id: 2,
      title: "词汇达人",
      description: "掌握1000个单词",
      icon: "📚",
    },
    {
      id: 3,
      title: "学习先锋",
      description: "完成10个课程",
      icon: "🎯",
    },
  ],
}

export function Profile() {
  return (
    <div className="space-y-6">
      {/* 个人信息 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback>{userData.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{userData.name}</CardTitle>
              <CardDescription>{userData.email}</CardDescription>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  {userData.level}
                </span>
                <span className="text-sm text-muted-foreground">
                  加入时间：{userData.joinDate}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full">
            编辑资料
          </Button>
        </CardContent>
      </Card>

      {/* 学习统计 */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总学习时长</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.stats.totalLearningTime}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">已学单词</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.stats.totalWords}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">连续学习</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.stats.streak}天</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">完成率</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.stats.completionRate}%</div>
          </CardContent>
        </Card>
      </div>

      {/* 成就 */}
      <Card>
        <CardHeader>
          <CardTitle>学习成就</CardTitle>
          <CardDescription>记录你的学习里程碑</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {userData.achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{achievement.icon}</span>
                    <CardTitle className="text-sm">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 学习设置 */}
      <Card>
        <CardHeader>
          <CardTitle>学习设置</CardTitle>
          <CardDescription>自定义你的学习体验</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">每日学习目标</h3>
                <p className="text-sm text-muted-foreground">
                  设置每日需要完成的学习任务数量
                </p>
              </div>
              <Button variant="outline" size="sm">
                修改
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">复习提醒</h3>
                <p className="text-sm text-muted-foreground">
                  设置复习提醒的时间和频率
                </p>
              </div>
              <Button variant="outline" size="sm">
                修改
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">学习偏好</h3>
                <p className="text-sm text-muted-foreground">
                  设置学习内容的难度和类型
                </p>
              </div>
              <Button variant="outline" size="sm">
                修改
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 