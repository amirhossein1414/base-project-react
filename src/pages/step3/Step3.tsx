
import { Select } from '../../Components/Select/Select';
import { WideForm } from '../../Components/WideForm/WideForm';
import { fromPlaceOptions, mainEcoPart } from './Step3.data';
import { type Step3Model } from './Step3.state';

export default function Step3() {
    return (
        <>
            <WideForm<Step3Model> onSubmit={onSubmit} title='اطلاعات مصوبه'>
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
