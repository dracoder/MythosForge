import { string, object, ref, boolean } from 'yup';

export default function registerFormSchema(t) {
    return object().shape({
        name: string().required(t('validation.required', { field: t('pages.name') })),
        email: string().required(t('validation.required', { field: t('pages.email') }))
        .email(t('validation.email')),
        password: string()
        .required(t('validation.required', { field: t('pages.password') }))
        .min(8, t('validation.min', { field: t('pages.password'), min: 8 })),
        password_confirmation: string()
        .required(t('validation.required', { field: t('pages.password_confirmation') }))
        .min(8, t('validation.min', { field: t('pages.password'), min: 8 }))
        .oneOf([ref('password'), null], t('validation.password_mismatch')),
        privacy_policy: boolean().required(t('validation.required', { field: t('pages.privacy_policy') }))
        .oneOf([true], t('validation.accepted', { field: t('pages.privacy_policy') }))
    });
};
