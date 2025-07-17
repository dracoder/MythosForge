import { string, object } from 'yup';

export default function userFormSchema(t, editing = false) {
    return object().shape({
        name: string().required(t('validation.required', { field: t('pages.name') })),
        email: string().required(t('validation.required', { field: t('pages.email') })),
        password: editing ? string().nullable().optional() : string().required(t('validation.required', { field: t('pages.password') })),
    });
}
