import NavigationBar from "@/components/NavigationBar"
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
    <main>
      <NavigationBar user={user as User}/>
      {children}
    </main>
      
  )
}
