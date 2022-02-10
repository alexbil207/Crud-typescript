import { useSelector, RootStateOrAny } from "react-redux";
import { utilService } from "../sevices/utils.service";
import styled from "styled-components";
import { useEffect } from "react";
import { Loader } from "./Loader";
import { ToysProps } from "../interfaces/interface";
import { ToyPreview } from "./ToyPreview";

const ToyListWrapper = styled.div`
    flex: 1;
`

export const ToyList = () => {
    const { toysList } = useSelector((state: RootStateOrAny) => state.toys)
    useEffect(() => {
        if (!toysList.length) utilService.createToys();
    }, [toysList])


    if (!toysList) return <Loader />
    return (
        <ToyListWrapper>
            {toysList?.map((toy: ToysProps) => <ToyPreview key={utilService.makeId()} toy={toy} />)}
        </ToyListWrapper>
    )
}