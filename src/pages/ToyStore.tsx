import styled from "styled-components";
import { ToyDetails } from "../components/ToyDetails";
import { ToyList } from "../components/ToyList";

const StoreWrapper = styled.section`
    height: calc(100vh - 77px);
    width:100%;
    display: flex;
    gap: 10px;
`

export const ToyStore = () => {


    return (
        <StoreWrapper>
            <ToyList />
            <ToyDetails />
        </StoreWrapper>
    )
}