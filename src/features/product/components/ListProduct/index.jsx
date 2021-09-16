import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../Product';

function ListProduct(props) {
    const productList = [
        {
            id: 1,
            name: 'product 1',
            image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg',
            price: 1000,
            quantity: 10,
        },
        {
            id: 2,
            name: 'product 2',
            image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg',
            price: 2000,
            quantity: 20,
        },
        {
            id: 3,
            name: 'product 3',
            image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg',
            price: 3000,
            quantity: 30,
        },
        {
            id: 4,
            name: 'product 4',
            image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg',
            price: 4000,
            quantity: 40,
        },
        {
            id: 5,
            name: 'product 5',
            image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg',
            price: 5000,
            quantity: 50,
        },
    ];

    return (
        <div className="row">
            {productList.map(product => (
                <ProductItem product={product} />
            ))}
        </div>
    );
}

export default ListProduct;