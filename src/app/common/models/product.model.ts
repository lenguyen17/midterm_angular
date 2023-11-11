interface rate {
    "rate":number,
    "count":number
}

export class Product {
    id: number = 0;
    title: string = '';
    price: string = '';
    category: string = '';
    description: string = '';
    image: string = '';
    rating: rate = {
        "rate": 0,
        "count": 0
    };
}