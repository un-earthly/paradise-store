import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Product from '../components/Product'

export default function MensCollection() {
    const { isLoading, error, data } = useQuery(['womensCollection'], () =>
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then(res => res.data)
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                data.map(p => <Product category={p.category} key={p.id} desc={p.description} img={p.image} price={p.price} title={p.title} />)
            }

        </div>
    )
}
