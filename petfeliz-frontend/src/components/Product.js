import React from 'react'
import {Link} from 'react-router-dom';

export default function Product(props) {
    const { product } = props
    return (
        <div key={product._id} className="card">
                  <Link to={`/produto/${product._id}`}>
                    <img className="medium" src={`${product.image}`} alt="produto"/>
                  </Link>
                  <div className="card-body">
                  <Link to={`/produto/${product._id}`}>
                      <h2>{product.name}</h2>
                    </Link>
                    <div className="price">R$ {product.price}</div>
                  </div>
                </div>
    )
}
