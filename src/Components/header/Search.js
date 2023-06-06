import React from "react"
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Search = ({ CartItem }) => {
  const { cartItems, showHideCart } = useContext(CartContext);
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex' style={{ display: "flex", justifyContent: "space-between" }}>
          <div className='logo width '>
            <img src='https://www.codistan.org/wp-content/uploads/2020/08/Codistan_Logo.png' alt='' />
          </div>
           <div className='icon'>
            <div className='cart'>
                <i className='fa fa-shopping-bag icon-circle' onClick={showHideCart} style={{ fontSize: '30px' ,marginTop: '15px'}}></i>
                <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search