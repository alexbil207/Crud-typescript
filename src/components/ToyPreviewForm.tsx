import styled from "styled-components";
import { ToysProps } from "../interfaces/interface";
import { LabelField } from './LabelField'

const FormWrapper = styled.form`
    display: flex;
    overflow-y: auto;
    width: 100%;
    flex-direction: column;
    padding:  0 50px;
    font-size: 1.1rem;
    & img{
        width: 150px;
    }
    &>*{
        margin-bottom: 10px;
    }
    
`

const DataWrapper = styled.div`
    & label{
        text-decoration: underline; 
    }
`
const ImgWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
`
interface ToyPreviewFormProps {
    toy: ToysProps
    isNew: boolean
}


export const ToyPreviewForm = ({ toy, isNew }: ToyPreviewFormProps) => {



    return (
        <FormWrapper>
            <ImgWrapper>
                <img src={toy.img} loading={'lazy'} alt="Toy" />
            </ImgWrapper>
            <DataWrapper>
                <LabelField name="name" label="Toy Name:" />
                <h6>{toy.name}</h6>
            </DataWrapper>
            <DataWrapper>
                <LabelField name="date" label="Description:" />
                <h6>{toy.description}</h6>
            </DataWrapper>
            <DataWrapper>
                <LabelField name="date" label="Create At:" />
                <h6>{toy.creationAt}</h6>
            </DataWrapper>
            <DataWrapper>
                <LabelField name="price" label="Price" />
                <h6>{`$${toy.price}`}</h6>
            </DataWrapper>

        </FormWrapper>
    )
} 