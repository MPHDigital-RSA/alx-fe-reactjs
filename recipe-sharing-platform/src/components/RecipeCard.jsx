import React, { useState } from 'react'
import recipeData from '../data.json'

function recipeCard({ index }) {

    const [data, setData] = useState(recipeData)

    return (
        <div className=" bg-[#ACBFA4] text-white flex px-[20px] py-[40px] items-center gap-[20px] flex-col rounded-xl hover:bg-[#B2BFAD] cursor-pointer shadow hover:shadow-xl" >
            <img src={data[index].image} alt="the image" className='w-[100px] h-[100px] object-cover rounded-xl' />
            <h1 className='text-[24px]'>{data[index].title}</h1>
            <p>{data[index].summary}</p>
        </div>
    )
}

export default recipeCard
