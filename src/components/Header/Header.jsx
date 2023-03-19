import Favorite from 'components/Favorite/Favorite'
import { DARK_THEME, LIGHT_THEME, NEUTRAL_THEME, useTheme } from 'context/ThemeProvider'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
// import cn from 'classnames'
import imgDroid from './img/droid.svg'
import imgLightSiber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'

const Header = () => {
  //он везде юзает локалльный стейт!!!
  const [icon, setIcon] = useState(imgSpaceStation)
  const isTheme = useTheme()
//когда по умолчанию тема null у нас как раз мечи по дефолту
  useEffect(() => {
    switch (isTheme.theme) {
      case DARK_THEME: setIcon(imgSpaceStation); break;
      case LIGHT_THEME: setIcon(imgLightSiber); break;
      case NEUTRAL_THEME: setIcon(imgDroid); break;
      default: setIcon(imgLightSiber);
    }
  }, [isTheme])

  return <div className={s.container}>
    <ul className={s.list__container}>
      <img className={s.logo} src={icon} alt='logo' />
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/people?page=1'>People</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/not-found'>Not Found</NavLink></li>
    </ul>
    <Favorite />
  </div>
}

export default Header