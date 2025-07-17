const columnMap = (t) => {
    return {
        'description': {
            label: t('pages.description'),
        },
        'genres': {
            label: t('pages.genres'),
            type: 'multi-badge',
        },
        'created_at': {
            label: t('pages.created_at'),
            type: 'date',
            align: 'center',
        },
    }
};
const searchKeys = [
    'description',
    'genres.name',
];

export { columnMap, searchKeys }
