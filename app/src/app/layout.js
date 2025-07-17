import '@/app/app.scss'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';

import { ThemeProvider } from '@/components/ThemeProvider'
import Toaster from '@/components/Toaster';

async function RootLayout({ children }) {
    const messages = await getMessages();
    const locale = await getLocale();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className="antialiased">
                <NextIntlClientProvider messages={messages}>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSys
                            disableTransitionOnChange
                        >
                            <Toaster />
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'MythosForge',
    description: '',
}

export default RootLayout
