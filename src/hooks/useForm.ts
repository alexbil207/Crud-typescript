import { useState } from 'react'



export const useForm = (initialState: any) => {
    const [fields, setFields] = useState<any>(initialState)
    let value: any = null;

    return [
        fields,
        function (ev: any) {
            const field = ev.target.name;
            switch (ev.target.type) {
                case 'number':
                    value = +ev.target.value;
                    break;
                case 'checkbox':
                    value = ev.target.checked;
                    break;
                default:
                    value = ev.target.value;
            }
            setFields((prevFields: any) => ({ ...prevFields, [field]: value }));
        },
        setFields
    ]
}