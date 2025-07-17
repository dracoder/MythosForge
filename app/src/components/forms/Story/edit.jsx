import StoryService from '@/services/StoryService';
import { Form, defaultValues } from './form';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import storyFormSchema from '@/validations/storyFormSchema';
import { useTranslations } from 'next-intl';
import LoadingButton from '@/components/LoadingButton';

export default function EditForm({ onSubmit, open, onOpenChange, editingId }) {
    const t = useTranslations();
    const { register, formState: { errors }, handleSubmit, watch, reset, control, setError, setValue } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(storyFormSchema(t, true))
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!editingId) return;
        StoryService.show(editingId, (data) => {
            reset(data.data);
        });
    }, [editingId]);

    const handleUpdateAction = async (data) => {
        await StoryService.update(editingId, data)
            .then((res) => {
                toast.success(t('pages.updated', { name: t('pages.story') }));
                setLoading(false);
                reset();
                onOpenChange(false);
                onSubmit();
            })
            .catch(err => {
                if (err.response.status === 422) {
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
                    <DialogTitle>{t('pages.edit', { name: t('pages.story') })} #{editingId}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(handleUpdateAction)}>
                    <Form register={register} errors={errors} watch={watch} control={control} setValue={setValue} editing />

                    <div className="mt-6 flex justify-end">
                        <LoadingButton type="submit" loading={loading} t={t}>{t('pages.save')}</LoadingButton>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
