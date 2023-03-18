//и в отдельный файл собирать рельюсеры а потом их сюда импортировать мне тоже показалось избыточным
import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { setLocalStorage } from 'utils/localStorage'
import favoriteReducer from './reducers/favoriteReducer'



const store = createStore(
  combineReducers({ favoriteReducer }),
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(()=>{
  setLocalStorage('store', store.getState().favoriteReducer)
})

export default store