import { string, object } from 'yup';

export default function loginFormSchema(t) {
    return object().shape({
        email: string().required(t('validation.required', { field: t('pages.email') })).email(t('validation.email', { field: t('pages.email') })),
        password: string().required(t('validation.required', { field: t('pages.password') }))
    });
}
