
import LeftSidebar from "@/components/LeftSidebar";
import NavigationBar from "@/components/NavigationBar";
import { getUserByEmail } from "@/lib/actions/database-actions";
import { getServerSession } from "next-auth";


export default async function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  const session=await getServerSession();
  const user=await getUserByEmail(session?.user?.email as string)

  return (
    <main className="flex h-screen w-full flex-col">
      <NavigationBar user={user as User}/>
      <div className="flex w-full h-[calc(100%-80px)]">
        <LeftSidebar />
        {children}
      </div>
    </main>
      
  )
}
