import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative md:flex md:flex-row">
      <div className="text-white hidden h-full md:w-72 md:flex md:flex-col md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar/>
      </div>
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default layout