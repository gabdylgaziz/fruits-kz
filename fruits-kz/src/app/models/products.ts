export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;

}

export const products = [
    {
        id: 1,
        name: 'Банан',
        price: 800,
        image: 'assets/images/banana.png'
    },
    {
        id: 2,
        name: 'Апельсин',
        price: 1200,
        image: 'assets/images/orange.webp'
    },
    {
        id: 3,
        name: 'Яблоко',
        price: 600,
        image: 'assets/images/apple.png'
    },
];