import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ToyPreviewProps } from "../interfaces/interface";
import { storageService } from "../sevices/srorage.service";
import { showToy, removeToy } from '../store/toysReducer';
const ToyWrapper = styled.figure`
display: flex;
align-items: center;
width: 100%;
margin-bottom: 10px;
cursor: pointer;

box-shadow: 0 0 1px 1px #1b1b1b;
    & img{
        width: 90px;
        padding:10px;
    }

`
const DetailsWrapper = styled.figcaption`
    & h4{
        margin-bottom: 10px;
    }
`
const RemoveBtn = styled.button`
    background-color: red;
    outline: none;
    border: none;
    padding: 5px;
    margin: 0 10px;
    color: #fff;
    cursor: pointer;
    &:active{
        position: relative;
        top: 2px;
    }
`




export const ToyPreview = ({ toy }: ToyPreviewProps) => {
    const dispatch = useDispatch();


    const removeToyFromList = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();
        dispatch(removeToy(toy.id))
        storageService.removeToyFromStorage(toy.id);

    }
    return (
        <ToyWrapper onClick={() => { dispatch(showToy(toy)) }}>
            <img src={toy.img} alt="" />
            <DetailsWrapper>
                <h4>{`${toy.name.substring(0, 20)}...`}</h4>
                <h5>{`${toy.description.substring(1, 100)}...`}</h5>
            </DetailsWrapper>
            <RemoveBtn onClick={(ev) => removeToyFromList(ev)}>
                Remove
            </RemoveBtn>
        </ToyWrapper>
    )
}