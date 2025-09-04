export class CompanyConstants {
    public static readonly Default = class {
        static readonly value = '';
    };

    public static readonly CompanyPhone = class {
        static readonly value = '+79939761660';
    };

    public static readonly CompanyPhoneNormalize = class {
        static readonly value = '+7 (993) 976-16-60';
    };

    public static readonly CompanyEmail = class {
        static readonly value = 'spb.stroyvektor@yandex.ru';
    };

    public static readonly CompanyAddress = class {
        static readonly value = 'Вербная улица, 1Б, Санкт-Петербург';
    };

    public static readonly CompanyTg = class {
        static readonly username = '@StroyVektor_spb';
        static readonly link = 'https://t.me/StroyVektor_spb';
    };

    public static readonly CompanyVk = class {
        static readonly name = 'Строительная компания СтройВектор';
        static readonly link = 'https://vk.com/stroyvektor78';
    };

    public static readonly CompanyYMaps = class {
        static readonly link = 'https://yandex.ru/maps/-/CLEVYEi9';
    };

    public static readonly CompanyConstantsMap = [
        { ...this.Default },
        { ...this.CompanyPhone },
        { ...this.CompanyPhoneNormalize },
        { ...this.CompanyEmail },
        { ...this.CompanyAddress },
        { ...this.CompanyTg },
        { ...this.CompanyVk },
    ] as const;
}
