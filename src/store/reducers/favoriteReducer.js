import { omit } from "lodash"
import { getLocalStorage } from "utils/localStorage"

//как по мне разносить константы отдельно. редьюсеры отдельно, еще и экшины отдельно сильно напряжно
const ADD_PERSON_TO_FAVORITE = 'ADD_PERSON_TO_FAVORITE'
const REMOVE_PERSON_FROM_FAVORITE = 'REMOVE_PERSON_FROM_FAVORITE'

const initialState = getLocalStorage('store')
const favoriteReducer = (state = initialState, action)=>{
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return{
        ...state,
        ...action.payload
      }     
    case REMOVE_PERSON_FROM_FAVORITE:
      return omit(state, [action.payload])
    default:
      return state;
  }
}

export default favoriteReducer




export const setPersonToFavorite = person => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person
})
export const removePersonFromFavorite = personId => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId
})