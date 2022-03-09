import { Navigate, useLocation } from "react-router-dom"

import useVoidOrgAuth from "../states/AuthState"

function RequireAuth({ children }) {
  const location = useLocation()
  const { authed } = useVoidOrgAuth()

  console.log(authed)
  return authed === true ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />
}

export default RequireAuth
