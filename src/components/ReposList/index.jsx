import { useEffect, useState } from "react"
import style from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(repJson => {
                if (!repJson.length > 0) {
                    throw Error(repJson)
                }

                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(repJson)
                }, 3000)
            }).catch(e => {
                setDeuErro(true)
                console.log('Deu erro')
            })
    }, [nomeUsuario])
    return (
        <div className="container">
            {estaCarregando ? (
                <>
                    <h1>Carregando...</h1>

                    {deuErro && (
                        <h1>Não encontramos o nome de usuário</h1>
                    )}
                </>
            ) : (<ul className={style.list}>
                {
                    repos.map(({name, language, html_url, id}) => (
                        <li className={style.listItem} key={id}>
                            <div className={style.itemName}>
                            <b>Nome:</b> {name}
                            </div>
                            <div className={style.itemLanguage}>
                            <b>Linguagem: </b> {language} 
                            </div>
                            <a className={style.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    )
                )}
            </ul>)}
            
        </div>
    )
}

export default ReposList
