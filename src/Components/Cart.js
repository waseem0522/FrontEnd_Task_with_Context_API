import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItems, showHideCart, removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (

              <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                      <div className="card">
                        <div className="card-body p-4">
                          <div className="row">
                            <div className="col-lg-7">
                              <h5 className="mb-3">
                                <a href="#!" className="text-body">
                                  <i className="fas fa-long-arrow-alt-left me-2" />
                                  Continue shopping
                                </a>
                              </h5>
                              <hr />
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                  <p className="mb-1">Shopping cart</p>
                                  <p className="mb-0">Your items in your cart</p>
                                </div>
                                <div>
                                  <p className="mb-0">
                                    <span className="text-muted">Sort by:</span>{" "}
                                    <a href="#!" className="text-body">
                                      price <i className="fas fa-angle-down mt-1" />
                                    </a>
                                  </p>
                                </div>
                              </div>

                              {cartItems.map((item) => (
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex flex-row align-items-center">
                                        <div>
                                          <img
                                            src={item.image}
                                            className="img-fluid rounded-3"
                                            alt="Shopping item"
                                            style={{ width: 65 }}
                                          />
                                        </div>
                                        <div className="ms-3">
                                          <h5>{item.name}</h5>
                                          <p className="small mb-0">256GB, Navy Blue</p>
                                        </div>
                                      </div>
                                      <div className="d-flex flex-row align-items-center">
                                        <div style={{ width: 80 }}>
                                          <h5 className="mb-0">${item.price}</h5>
                                        </div>
                                        <a href="#!" style={{ color: "#cecece" }}>
                                          <i className="fas fa-trash-alt" onClick={() => removeItem(item._id)} />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}


                            </div>
                            <div className="col-lg-5">
                              <div className="card bg-primary text-white rounded-3">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="mb-0">Card details</h5>
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                      className="img-fluid rounded-3"
                                      style={{ width: 45 }}
                                      alt="Avatar"
                                    />
                                  </div>
                                  <p className="small mb-2">Card type</p>
                                  <a href="#!" type="submit" className="text-white">
                                    <i className="fab fa-cc-mastercard fa-2x me-2" />
                                  </a>
                                  <a href="#!" type="submit" className="text-white">
                                    <i className="fab fa-cc-visa fa-2x me-2" />
                                  </a>
                                  <a href="#!" type="submit" className="text-white">
                                    <i className="fab fa-cc-amex fa-2x me-2" />
                                  </a>
                                  <a href="#!" type="submit" className="text-white">
                                    <i className="fab fa-cc-paypal fa-2x" />
                                  </a>
                                  <form className="mt-4">
                                    <div className="form-outline form-white mb-4">
                                      <input
                                        type="text"
                                        id="typeName"
                                        className="form-control form-control-lg"
                                        siez={17}
                                        placeholder="Cardholder's Name"
                                      />
                                      <label className="form-label" htmlFor="typeName">
                                        Cardholder's Name
                                      </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                      <input
                                        type="text"
                                        id="typeText"
                                        className="form-control form-control-lg"
                                        siez={17}
                                        placeholder="1234 5678 9012 3457"
                                        minLength={19}
                                        maxLength={19}
                                      />
                                      <label className="form-label" htmlFor="typeText">
                                        Card Number
                                      </label>
                                    </div>
                                    <div className="row mb-4">
                                      <div className="col-md-6">
                                        <div className="form-outline form-white">
                                          <input
                                            type="text"
                                            id="typeExp"
                                            className="form-control form-control-lg"
                                            placeholder="MM/YYYY"
                                            size={7}
                                            minLength={7}
                                            maxLength={7}
                                          />
                                          <label className="form-label" htmlFor="typeExp">
                                            Expiration
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-outline form-white">
                                          <input
                                            type="password"
                                            id="typeText"
                                            className="form-control form-control-lg"
                                            placeholder="●●●"
                                            size={1}
                                            minLength={3}
                                            maxLength={3}
                                          />
                                          <label className="form-label" htmlFor="typeText">
                                            Cvv
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                  <hr className="my-4" />
                                  <div className="d-flex justify-content-between">
                                    <p className="mb-2">Subtotal</p>
                                    <p className="mb-2">{formatCurrency(
                                      cartItems.reduce((amount, item) => item.price + amount, 0),
                                      opts
                                    )}</p>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <p className="mb-2">Shipping</p>
                                    <p className="mb-2">$20.00</p>
                                  </div>
                                  <div className="d-flex justify-content-between mb-4">
                                    <p className="mb-2">Total(Incl. taxes)</p>
                                    <p className="mb-2">{formatCurrency(
                                      cartItems.reduce((amount, item) => item.price + amount, 0),
                                      opts
                                    )}</p>
                                  </div>
                                  <button
                                    type="button"
                                    className="btn btn-info btn-block btn-lg"
                                  >
                                    <div className="d-flex justify-content-between">
                                      <span>{formatCurrency(
                                        cartItems.reduce((amount, item) => item.price + amount, 0),
                                        opts
                                      )}</span>
                                      <span>
                                        Checkout{" "}
                                        <i className="fas fa-long-arrow-alt-right ms-2" />
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              // <CartItem key={item._id} item={item} />

            )}
          </div>
        </div>
      )}
    </>
  )
};

export default Cart;
