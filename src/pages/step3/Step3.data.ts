import type { SelectOptionModel } from "../../components/Select/Select";

export const fromPlaceOptions: SelectOptionModel[] = [
    { value: 'D', label: 'عادی/موردی' },
    { value: 'E', label: 'از محل حد/ سقف' },
    { value: 'F', label: 'از محل گروهی/ تفاهم نامه‌ای' },
    { value: 'G', label: 'از محل قرض الحسنه ویژه' },
    { value: 'H', label: 'از محل تبصره ای' },
    { value: 'A', label: 'از محل تکلیفی' },
    { value: 'B', label: 'مصوبات خاص' },
    { value: 'C', label: 'از محل وجوه اداره شده' },
];

export const mainEcoPart: SelectOptionModel[] = [{ value: 'a', label: 'افراد حقیقی' },
{ value: 'b', label: 'کشاورزی' },
{ value: 'c', label: 'صنعتی/پیمانکاری/ساختمان' }];