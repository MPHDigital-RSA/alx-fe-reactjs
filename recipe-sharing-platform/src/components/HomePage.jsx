import React from 'react'
import RecipeCard from './RecipeCard'

function HomePage() {
    return (
        <div className='grid gap-5 md:grid-cols-2 max-w-[900px] w-[100%] mx-[auto]'>
            <RecipeCard index='0' />
            <RecipeCard index='1' />
        </div>
    )
}

export default HomePage
