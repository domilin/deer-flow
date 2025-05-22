import { Dashboard } from "./components/dashboard"
import { Learning } from "./components/learning"
import { Library } from "./components/library"
import { Profile } from "./components/profile"
import { Review } from "./components/review"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearnPage() {
  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard">首页</TabsTrigger>
          <TabsTrigger value="library">资料库</TabsTrigger>
          <TabsTrigger value="learning">学习/练习</TabsTrigger>
          <TabsTrigger value="review">复习</TabsTrigger>
          <TabsTrigger value="profile">我的</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <Dashboard />
        </TabsContent>
        <TabsContent value="library">
          <Library />
        </TabsContent>
        <TabsContent value="learning">
          <Learning />
        </TabsContent>
        <TabsContent value="review">
          <Review />
        </TabsContent>
        <TabsContent value="profile">
          <Profile />
        </TabsContent>
      </Tabs>
    </div>
  )
}
