import { useForm } from 'react-hook-form';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LabeledInput } from "@/components/ui/input"
import { yupResolver } from '@hookform/resolvers/yup';
import resetPasswordFormSchema from '@/validations/resetPasswordFormSchema';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/hooks/auth';

export function ResetPasswordForm({
    className,
    ...props
}) {
    const t = useTranslations();
    const { resetPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
        t: t
    });
    const { register, formState: { errors }, getValues, setValue, handleSubmit, watch, setError } = useForm({
        defaultValues: {
            email: '',
            password: '',
            password_confirmation: '',
        },
        resolver: yupResolver(resetPasswordFormSchema(t))
    });

    const onSubmit = async (e) => {
        resetPassword(e);
    };

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">{t('pages.reset_password')}</h1>
            </div>
            <div className="grid gap-6">
                <LabeledInput label={t('pages.email')} id="email" type="email" errors={errors} {...register("email")} required />

                <LabeledInput label={t('pages.password')} id="password" type="password" errors={errors} {...register("password")} required />

                <LabeledInput label={t('pages.confirm_password')} id="password_confirmation" type="password" errors={errors} {...register("password_confirmation")} required />

                <Button type="submit" className="w-full">
                    {t('pages.reset_password')}
                </Button>
            </div>
        </form>
    )
}
