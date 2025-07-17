'use client';
import * as React from "react"
import logoImage from '@/images/logo.png'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

import { Home, Users, Book, BookOpen, CreditCard } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from "@/hooks/auth"
import { useTranslations } from "next-intl"

const data = [
    {
        title: "dashboard",
        url: '/dashboard',
        icon: <Home />,
    },
    {
        title: "users",
        url: '/users',
        icon: <Users />,
        permission: 'users_index'
    },
    {
        title: "genres",
        url: '/genres',
        icon: <Book />,
        permission: 'genres_index'
    },
    {
        title: "stories",
        url: '/stories',
        icon: <BookOpen />,
        permission: 'stories_index'
    },
    {
        title: "subscription_plans",
        url: '/subscription_plans',
        icon: <CreditCard />,
        permission: 'subscription_plans_index'
    },
]

export function AppSidebar({
    ...props
}) {
    const t = useTranslations()
    const { user } = useAuth({
        middleware: 'auth',
        t: t
    })
    return (
        (<Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard">
                                <Image
                                    src={logoImage}
                                    alt="Logo"
                                    className="size-10"
                                />
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">MythosForge</span>
                                    <span className="">Admin</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.map((item) => (
                            (!item.permission || (user && user.permissions.includes(item.permission))) &&
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url} className="font-medium">
                                        {item.icon}
                                        {t('menu.' + item.title)}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>)
    );
}
