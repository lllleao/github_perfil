import style from './InputGithub.module.css'

const InputGithub = ({setNome}) => {

    return (
        <div className={style.containerInputGithub}>
            <label className={style.label} htmlFor="nome">Nome de usuario </label>
            <input id='nome' className={style.input} type="text" onBlur={e => setNome(e.target.value)}/>
        </div>
    )
}

export default InputGithub