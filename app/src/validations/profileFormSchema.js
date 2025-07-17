import { string, object, ref, boolean } from 'yup';

export default function registerFormSchema(t) {
    return object().shape({
        name: string().required(t('validation.required', { field: t('pages.name') })),
        email: string().required(t('validation.required', { field: t('pages.email') })).email(t('validation.email')),
    });
};
