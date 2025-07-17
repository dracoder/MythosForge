"use client"

import { Link as NextLink } from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Nav({ children }) {
    return (
        <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {children}
        </nav>
    )
}

function Item({ item, index, onClick = () => { }, current = false, ...props }) {
    return (
        <div
            onClick={() => onClick(index)}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                current
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-transparent hover:underline",
                "justify-start cursor-pointer"
            )}
            {...props}
        >
            {item.title}
        </div>
    )
}

function Link(item) {
    const pathname = usePathname()

    return (
        <NextLink
            key={item.href}
            href={item.href}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.href
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-transparent hover:underline",
                "justify-start"
            )}
        >
            {item.title}
        </NextLink>
    )
}

export default { Nav, Item, Link }
