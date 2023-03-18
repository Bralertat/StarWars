import s from './UiLoading.module.css'
import PropTypes from 'prop-types'
import cn from 'classnames'

import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'
import loaderWhite from './img/loader-white.svg'
import { useEffect, useState } from 'react'

const UiLoading = ({ theme = 'white', isShadow = true, classes='' }) => {
  const [loaderIcon, setLoaderIcon] = useState(null)
  useEffect(() => {
    switch (theme) {
      case 'black': setLoaderIcon(loaderBlack); break;
      case 'blue': setLoaderIcon(loaderBlue); break;
      case 'white': setLoaderIcon(loaderWhite); break;
      default: setLoaderIcon(loaderBlue);
    }
  }, [])
  return <>
    <img className={cn(s.loader, isShadow && s.shadow, classes)} src={loaderIcon} alt="Loader" />
  </>
}

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string
}
export default UiLoading