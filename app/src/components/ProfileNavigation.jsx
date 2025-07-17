'use client';

import { useState } from "react";

import SidebarNav from "./SidebarNav";

import ProfileForm from "@/components/forms/Profile/Profile";
import PasswordForm from "./forms/Profile/Password";

// https://github.com/shadcn-ui/ui/blob/main/apps/www/app/(app)/examples/forms/page.tsx
const navItems = {
    profile: {
        title: "Profile",
        component: <ProfileForm />
    },
    appearance: {
        title: "Password",
        component: <PasswordForm />
    },
    account: {
        title: "Account",
        component: <>Nothing to show...</>
    },
    notifications: {
        title: "Notifications",
        component: <>Nothing to show...</>
    },
    display: {
        title: "Display",
        component: <>Nothing to show...</>
    },
}

export default function ProfileNavigation() {

    const [currentItem, setCurrentItem] = useState("profile");

    return (
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
                <SidebarNav.Nav>
                    {Object.keys(navItems).map(key => (
                        <SidebarNav.Item
                            index={key} key={key}
                            item={navItems[key]}
                            onClick={() => setCurrentItem(key)}
                            current={key === currentItem}
                        />
                    ))}
                </SidebarNav.Nav>
            </aside>
            <div className="flex-1 lg:max-w-2xl">
                <div className="space-y-6">
                    {navItems[currentItem].component}
                </div>
            </div>
        </div>
    );
}
