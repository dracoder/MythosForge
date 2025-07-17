'use client'

import { ResetPasswordForm } from '@/components/forms/Auth/reset-password';

export default function PasswordReset({ token }) {
    return (
        <ResetPasswordForm token={token} />
    )
}
