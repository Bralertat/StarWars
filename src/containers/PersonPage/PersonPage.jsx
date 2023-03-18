import s from './PersonPage.module.css'
// import cn from 'classnames'
import PersonInfo from 'components/PersonPage/PersonInfo/PersonInfo'
import PersonPhoto from 'components/PersonPage/PersonPhoto/PersonPhoto'
import { API_PERSON } from 'consts/api'
import { withErrorApi } from 'hoc-helpers/withErrorApi'
import PropTypes from 'prop-types'
import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPeopleImage } from 'services/getPeopleData'
import { getApiResource } from 'utils/network'
import PersonLinkBack from 'components/PersonPage/PersonLinkBack/PersonLinkBack'
import UiLoading from 'components/UI/UiLoading/UiLoading'
import { useSelector } from 'react-redux'
// import PersonFilms from 'components/PersonPage/PersonFilms/PersonFilms'
const PersonFilms = React.lazy(() => import('components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
  const id = useParams().id
  //зачем все это пихать в локальный стейт я не понимаю
  // const [personId, setPersonId] = useState(null) // попробую не использовать
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const storeData = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`)

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

      if (res) {
        setPersonInfo([
          { title: 'Mass', data: res.mass },
          { title: 'Height', data: res.height },
          { title: 'Skin color', data: res.skin_color },
          { title: 'Hair color', data: res.hair_color },
          { title: 'Birth year', data: res.birth_year },
          { title: 'Eye color', data: res.eye_color },
          { title: 'Gender', data: res.gender }
        ])
        setPersonName(res.name)
        setPersonPhoto(getPeopleImage(id))
        res.films.length && setPersonFilms(res.films)
        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [setErrorApi, id])
  return <>
    <PersonLinkBack />
    <div className={s.wrapper}>
      <span className={s.person__name}>{personName}</span>
      <div className={s.container}>
        <PersonPhoto
          personPhoto={personPhoto}
          personName={personName}
          personId={id}
          personFavorite={personFavorite}
          setPersonFavorite={setPersonFavorite}
        />
        {personInfo && <PersonInfo personInfo={personInfo} />}
        {personFilms && (
          //не работает лоадер почемуто изза отсутствия скобочек после && 
          <Suspense fallback={<UiLoading theme='white' isShadow classes='' />} >
            <PersonFilms personFilms={personFilms} />
          </Suspense>
        )}
      </div>
    </div>
  </>
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(PersonPage)