import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select } from '../../Components/Select/Select';
import { WideForm } from '../../Components/WideForm/WideForm';
import { fromPlaceOptions, mainEcoPart } from './Step3.data';
import { step3Schema, type Step3Model } from './Step3.state';
import { step3Store } from './Step3.state';
import { useEffect } from 'react';

export default function Step3() {
    const { handleSubmit, control, reset, watch } = useForm<Step3Model>({
        resolver: zodResolver(step3Schema),
        defaultValues: { fromPlace: '', mosavabe: '', mainEcoPart: '' },
        mode: 'onTouched',
    });

    const onSubmit = handleSubmit((data) => {
        console.log('Form Data:', data);
        reset();
    });

    const watchAllFields = watch(); // همه فیلدها را زیر نظر می‌گیریم
    const { setField } = step3Store();

    useEffect(() => {
        Object.entries(watchAllFields).forEach(([key, value]) => {
            setField(key as keyof typeof watchAllFields, value);
        });
    }, [watchAllFields, setField]);

    return (
        <>
            <WideForm onSubmit={onSubmit} title='اطلاعات مصوبه'>
                <Select
                    name="fromPlace"
                    control={control}
                    label="از محل *"
                    options={fromPlaceOptions}
                />
                <Select
                    name="mosavabe"
                    control={control}
                    label="مصوبه *"
                    options={fromPlaceOptions}
                />
            </WideForm>
            <br />
            <WideForm onSubmit={onSubmit} title='اطلاعات اقتصادی'>
                <Select
                    name="mainEcoPart"
                    control={control}
                    label="بخش اقتصادی اصلی *"
                    options={mainEcoPart}
                />
                <Select
                    name="mosavabe"
                    control={control}
                    label="بخش اقتصادی آیسیک *"
                    options={fromPlaceOptions}
                />
                {/*<FormSelect
                    name="mosavabe"
                    control={control}
                    label="زیر بخش اقتصادی آیسیک *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="منبع تامین مالی *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="نوع عقد *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="نوع محصول *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="هدف تسهیلات *"
                    options={fromPlaceOptions}
                /> */}
            </WideForm>
            {/* <WideForm onSubmit={onSubmit} title='اطلاعات درخواست'>
                <FormSelect
                    name="fromPlace"
                    control={control}
                    label="بخش اقتصادی اصلی *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="بخش اقتصادی آیسیک *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="زیر بخش اقتصادی آیسیک *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="منبع تامین مالی *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="نوع عقد *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="نوع محصول *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="هدف تسهیلات *"
                    options={fromPlaceOptions}
                />
            </WideForm> */}
        </>
    );
}
