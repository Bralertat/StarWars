import cn from 'classnames'
import PropTypes from 'prop-types'
import s from './UiInput.module.css'
import '../index.css'
import icon from './img/cancel.svg'

const UiInput = ({ value, handleInputChange, placeholder, classes }) => (
  <div className={cn(s.wrapper__input, classes)}>
    <input
      type="text"
      value={value}
      onChange={e => handleInputChange(e.target.value)}
      placeholder={placeholder}
      className={s.input}
    />
    <img
    // благодяря тому что мы value передаем а не весь event можно очищать поле ввода
      onClick={() => handleInputChange('')}
      className={cn(s.clear, !value && s.clear__disabled)}
      src={icon}
      alt="Clear"
    />
  </div>
)

UiInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
}
export default UiInput