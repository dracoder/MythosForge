const columnMap = (t) => {
    return {
        'name': {
            label: t('pages.name'),
        },
        'email': {
            label: t('pages.email_address'),
            type: 'string',
        },
        'role': {
            label: t('pages.role'),
            type: 'string',
            align: 'center',
            value: (row) => t('roles.'+row.role),
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
    'email'
];

export { columnMap, searchKeys }
