import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import FavoritesPage from "containers/FavoritesPage/FavoritesPage";
import HomePage from "containers/HomePage/HomePage";
import NotFoundPage from "containers/NotFoundPage/NotFoundPage";
import PeoplePage from "containers/PeoplePage";
import PersonPage from "containers/PersonPage/PersonPage";
import SearchPage from "containers/SearchPage/SearchPage";

const routesConfig = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/people',
    element: <PeoplePage />
  },
  {
    path: '/people/:id',
    element: <PersonPage />
  },
  {
    path: '/favorites',
    element: <FavoritesPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/fail',
    element: <ErrorMessage />
  },
  {
    path: '/not-found',
    element: <NotFoundPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

export default routesConfig
