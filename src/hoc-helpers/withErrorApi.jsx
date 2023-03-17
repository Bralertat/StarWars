import { useState } from "react"
import ErrorMessage from "components/ErrorMessage/ErrorMessage"

export const withErrorApi = View => {
  return props => {
    const [errorApi, setErrorApi] = useState(null)
    return <>
      {errorApi
        ? <ErrorMessage />
        //там внутри еще до ретурна он задает setError
        : <View setErrorApi={setErrorApi} {...props} />
      }
    </>
  }
}




