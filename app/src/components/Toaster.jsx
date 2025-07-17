'use client';

import { Toaster as ReactToaster } from 'react-hot-toast';
import { useTheme } from 'next-themes';

export default function ToastUpdater() {
    const { resolvedTheme } = useTheme(); // Use `resolvedTheme` for clarity

    const toastOptions = {
        className: 'text-sm',
        style: {
            background: resolvedTheme === 'dark' ? '#09090b' : '#fff',
            color: resolvedTheme === 'dark' ? '#fff' : '#09090b',
        },
    };

    return <ReactToaster position="top-right" toastOptions={toastOptions} />;
}
