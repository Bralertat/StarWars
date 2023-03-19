import s from './ChooseSide.module.css'
import cn from 'classnames'
import { DARK_THEME, LIGHT_THEME, NEUTRAL_THEME, useTheme } from 'context/ThemeProvider'
import PropTypes from 'prop-types'

import imgDarkSide from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'
import imgLightSide from './img/light-side.jpg'

const ChooseSideItem = ({ classes, theme, text, img }) => {
  // Почему isTheme мы ведь подумаем что это bool а это объект
  const isTheme = useTheme()
  return (
    <div
      className={cn(s.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={s.item__header}>{text}</div>
      <img className={s.item__img} src={img} alt={text} />
    </div>
  )
}

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string
}


const ChooseSide = () => {
  const arr = [
    {
      theme: DARK_THEME,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: s.item__dark
    },
    {
      theme: LIGHT_THEME,
      text: 'Light Side',
      img: imgLightSide,
      classes: s.item__light
    },
    {
      theme: NEUTRAL_THEME,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: s.item__neutral
    }
  ]

  return <div className={s.container}>
    {arr.map(({ classes, theme, text, img }) =>
      <ChooseSideItem
        key={theme}
        theme={theme}
        text={text}
        img={img}
        classes={classes}
      />
    )}
    <button> {/* это таки можно засунуть в баттон */}
      <ChooseSideItem
        theme={NEUTRAL_THEME}
        text="I'm Han Solo"
        img={imgFalcon}
      />
    </button>
  </div>
}


export default ChooseSide