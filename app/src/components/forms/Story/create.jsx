import StoryService from '@/services/StoryService';
import { Form, defaultValues } from './form';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import storyFormSchema from '@/validations/storyFormSchema';
import { useTranslations } from 'next-intl';
import LoadingButton from '@/components/LoadingButton';

export default function CreateForm({ onSubmit, open, onOpenChange }) {
    const t = useTranslations();
    const { register, formState: { errors }, handleSubmit, watch, reset, control, setError, setValue } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(storyFormSchema(t))
    });

    const [loading, setLoading] = useState(false);

    const handleStoreAction = async (data) => {
        setLoading(true);
        await StoryService.store(data)
            .then((res) => {
                toast.success(t('pages.created', { name: t('pages.story') }));
                setLoading(false);
                reset();
                onOpenChange(false);
                onSubmit();
            })
            .catch(err => {
                if (err.response && err.response.status === 422) {
                    Object.keys(err.response.data.errors).forEach((key) => {
                        setError(key, { type: 'manual', message: err.response.data.errors[key] });
                    })
                } else {
                    toast.error(t('validation.try_again'));
                }
                setLoading(false);
            });
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t('pages.create', { name: t('pages.story') })}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(handleStoreAction)}>
                    <Form register={register} errors={errors} watch={watch} control={control} setValue={setValue} />

                    <div className="mt-6 flex justify-end">
                        <LoadingButton type="submit" loading={loading} t={t}>{t('pages.save')}</LoadingButton>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
