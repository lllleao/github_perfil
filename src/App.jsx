import { useState } from "react"

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"
import InputGithub from './components/InputGithub'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
        <InputGithub setNome={setNomeUsuario} />
      {nomeUsuario.length >= 4 && (
        
        <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
      )}
    </>
  )
}

export default App
