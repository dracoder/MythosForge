import { Button } from '@/Components/ui/button';
import { Input, LabeledInput } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useTranslations } from 'next-intl';
import { X, Plus } from 'lucide-react';
import { useEffect } from 'react';

const defaultValues = {
    name: '',
    slug: '',
    features: [],
}

function Form({ register, errors, watch, control, setValue, editing = false }) {
    const t = useTranslations();

    function generateSlug() {
        const name = watch('name');
        if (!name) return;
        setValue('slug', name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/ /g, '-')
        );
    }

    useEffect(() => {
        generateSlug();
    }, [watch('name')]);

    return (
        <div className='flex flex-col gap-4'>
            <LabeledInput label={t('pages.name')} id="name" type="text" errors={errors} {...register("name")} required />

            <LabeledInput label={'Slug'} id="slug" type="text" errors={errors} {...register("slug")} required />


            <div className='flex gap-4'>
                <div className='w-full gap-4'>
                    <Label>
                        {t('pages.features')}
                        <Button className='ml-4' type='button' variant='outline' onClick={() => {
                            const features = watch('features');
                            features.push('');
                            setValue('features', features);
                        }}>
                            <Plus />
                        </Button>
                    </Label>
                    {watch('features') && watch('features').map((feature, index) => (
                        <div key={index} className='flex gap-2 my-2'>
                            <Input
                                className='w-full'
                                id={`features[${index}]`}
                                type="text"
                                errors={errors}
                                {...register(`features[${index}]`)}
                            />
                            <Button type='button' variant='outline' onClick={() => {
                                const features = watch('features');
                                features.splice(index, 1);
                                setValue('features', features);
                            }}>
                                <X />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { Form, defaultValues }
