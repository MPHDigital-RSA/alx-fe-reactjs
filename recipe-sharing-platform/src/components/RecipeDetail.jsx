import React, { useEffect } from 'react'
import recipes from '../data.json'
import { Link, useParams } from 'react-router-dom'

function RecipeDetail() {

    useEffect(() => {
    }, [])
    // getting an id value from the url
    const parameter = useParams();
    let Id = parameter.id;

    // attaching an id to a recipes data
    const currentRecipe = recipes[Id];

    return (
        <div className='w-[100%] min-h-[100vh] flex items-center justify-center px-[30px] flex-col gap-3 py-[50px]'>

            <Link to='/' className='bg-[#ACBFA4] text-white rounded-lg py-[10px] px-[20px] hover:bg-black transition cursor-pointer shadow'>Home</Link>

            <div className='flex flex-col sm:flex-row gap-5 items-center bg-[#ACBFA4] p-[20px] rounded-xl text-white w-[100%] max-w-[900px] text-center sm:text-left shadow'>
                <img src={currentRecipe.image} alt="" className='w-[100%] h-[300px] sm:h-[200px] sm:w-[50%] object-cover rounded-xl' />
                <div>
                    <h1 className='text-[24px] sm:text-[28px] font-semibold'>{currentRecipe.title}</h1>
                    <p className='mt-2'>{currentRecipe.summary}</p>
                </div>
            </div>

            <div className='grid gap-3 w-[100%] sm:grid-cols-2 w-[100%] max-w-[900px]'>
                <div className='flex flex-col sm:flex-row gap-5 items-center bg-[#ACBFA4] p-[20px] rounded-xl text-white w-[100%] max-w-[900px] text-center sm:text-left shadow'>
                    <ul>
                        <h1 className='text-[24px] font-semibold mb-[10px]'>Ingredients</h1>
                        {currentRecipe.ingredients.map((ingredient) => {
                            return (
                                <li>{ingredient}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className='flex flex-col bg-[#ACBFA4] p-[20px] rounded-xl text-white w-[100%] max-w-[900px] text-center sm:text-left shadow'>
                    <h1 className='text-[24px] font-semibold mb-[10px]'>Method</h1>
                    <p>{currentRecipe.instructions}</p>
                </div>
            </div>

        </div >
    )
}

export default RecipeDetail
