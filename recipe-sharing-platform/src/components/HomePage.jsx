import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import recipeData from '../data.json'

function HomePage() {

    const [data, setData] = useState(recipeData)

    return (
        <div className='grid gap-5 md:grid-cols-2 max-w-[900px] w-[100%] mx-[auto]'>
            <RecipeCard index='0' data={data} />
            <RecipeCard index='1' data={data} />
        </div>
    )
}

export default HomePage
