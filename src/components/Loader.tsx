import styled from 'styled-components';
import LoaderSvg from '../assets/img/Loading.gif'


const StyledLoader = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #fafafa;
filter: blur(45%);

`

export const Loader = () => {

    return (
        <StyledLoader>
            <img src={LoaderSvg} loading="lazy" alt="Loader" />
        </StyledLoader>
    );
}