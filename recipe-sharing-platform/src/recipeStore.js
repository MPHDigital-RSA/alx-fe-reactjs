import { create } from 'zustand'
import recipesData from './data.json'

const userRecipeStore = create((set) => ({
    recipes: {recipesData},
}))

export default userRecipeStore