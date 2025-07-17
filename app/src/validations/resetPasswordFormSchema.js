import { string, object, ref } from 'yup';

export default function loginFormSchema(t) {
    return object().shape({
        email: string().required(t('validation.required', { field: t('pages.email') })).email(t('validation.email')),
        password: string()
            .required(t('validation.required', { field: t('pages.password') }))
            .min(8, t('validation.min', { field: t('pages.password'), min: 8 })),
        password_confirmation: string()
            .required(t('validation.required', { field: t('pages.password_confirmation') }))
            .min(8, t('validation.min', { field: t('pages.password'), min: 8 }))
            .oneOf([ref('password'), null], t('validation.password_mismatch'))
    });
}
