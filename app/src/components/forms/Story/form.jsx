import { LabeledInput } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { LabeledTextarea } from '@/components/ui/textarea';
import { LabeledAsyncSelect } from '@/components/ui/select';


const defaultValues = {
    description: '',
    prompt: '',
    genre_ids: [],
}

function Form({ register, errors, watch, control }) {

    const t = useTranslations();

    return (
        <div className='flex flex-col gap-4'>
            <LabeledInput label={t('pages.description')} id="description" type="text" errors={errors} {...register("description")} required />

            <LabeledTextarea label={t('pages.prompt')} id="prompt" errors={errors} {...register("prompt")} required rows={8} />

            <LabeledAsyncSelect
                label={t('pages.genres')}
                name='genre_ids'
                model='Genre'
                labelKey='name'
                orderBy='id'
                searchKeys={['name', 'slug']}
                placeholder='Genres...'
                preload
                control={control}
                errors={errors}
                isMulti
            />
        </div>
    )
}

export { Form, defaultValues }
