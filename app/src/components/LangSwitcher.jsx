"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function LangSwitcher() {
    const t = useTranslations();
    const [locale, setLocale] = useState('');
    const router = useRouter();

    useEffect(() => {
        const cookieLocale = document.cookie.split('; ').find((row) => row.startsWith('MYNEXTAPP_LOCALE='))?.split('=')[1];
        if (cookieLocale) {
            setLocale(cookieLocale);
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
            window.location.reload();
        }
    }, [router]);

    async function switchLocale(locale) {
        setLocale(locale);
        document.cookie = `MYNEXTAPP_LOCALE=${locale};`;
        window.location.reload();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center rounded-full select-none">
                    {locale == 'en' ? '🇬🇧' : '🇮🇹'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>{t('layout.select_language')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => switchLocale("en")}>
                        <div className="flex items-center gap-2">
                            🇬🇧
                            <span>English</span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => switchLocale("it")}>
                        <div className="flex items-center gap-2">
                            🇮🇹
                            <span>Italian</span>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
