import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

import { Dashboard } from "./components/dashboard"
import { Learning } from "./components/learning"
import { Library } from "./components/library"
import { Profile } from "./components/profile"
import { Review } from "./components/review"


export default function LearnPage() {
  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList>
          <TabsTrigger value="dashboard">仪表盘</TabsTrigger>
          <TabsTrigger value="library">学习库</TabsTrigger>
          <TabsTrigger value="learning">学习</TabsTrigger>
          <TabsTrigger value="review">复习</TabsTrigger>
          <TabsTrigger value="profile">个人</TabsTrigger>
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
