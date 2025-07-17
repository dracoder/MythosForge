import { useForm } from 'react-hook-form';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LabeledInput } from "@/components/ui/input"
import { yupResolver } from '@hookform/resolvers/yup';
import forgotPasswordFormSchema from '@/validations/forgotPasswordFormSchema';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import LoadingButton from '@/components/LoadingButton';
import Link from 'next/link';

export function ForgotPasswordForm({
    className,
    ...props
}) {
    const t = useTranslations();
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
        t: t
    });

    const [loading, setLoading] = useState(false);

    const { register, formState: { errors }, getValues, setValue, handleSubmit, watch, setError, reset } = useForm({
        defaultValues: {
            email: '',
        },
        resolver: yupResolver(forgotPasswordFormSchema(t))
    });

    const onSubmit = async (e) => {
        setLoading(true);
        forgotPassword(e, setLoading)
    };

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">{t('pages.forgot_password')}?</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    {t('pages.forgot_password_text_1')}<br />
                    {t('pages.forgot_password_text_2')}
                    {t('pages.forgot_password_text_3')}.
                </p>
            </div>
            <div className="grid gap-6">
                <LabeledInput label={t('pages.email')} id="email" type="email" errors={errors} {...register("email")} required />

                <LoadingButton type="submit" loading={loading} className="w-full" t={t}>
                    {t('pages.send_reset_link')}
                </LoadingButton>
            </div>
            <div className="text-center text-sm">
                {t('pages.already_have_account')}?{' '}
                <Link href="/login" className="underline underline-offset-4">
                    {t('pages.login')}
                </Link>
            </div>
        </form>
    )
}
