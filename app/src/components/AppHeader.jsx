'use client';
import * as React from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle"
import LangSwitcher from "./LangSwitcher"
import { useAuth } from "@/hooks/auth"
import { useTranslations } from "next-intl"

export function AppHeader({ ...props }) {
    const t = useTranslations()
    const { user, logout } = useAuth({
        middleware: 'auth',
        t: t
    })
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b" {...props}>
            <div className="flex items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className="flex items-center gap-6 px-3">
                <LangSwitcher />

                <ThemeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarFallback className={'uppercase cursor-pointer'}>{user && user.name && user.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuLabel className="font-semibold">{user && user.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <Link href={'/profile'}>
                                <DropdownMenuItem className="cursor-pointer">
                                    {t('layout.profile')}
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                                {t('layout.logout')}
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
