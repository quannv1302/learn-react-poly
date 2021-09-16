import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
ProductItem.propTypes = {

};

function ProductItem(props) {
    const { product } = props;
    const click = () => {
        console.log("Click click");
    }
    return (
        <div className="card col-3 m-3">
            <img className="card-img-top pt-2" src={product.image} alt={product.name} />
            <div className="card-body">
                <h5 className="card-title text-center">{product.name}</h5>
                <div className="text-center">
                    <button onClick={click} className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;