import { string, object, array } from 'yup';

export default function genreFormSchema(t) {
    return object().shape({
        name: string().required(t('validation.required', { field: t('pages.name') })),
        slug: string().required(t('validation.required', { field: 'Slug' })),
        features: array().nullable().optional(),
    });
};
