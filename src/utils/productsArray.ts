type Product = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        title:'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 2000,
        image:"/images/iPhone 13.webp"
    },
    {
        title:'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image:"/images/iPhone 13.webp"
    },
    {
        title:'iPhone 12 ',
        description: 'This is iPhone 12 ',
        type: 'phone',
        capacity: '128',
        price: 1200,
        image:"/images/iPhone 12.webp"
    },
    {
        title:'iPhone 14 Plus',
        description: 'This is iPhone 14 Plus',
        type: 'phone',
        capacity: '256',
        price: 1400,
        image:"/images/iPhone 14 Plus.webp"
    },
    {
        title:'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image:"/images/iPhone 14.webp"
    },
    {
        title:'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '64',
        price: 1150,
        image:"/images/iPhone 11.webp"
    },
]

export default productsArray