const initialState = {
    name: '',
    category: '',
    author_first: '',
    author_last: '',
    ingredients:[],
    instructions:[],
    recipes: []
}

export const UPDATENAME = 'UPDATENAME'
export const UPDATECAT = 'UPDATECAT'
export const UPDATEAUTHF = 'UPDATEAUTHF'
export const UPDATEAUTHL = 'UPDATEAUTHL'
export const ADDINGREDIENTS = 'ADDINGREDIENTS'
export const ADDINST = 'ADDINST'
export const ADDRECIPE = 'ADDRECIPE'


const reducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATENAME:
            return Object.assign({},state, {...state , name:action.payload})
        case UPDATECAT:
            return Object.assign({},state, {...state , category:action.payload})
        case UPDATEAUTHF:
            return Object.assign({},state, {...state, author_first: action.payload})
            case UPDATEAUTHL:
            return Object.assign({},state, {...state, author_last: action.payload})
        case ADDINGREDIENTS:
            const newIngredients = [...state.ingredients, action.payload]
            return Object.assign({},state,{...state, ingredients: newIngredients})
        case ADDINST:
                const newInstructions = [...state.ingredients, action.payload]
            return Object.assign({},state, {...state, instructions: newInstructions})
        case ADDRECIPE:
            const  {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state
            const recipes = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            }
            const newRecipe = [...state.recipes, recipes]
            return {...state, recipes: newRecipe}
     
        default:
            return state
    }
}
export default reducer