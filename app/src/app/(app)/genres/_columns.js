const columnMap = (t) => {
    return {
        'name': {
            label: t('pages.name'),
        },
        'slug': {
            label: 'Slug',
            type: 'string',
        },
        'created_at': {
            label: t('pages.created_at'),
            type: 'date',
            align: 'center',
        },
    }
};
const searchKeys = [
    'name',
    'slug',
    'features'
];

export { columnMap, searchKeys }
