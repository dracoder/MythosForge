'use client';

import { Separator } from "@/components/ui/separator";

import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button"
import { LabeledInput } from "@/components/ui/input"
import { yupResolver } from '@hookform/resolvers/yup';
import profileFormSchema from '@/validations/profileFormSchema';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/hooks/auth';
import { useEffect } from "react";
import AuthService from "@/services/AuthService";
import { toast } from "react-hot-toast";

export default function ProfileForm() {
    const t = useTranslations();
    const { user } = useAuth({
        middleware: 'auth',
        t: t
    });

    const { register, formState: { errors }, getValues, setValue, handleSubmit, watch, setError, reset } = useForm({
        defaultValues: {
            name: '',
            email: ''
        },
        resolver: yupResolver(profileFormSchema(t))
    });

    useEffect(() => {
        reset(user);
    }, [user]);

    const onSubmit = async (data) => {
        await AuthService.updateProfile({
            data,
            onSuccess: () => {
                toast.success(t('pages.updated', { name: t('pages.profile') }));
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
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    Here is where you can update your profile information.
                </p>
            </div>

            <Separator />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <LabeledInput label={t('pages.name')} id="name" type="text" errors={errors} {...register("name")} required />

                <LabeledInput label={t('pages.email')} id="email" type="email" errors={errors} {...register("email")} required />

                <div className="mt-6 flex justify-end">
                    <Button type="submit">{t('pages.save')}</Button>
                </div>
            </form>
        </div>
    );
}
