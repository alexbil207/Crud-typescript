export interface ToysProps {
    id: string,
    img: string;
    name: string,
    description: string,
    price: number,
    creationAt: string,
}

export interface ToyPreviewProps {
    toy: ToysProps
}
