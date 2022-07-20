/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Product({ img, title, category, price, desc }) {
    return (
        <div className="flex flex-wrap m-4 text-primary-content">
            <div className="p-4 w-full bg-base-300 rounded">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="h-full" src={img} />
                </a>
                <div className="mt-4">
                    <h3 className="text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="title-font text-lg font-medium">{title}</h2>
                    <p className="mt-1 lowercase">{desc.length > 80 ? desc.slice(0, 80) + '...' : desc}</p>
                    <p className="mt-1">${price}</p>
                </div>
            </div>
        </div>
    )
}
