import style from './Perfil.module.css'

const Perfil = ({nomeUsuario}) => {

    return (
        <header className={style.header}>
            <img className={style.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h3 className={style.name}>{nomeUsuario}</h3>
        </header>
    )
}

export default Perfil
