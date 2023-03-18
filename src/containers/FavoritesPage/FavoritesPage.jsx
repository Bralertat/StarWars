import PeopleList from 'components/PeoplePage/PeopleList/PeopleList'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from './FavoritesPage.module.css'
// import cn from 'classnames'

const FavoritesPage = () => {
  const storeData = useSelector(state => state.favoriteReducer)
  const [people, setPeople] = useState([])
  useEffect(() => {
    const arr = Object.entries(storeData)
    if (arr.length) {
      const res = arr.map(el => ({
        id: el[0],
        ...el[1]
      }))
      setPeople(res)
    }
  }, [])

  return <>
    <h1 className='header__text'>Favorite Page</h1>
    {people.length
      ? <PeopleList people={people} />
      : <h2 className={s.comment}>No data</h2>
    }

  </>
}


export default FavoritesPage