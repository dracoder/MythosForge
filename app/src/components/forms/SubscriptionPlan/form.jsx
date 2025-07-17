import { Button } from '@/Components/ui/button';
import { LabeledInput } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { LabeledFormSwitch } from '@/Components/ui/switch';
import { useTranslations } from 'next-intl';

const defaultValues = {
    name: '',
    is_active: true,
    frequency: 'monthly',
    price: '',
    description: '',
}

function Form({ register, errors, watch, control, setValue }) {
    const t = useTranslations();
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <LabeledInput divClassName='w-full' label={t('pages.name')} id='name' type="text" errors={errors} {...register("name")} required
                    helper={t('pages.plan_name_helper')}
                />

            </div>

            <div className='flex gap-2 w-full'>
                <LabeledFormSwitch className='w-full' label={t('pages.is_active') + '?'} id='is_active' control={control} errors={errors} {...register("is_active")} />
                <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor='frequency'>{t('pages.frequency')}</Label>
                    <div className='flex gap-4'>
                        <Button type='button' variant={watch('frequency') === 'monthly' ? 'default' : 'outline'} onClick={() => setValue('frequency', 'monthly')}>{t('pages.monthly')}</Button>
                        <Button type='button' variant={watch('frequency') === 'yearly' ? 'default' : 'outline'} onClick={() => setValue('frequency', 'yearly')}>{t('pages.yearly')}</Button>
                        <Button type='button' variant={watch('frequency') === 'one-time' ? 'default' : 'outline'} onClick={() => setValue('frequency', 'one-time')}>{t('pages.one-time')}</Button>
                    </div>
                </div>
            </div>


            <div className='flex gap-4'>
                <LabeledInput divClassName='w-full' label={t('pages.price')} id='price' type="text" errors={errors} {...register("price")} required />

                <LabeledInput divClassName='w-full' label={t('pages.description')} id='description' type="text" errors={errors} {...register("description")} />
            </div>
        </div >
    )
}

export { Form, defaultValues }
