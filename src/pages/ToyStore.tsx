import styled from "styled-components";
import { ToyDetails } from "../components/ToyDetails";
import { ToyList } from "../components/ToyList";

const StoreWrapper = styled.section`
    height: calc(100vh - 100px);
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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