import { string, object, array } from 'yup';

export default function storyFormSchema(t, editing = false) {
    return object().shape({
        description: string().required(t('validation.required', { field: t('pages.description') })),
        prompt: string().required(t('validation.required', { field: t('pages.prompt') })),
        genre_ids: array().required(t('validation.required', { field: t('pages.genres') })),
    });
};
