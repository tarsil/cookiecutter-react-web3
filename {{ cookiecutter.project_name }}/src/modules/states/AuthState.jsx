import * as React from "react"

export default function useVoidOrgAuth() {
  let initialAuthed = false

  if (localStorage.getItem("{{ cookiecutter.project_name }}Authed")) {
    initialAuthed = localStorage.getItem("{{ cookiecutter.project_name }}Authed") === "true"
  }

  const [authed, setAuthed] = React.useState(initialAuthed)

  function loginApp() {
    localStorage.setItem("{{ cookiecutter.project_name }}Authed", true)
    setAuthed(true)
  }

  function logoutApp() {
    localStorage.setItem("{{ cookiecutter.project_name }}Authed", false)
    setAuthed(false)
  }

  return {
    authed,
    loginApp,
    logoutApp,
  }
}
