import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingScreen from "../components/LoadingScreen";
import MessageScreen from "../components/MessageScreen";

export default function ProductScreen(props) {
   const dispatch = useDispatch();
   const productId = props.match.params.id;
   const [qty, setQty] = useState(1);
   const productDetails = useSelector((state) => state.productDetails);
   const { loading, error, product } = productDetails;

   useEffect(() => {
      dispatch(detailsProduct(productId));
   }, [dispatch, productId]);
   const addToCartHandler = () => {
      props.history.push(`/cart/${productId}?qty=${qty}`);
   };
   return (
      <div>
         {loading ? (
            <LoadingScreen></LoadingScreen>
         ) : error ? (
            <MessageScreen variant="danger">{error}</MessageScreen>
         ) : (
            <div>
               <Link to="/">Back to result</Link>
               <div className="row top">
                  <div className="col-2">
                     <img
                        className="large"
                        src={product.image}
                        alt={product.name}
                     ></img>
                  </div>
                  <div className="col-1">
                     <ul>
                        <li>
                           <h1>{product.name}</h1>
                        </li>
                        {/* <li>Preço: R${product.price}</li> */}
                        <li>
                           Descrição:
                           <p>{product.description}</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-1">
                     <div className="card card-body">
                        <ul>
                           <li>
                              <div className="row">
                                 <div>Preço</div>
                                 <div className="price">R${product.price}</div>
                              </div>
                           </li>
                           <li>
                              <div className="row">
                                 <div>Status</div>
                                 <div>
                                    {product.qqtStock > 0 ? (
                                       <span className="success">Em estoque</span>
                                    ) : (
                                       <span className="danger">
                                          Não disponível
                                       </span>
                                    )}
                                 </div>
                              </div>
                           </li>
                           {product.qqtStock > 0 && (
                              <>
                                 <li>
                                    <div className="row">
                                       
                                       <div className="row">
                                          <div>Quantidade</div>
                                          <select
                                             value={qty}
                                             onChange={(element) =>
                                                setQty(element.target.value)
                                             }
                                          >
                                             {[
                                                ...Array(
                                                   product.qqtStock
                                                ).keys(),
                                             ].map((e) => (
                                                <option
                                                   key={e + 1}
                                                   value={e + 1}
                                                >
                                                   {e + 1}
                                                </option>
                                             ))}
                                          </select>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <button
                                       onClick={addToCartHandler}
                                       className="primary block"
                                    >
                                       Add to Cart
                                    </button>
                                 </li>
                              </>
                           )}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
