import { LabeledInput } from '@/components/ui/input';
import { LabeledFormSelect } from '@/components/ui/select';
import { useTranslations } from 'next-intl';

const defaultValues = {
    name: '',
    email: '',
    password: '',
    role: '',
}

function Form({ register, errors, watch, control, editing = false }) {
    const t = useTranslations();
    return (
        <div className='flex flex-col gap-4'>
            <LabeledInput label={t('pages.name')} id="name" type="text" errors={errors} {...register("name")} required />
            <LabeledInput label={t('pages.email')} id="email" type="email" errors={errors} {...register("email")} required />

            <LabeledFormSelect label={t('pages.role')} id="role" control={control} errors={errors} options={[
                { value: 'super-admin', label: t('pages.super-admin') },
                { value: 'admin', label: t('pages.admin') },
                { value: 'user', label: t('pages.user') },
            ]} {...register("role")} watch={watch} required />

            {!editing && <LabeledInput label={t('pages.password')} id="password" type="password" errors={errors} {...register("password")} required />}
        </div>
    )
}

export { Form, defaultValues }
