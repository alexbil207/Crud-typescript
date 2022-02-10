import { useSelector, RootStateOrAny } from "react-redux";
import { utilService } from "../sevices/utils.service";
import styled from "styled-components";
import { ToysProps } from "../interfaces/interface";
import { ToyPreview } from "./ToyPreview";
import { useEffect, useState } from "react";

const ToyListWrapper = styled.div`

`
const ButtonsWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
& p{
    padding: 5px;
    width: 30px;
    text-align: center;
}    
`
const Button = styled.button`
    width: 50px;
    padding: 5px;
    outline: none;
    border:none;
    background-color: #2EB086;
    color: #fff;
    border-radius: 5px;
`


export const ToyList = () => {
    const { toysList } = useSelector((state: RootStateOrAny) => state.toys);
    const [page, setPage] = useState<number>(0);
    const [numOfPages, setNumOfPages] = useState<number>(Math.ceil(toysList.length / 6))

    useEffect(() => setNumOfPages(Math.ceil(toysList.length / 6)), [toysList.length])
    useEffect(() => {
        if (page === numOfPages) setPage(0);
    }, [page, numOfPages])


    const pagingList = () => {
        const toys = toysList.slice();
        var startIdx = page * 5;
        return toys.slice(startIdx, startIdx + 6);
    }

    const nextPage = () => {
        setPage(prev => prev + 1)
    }
    const prevPage = () => {
        setPage(prev => prev - 1)
    }

    return (
        <>
            <ToyListWrapper>
                {pagingList()?.map((toy: ToysProps) => <ToyPreview key={utilService.makeId()} toy={toy} />)}


                <ButtonsWrapper>
                    {page > 0 && <Button onClick={prevPage}>Prev</Button>}
                    <p>{page + 1}</p>
                    <Button onClick={nextPage} >Next</Button>
                </ButtonsWrapper>
            </ToyListWrapper>
        </>
    )
}