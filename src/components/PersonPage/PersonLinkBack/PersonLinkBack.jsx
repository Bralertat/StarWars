import { useNavigate } from 'react-router-dom'
import s from './PersonLinkBack.module.css'
// import cn from 'classnames'

const PersonLinkBack = () => {
  const navigate = useNavigate()
  const handleGoBack = e => {
    e.preventDefault()
    navigate(-1)
  }
  return <>
    <a href="#" className={s.link} onClick={handleGoBack}>
      <span>Go back</span>
    </a>
  </>
}

export default PersonLinkBack