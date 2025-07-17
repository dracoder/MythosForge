const columnMap = (t) => {
    return {
        'is_active': {
            label: t('pages.is_active'),
            align: 'center',
            type: 'boolean',
        },
        'name': {
            label: t('pages.name'),

        },
        'frequency': {
            label: t('pages.frequency'),
            value: (row) => t('pages.'+row.frequency),
        },
        'price': {
            label: t('pages.price'),
            value: (row) => row.price + ' €',
        },
        'description': {
            label: t('pages.description'),
        }
    }
};

const searchKeys = [
    'name',
    'description'
];

export { columnMap, searchKeys }
