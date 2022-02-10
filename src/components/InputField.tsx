import { LabelField } from './LabelField';
import styled from 'styled-components';


const InputWrapper = styled.div<any>`
display: flex;
flex-direction: column;
align-items: center;
animation: fade-in 400ms forwards;
width: 100%;

@keyframes fade-in{
    from {opacity: 0;}
    to{opacity: 1;}
}
`


interface InputFieldProps {
    label?: string,
    type: string,
    name: string,
    handleChange?: (ev: React.ChangeEvent) => void,
    value: string,
    placeHolder?: string,
    elInput?: any,
}



export const InputField: React.FC<InputFieldProps> = ({ label, type, name, handleChange, value, placeHolder = '', elInput }) => {

    return (
        <InputWrapper>
            <LabelField label={label} name={name} />
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeHolder}
                onChange={(ev) => handleChange ? handleChange(ev) : {}}
                ref={elInput}
                required />
        </InputWrapper>
    )
}