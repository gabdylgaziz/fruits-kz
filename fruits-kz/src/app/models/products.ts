export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;

}

function formatProductDescription(product: Product): string {
    return `${product.price} ₸/кг`;
}

export const products = [
    {
        id: 1,
        name: 'Banana',
        price: 800,
        description: formatProductDescription({
            id: 1,
            name: 'Banana',
            price: 800,
            description: '',
            image: 'banana.png'
        }),
        image: 'banana.png'

    }
];