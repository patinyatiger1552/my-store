export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Iphone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Iphone Mini',
    price: 799,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Iphone Standard',
    price: 799,
    description: '',
  },
];