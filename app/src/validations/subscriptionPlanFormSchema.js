import { string, object, number, boolean, array } from 'yup';

function subscriptionPlanFormSchema(t, editing = false) {
    return object().shape({
        is_active: boolean().required(t('validation.required', { field: t('pages.is_active') })),
        frequency: string().required(t('validation.required', { field: t('pages.frequency') })),
        name: string().required(t('validation.required', { field: t('pages.name') })),
        description: string().nullable().optional(),
        features: array().nullable().optional(),
        price: number().nullable().optional(),
        is_popular: boolean().nullable().optional(),
    });
};

export default subscriptionPlanFormSchema;
