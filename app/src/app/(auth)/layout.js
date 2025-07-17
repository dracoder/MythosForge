import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/images/logo.png'
import { ThemeToggle } from "@/components/ThemeToggle"
import LangSwitcher from '@/components/LangSwitcher'
import Carousel from '@/components/Carousel'

export const metadata = {
    title: {
        default: 'MythosForge',
        template: '%s - MythosForge'
    },
}

const genres = [
    'adventure',
    'cyberpunk',
    'historical',
    'horror',
    'post-apocalyptic',
    'romance',
    'sci-fi',
    'western'
];

const images = genres.map(genre => require(`@/images/genres/${genre}.webp`).default);

const Layout = ({ children }) => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-col items-center md:flex-row justify-center gap-x-2 gap-y-4 md:justify-between">
                    <Link href="/login" className="flex items-center gap-2 font-medium select-none">
                        <Image
                            src={logoImage}
                            alt="Logo"
                            className="size-10 select-none"
                        />
                        MythosForge
                    </Link>
                    <div className="flex items-center gap-4">
                        <LangSwitcher />

                        <ThemeToggle />
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        {children}
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <Carousel images={images} className={'select-none absolute inset-0 h-full w-full object-cover dark:brightness-[0.6]'} />
            </div>
        </div>
    )
}

export default Layout
