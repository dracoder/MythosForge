'use client';

import { useEffect, useState } from 'react';
import { DataTable } from '@/components/DataTable';
import { columnMap, searchKeys } from './_columns';
import GenreService from '@/services/GenreService';
import { toast } from 'react-hot-toast';
import EditForm from '@/components/forms/Genre/edit';
import CreateForm from '@/components/forms/Genre/create';
import { BookPlus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import AuthenticatedLayout from '@/components/AuthenticatedLayout';

export default function Page({ }) {
    const t = useTranslations();
    const [searchOptions, setSearchOptions] = useState({
        searchField: '',
        searchValue: '',
    });
    const [creating, setCreating] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleEditAction = (id) => {
        setEditing(true);
        setEditingId(id);
    }

    useEffect(() => {
        if (editing == false) {
            setEditingId(null);
        }
    }, [editing]);

    const handleDeleteAction = (id) => {
        GenreService.destroy(id, () => {
            toast.success(t('pages.deleted', { name: t('pages.genre') }));
            setRefreshKey(refreshKey + 1)
        })
    }

    return (
        <>
            <AuthenticatedLayout
                headerActions={[
                    {
                        icon: <BookPlus />,
                        title: t('components.create_button', { entity: t('pages.genre') }),
                        function: () => setCreating(true)
                    }
                ]}
                title={t('menu.genres')}
            />
            <DataTable
                key={refreshKey}
                searchRoute={'genres'}
                searchOptions={searchOptions}
                columnMap={columnMap(t)}
                searchKeys={searchKeys}
                initialOrderBy="id"
                hideShow
                onEdit={handleEditAction}
                onDelete={handleDeleteAction}
            />

            <CreateForm onSubmit={() => setRefreshKey(refreshKey + 1)} open={creating} onOpenChange={setCreating} />
            <EditForm onSubmit={() => setRefreshKey(refreshKey + 1)} open={editing} onOpenChange={setEditing} editingId={editingId} />
        </>
    )
}
