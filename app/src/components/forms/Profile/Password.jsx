'use client';

import { Separator } from "@/components/ui/separator";

import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button"
import { LabeledInput } from "@/components/ui/input"
import { yupResolver } from '@hookform/resolvers/yup';
import updatePasswordFormSchema from '@/validations/updatePasswordFormSchema';
import { useTranslations } from 'next-intl';
import { useEffect } from "react";
import AuthService from "@/services/AuthService";
import { toast } from "react-hot-toast";

export default function PasswordForm() {
    const t = useTranslations();

    const { register, formState: { errors }, getValues, setValue, handleSubmit, watch, setError, reset } = useForm({
        defaultValues: {
            current_password: '',
            password: '',
            password_confirmation: ''
        },
        resolver: yupResolver(updatePasswordFormSchema(t))
    });

    const onSubmit = async (data) => {
        await AuthService.updatePassword({
            data,
            onSuccess: () => {
                toast.success(t('pages.updated', { name: t('pages.password') }));
                reset();
            },
            onError: (err) => {
                if (err.response.status === 422) {
                    Object.keys(err.response.data.errors).forEach((key) => {
                        setError(key, { type: 'manual', message: err.response.data.errors[key] });
                    })
                } else {
                    toast.error(t('validation.try_again'))
                }
            }
        })
    };

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Password</h3>
                <p className="text-sm text-muted-foreground">
                    Here is where you can update your password.
                </p>
            </div>

            <Separator />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <LabeledInput label={t('pages.current_password')} id="current_password" type="password" errors={errors} {...register("current_password")} required />

                <LabeledInput label={t('pages.new_password')} id="password" type="password" errors={errors} {...register("password")} required />

                <LabeledInput label={t('pages.confirm_password')} id="password_confirmation" type="password" errors={errors} {...register("password_confirmation")} required />

                <div className="mt-6 flex justify-end">
                    <Button type="submit">{t('pages.save')}</Button>
                </div>
            </form>
        </div>
    );
}
