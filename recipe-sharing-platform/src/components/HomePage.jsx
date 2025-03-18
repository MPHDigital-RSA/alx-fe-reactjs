import React, { useState, useEffect } from 'react'
import recipeData from '../data.json'
import { Link } from 'react-router-dom';

function HomePage() {

    const [recipes, setRecipes] = useState(recipeData)

    useEffect(() => {
        console.log(recipes)
    }, []);

    const clickCard = () => {
        console.log("HI")
    }

    return (
        <div className='px-[30px] py-[50px]'>
            < div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[900px] w-[100%] mx-[auto]' >

                {recipes.map((recipe) => {
                    return (
                        <Link to={`recipe/${recipe.id - 1}`}>
                            <div className=" bg-[#ACBFA4] text-white flex px-[20px] py-[40px] items-center gap-[20px] flex-col rounded-xl hover:bg-[black] cursor-pointer shadow hover:shadow-xl transition text-center" key={recipe.id} onClick={clickCard} >
                                <img src={recipe.image} alt="the image" className='w-[100px] h-[100px] object-cover rounded-xl' />
                                <h1 className='text-[24px]'>{recipe.title}</h1>
                                <p>{recipe.summary}</p>
                            </div>
                        </Link>
                    )
                })}

            </ div>
        </div>
    )
}

export default HomePage
