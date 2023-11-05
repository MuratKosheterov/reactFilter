import React from 'react'
import Product from '../components/Product';


function Home({filtered}) {

  return (
    <div className='Home'>
        {filtered.map((item)=> {
          return (
            <Product item={item}  key={item.id} />
          )
        })}      
    </div>
  )
};

export default Home
