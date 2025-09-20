import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@mui/material';
import { FormSelect } from '../../components/FormSelect/FormSelect';
import { WideForm } from '../../components/WideForm/WideForm';
import { appLoader } from '../../components/GlobalLoader/GlobalLoader';

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
            <Typography variant="h6" sx={{ fontFamily: 'iransans', mb: 2 }}>
                اطلاعات مصوبه
            </Typography>

            <WideForm onSubmit={onSubmit}>
                <FormSelect
                    name="fromPlace"
                    control={control}
                    label="از محل"
                    options={[
                        { value: 'D', label: 'عادی/موردی' },
                        { value: 'E', label: 'از محل حد/ سقف' },
                        { value: 'F', label: 'از محل گروهی/ تفاهم نامه‌ای' },
                        { value: 'G', label: 'از محل قرض الحسنه ویژه' },
                        { value: 'H', label: 'از محل تبصره ای' },
                        { value: 'A', label: 'از محل تکلیفی' },
                        { value: 'B', label: 'مصوبات خاص' },
                        { value: 'C', label: 'از محل وجوه اداره شده' },
                    ]}
                />
            </WideForm>
        </>
    );
}
