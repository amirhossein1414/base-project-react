import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@mui/material';
import { FormSelect } from '../../components/FormSelect/FormSelect';
import { WideForm } from '../../components/WideForm/WideForm';
import { fromPlaceOptions } from './Step3.data';

const schema = z.object({
    fromPlace: z.string().nonempty('تعیین محل الزامی است'),
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

            <WideForm onSubmit={onSubmit}>
                <Typography variant="h6" sx={{ fontFamily: 'iransans' }}>
                    اطلاعات مصوبه
                </Typography>
                <FormSelect
                    name="fromPlace"
                    control={control}
                    label="از محل *"
                    options={fromPlaceOptions}
                />
            </WideForm>
        </>
    );
}
