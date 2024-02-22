import {faker} from '@faker-js/faker';

const generateProducts = () => {
    const products = [];
    for (let i = 0; i < 100; i++) {
        const product = {
            title: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            price: faker.commerce.price(),
            // Otros campos ficticios que desees agregar
        };
        products.push(product);
    }
    return products;
};

export default generateProducts;