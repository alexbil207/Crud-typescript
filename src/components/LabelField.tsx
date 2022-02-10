


interface LabelFieldProps {
    label?: string,
    name: string,
}


export const LabelField: React.FC<LabelFieldProps> = ({ label, name }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
        </>
    )
}