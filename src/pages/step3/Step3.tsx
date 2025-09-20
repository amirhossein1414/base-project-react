import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@mui/material';
import { FormSelect } from '../../components/FormSelect/FormSelect';
import { WideForm } from '../../components/WideForm/WideForm';
import { fromPlaceOptions } from './Step3.data';

const schema = z.object({
    fromPlace: z.string().nonempty('تعیین محل الزامی است'),
    mosavabe: z.string().nonempty('تعیین مصوبه الزامی است'),
});

type FormValues = z.infer<typeof schema>;

export default function Step3() {
    const { handleSubmit, control, reset, watch } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { fromPlace: '' },
        mode: 'onTouched',
    });

    const onSubmit = handleSubmit((data) => {
        console.log('Form Data:', data);
        reset();
    });

    return (
        <>
            <Typography variant="h6" sx={{ fontFamily: 'iransans', mb: 1 }}>
                اطلاعات مصوبه
            </Typography>
            <WideForm onSubmit={onSubmit}>
                <FormSelect
                    name="fromPlace"
                    control={control}
                    label="از محل *"
                    options={fromPlaceOptions}
                />
                <FormSelect
                    name="mosavabe"
                    control={control}
                    label="مصوبه *"
                    options={fromPlaceOptions}
                />
            </WideForm>
        </>
    );
}
