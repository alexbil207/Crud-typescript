import { RootStateOrAny, useSelector } from "react-redux"
import styled from "styled-components"
import { ToyPreviewForm } from "./ToyPreviewForm"




const ToyDetailsWrapper = styled.div`
    height:100%;
    border: 1px solid #000;
    `
const EmptyText = styled.p`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ToyDetails = () => {
    const { toy } = useSelector((state: RootStateOrAny) => state.toys)
    return (
        <ToyDetailsWrapper>
            {Object.values(toy).length ?
                <ToyPreviewForm toy={toy} isNew={false} />
                :
                <EmptyText>Select Toy</EmptyText>
            }

        </ToyDetailsWrapper>
    )
}