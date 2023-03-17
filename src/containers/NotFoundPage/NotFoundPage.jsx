import { useLocation } from 'react-router-dom'
import img from './img/not-found.jpg'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()
  return <>
    <img className={s.img} src={img} alt='Not Found' />
    <p className={s.text}>No match for <u>{location.pathname}</u></p>
  </>
}

export default NotFoundPage