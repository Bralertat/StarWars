import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UiButton from 'components/UI/UiButton/UiButton'
// import cn from 'classnames'
import s from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  //не нравится нельзя наклацать сращу много вперед, пока страница не загрущится дольше не клаценшь
  //ссылка то остается активной и вполне меняет строку в браузере даже с неактивной кнопкой
  const handleChangePrev = () => getResource(prevPage)
  const handleChangeNext = () => getResource(nextPage)
  return <div className={s.container}>
    {/* кнопка не при делах срабатывает нажатие на ссылку */}
    <Link className={s.buttons} to={`/people/?page=${counterPage - 1}`}>
      <UiButton
        text='Previous'
        onClick={handleChangePrev}
        disabled={!prevPage}
      />
    </Link>
    <Link className={s.buttons} to={`/people/?page=${counterPage + 1}`}>
      <UiButton
        text='Next'
        onClick={handleChangeNext}
        disabled={!nextPage}
      />
    </Link>
  </div>
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number
}
export default PeopleNavigation