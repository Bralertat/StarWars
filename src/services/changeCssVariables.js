export const changeCssVariables = theme => {
  const root = document.querySelector(':root')

  /*
  Формат CSS-переменной:
  --theme-default-УникальноеИмя # дефолтная переменная
  --theme-light-УникальноеИмя   # для "light"
  --theme-dark-УникальноеИмя    # для "dark"
  --theme-neitral-УникальноеИмя # для "neitral"
  */
  const cssVariables = ['header', 'bgimage']

  cssVariables.forEach(el => {
    root.style.setProperty(
      `--theme-default-${el}`,
      `var(--theme-${theme}-${el})`
    )
  })

  //--theme-${theme}-headerне нравится я бы делал на свиче с переменными чтоб не зависеть от названий и не ошибаться в строках
  // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
  // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`)
  // все равно что только с дефисами оно не работает
  //root.style.--theme-default-header = `--theme-${theme}-header`
}