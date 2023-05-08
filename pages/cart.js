import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/cartItem'
import React from 'react'

const cart = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Shopping Cart
                </div>
            </div>
            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
                {/* CART ITEMS START */}
                <div className="flex-[2]">
                    <div className="text-lg font-bold">
                        Cart Items
                    </div>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="flex-[1]">
                    <div className="text-lg font-bold">Summary</div>
                </div>
            </div>
            {/* CART ITEMS END */}
        </Wrapper>
    </div>
  )
}

export default cart