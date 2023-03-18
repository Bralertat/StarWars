import { Route, Routes } from 'react-router-dom'
import routesConfig from 'routes/routesConfig'
import Header from 'components/Header/Header'
import s from './App.module.css'
// import cn from 'classnames'


const App = () => {
  return <div className={s.wrapper}>
    <Header />
    <Routes>
      {routesConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element} />
      ))}
    </Routes>
  </div>
}

export default App

