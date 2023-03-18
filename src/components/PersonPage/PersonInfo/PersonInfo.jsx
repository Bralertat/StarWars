import s from './PersonInfo.module.css'
// import cn from 'classnames'
import PropTypes from 'prop-types'

const PersonInfo = ({personInfo}) => {
  return <>
    <div className={s.wrapper}>
      <ul className={s.list__container}>
        {personInfo.map(({ title, data }) => (
          data && ( //этж не falsy значение имхо нудно иначе
            <li className={s.list__item} key={title}>
              <span className={s.item__title}>{title}</span>: {data}
            </li>)
        ))}
      </ul>
    </div>
  </>
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array
}
export default PersonInfo