import { string, object } from 'yup';

export default function forgotPasswordFormSchema(t) {
    return object().shape({
        email: string().required(t('validation.required', { field: t('pages.email') })).email(t('validation.email', { field: t('pages.email') })),
    });
}
