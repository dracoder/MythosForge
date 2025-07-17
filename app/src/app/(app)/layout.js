import { AppSidebar } from "@/components/AppSidebar"
import { AppHeader } from "@/components/AppHeader"
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"

export const metadata = {
    title: {
        default: 'MythosForge',
        template: '%s - MythosForge'
    },
}

const AppLayout = ({ children }) => {
    return (
        <SidebarProvider>
        <AppSidebar />

        <SidebarInset>
            <AppHeader />

            <main className="flex flex-1 flex-col gap-4 p-4 min-h-screen">
                {children}
            </main>
        </SidebarInset>
        </SidebarProvider>
    )
}

export default AppLayout
