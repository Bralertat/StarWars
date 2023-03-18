import s from './PersonPhoto.module.css'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removePersonFromFavorite, setPersonToFavorite } from 'store/reducers/favoriteReducer'
import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

const PersonPhoto = ({ personId, personPhoto, personName, setPersonFavorite, personFavorite }) => {
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        }
      }))
      setPersonFavorite(true)
    }
  }


  return <>
    <div className={s.container}>
      <img className={s.photo} src={personPhoto} alt={personName} />
      <img
        onClick={dispatchFavoritePeople}
        src={personFavorite ? iconFavoriteFill : iconFavorite}
        alt='favorite'
        className={s.favorite}
      />
    </div>
  </>
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personName: PropTypes.string,
  setPersonFavorite: PropTypes.func,
  personFavorite: PropTypes.bool
}
export default PersonPhoto