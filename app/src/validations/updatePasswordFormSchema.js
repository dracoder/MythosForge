import { string, object, ref } from 'yup';

export default function updatePasswordFormSchema(t) {
    return object().shape({
        current_password: string()
            .required(t('validation.required', { field: t('pages.current_password') })),
        password: string()
            .required(t('validation.required', { field: t('pages.password') }))
            .min(8, t('validation.min', { field: t('pages.password'), min: 8 })),
        password_confirmation: string()
            .required(t('validation.required', { field: t('pages.password_confirmation') }))
            .min(8, t('validation.min', { field: t('pages.password'), min: 8 }))
            .oneOf([ref('password'), null], t('validation.password_mismatch'))
    });
}
