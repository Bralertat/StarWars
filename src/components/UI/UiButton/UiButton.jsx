import cn from 'classnames'
import PropTypes from 'prop-types'
import '../index.css'
import s from './UiButton.module.css'

const UiButton = ({
  text,
  onClick,
  disabled,
  theme = 'dark',
  classes
}) => {
  return <>
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(s.button, s[theme], classes)}//classes последний чтоб перетирал предыдущие
    >
      {text}
    </button>
  </>
}

UiButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classes: PropTypes.string
}
export default UiButton