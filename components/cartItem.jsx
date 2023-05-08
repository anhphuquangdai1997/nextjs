import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
            <img src="/product-1.webp" alt="product-1.webp"/>
        </div>
    </div>
  )
}

export default CartItem