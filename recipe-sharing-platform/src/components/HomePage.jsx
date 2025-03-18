import React, { useState, useEffect } from 'react'
import recipeData from '../data.json'

function HomePage() {

    const [recipes, setRecipes] = useState(recipeData)

    useEffect(() => {
        console.log(recipes)
    }, []);

    return (
        < div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[900px] w-[100%] mx-[auto]' >

            {recipes.map((recipe) => {

                return (
                    <div className=" bg-[#ACBFA4] text-white flex px-[20px] py-[40px] items-center gap-[20px] flex-col rounded-xl hover:bg-[#B2BFAD] cursor-pointer shadow hover:shadow-xl" >
                        <img src={recipe.image} alt="the image" className='w-[100px] h-[100px] object-cover rounded-xl' />
                        <h1 className='text-[24px]'>{recipe.title}</h1>
                        <p>{recipe.summary}</p>
                    </div>
                )
            })}
        </ div>
    )
}

export default HomePage
