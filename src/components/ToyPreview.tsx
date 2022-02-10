import styled from "styled-components";
import { ToysProps } from "../interfaces/interface";

const ToyWrapper = styled.figure`
display: flex;
width: 100%;
box-shadow: 0 0 1px 1px #1b1b1b;
    & img{
        width: 100px;
    }

`
const DetailsWrapper = styled.figcaption`
    
`


interface ToyPreviewProps {
    toy: ToysProps
}


export const ToyPreview = ({ toy }: ToyPreviewProps) => {

    return <ToyWrapper>
        <img src={`https://robohash.org/${toy.name}`} alt="" />
        <DetailsWrapper>

        </DetailsWrapper>
        <button>
            Remove
        </button>
    </ToyWrapper>
}