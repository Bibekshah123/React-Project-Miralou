import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import {ReactComponent as LoveIcon } from "../../assets/icons/love.svg"
import {ReactComponent as ShopIcon } from "../../assets/icons/shop.svg"

export function Navbar()  {
    return (
        <header className='w-full pt-5 pb-5'>
            <div className='container pt-4 pb-4 mx-auto flex justify-between'>
                <div className='font-serif leading-none text-2xl'>Miralou</div>
                <div className='flex justify-between w-6/12'>
                    <Link className='' to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="flex gap-8">
                    <button>
                        <SearchIcon/>
                    </button>
                    <button>
                        <LoveIcon/>
                    </button>
                    <button>
                        <ShopIcon/>
                    </button>
                </div>
            </div>
        </header>
    )
}