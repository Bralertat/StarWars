import { HTTPS, SWAPI_PEOPLE, SWAPI_ROOT, GUIDE_IMG_EXT, URL_IMG_PERSON } from "consts/api"

export const getPeoplePageId = url => {
  const id = url.replace(/.+?\?page=/, '')
  return +id
}

export const getId = (url, category) => {
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(/\//g, '')
  return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXT}`