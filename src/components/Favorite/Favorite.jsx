import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './Favorite.module.css'
// import cn from 'classnames'
import icon from './img/bookmark.svg'

const Favorite = () => {
  const [count, setCount] = useState()
  const storeData = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    const length = Object.keys(storeData).length
    //а нельзя просто с сотней сравнить?
    length.toString().length ? setCount(length) : setCount('...')
  })
  return <div className={s.container}>
    <Link to='/favorites'>
      <span className={s.counter}>{count}</span>
      <img src={icon} className={s.icon} alt="favorites" />
    </Link>

  </div>
}


export default Favorite