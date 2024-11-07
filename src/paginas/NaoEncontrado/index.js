import BotaoPrincipal from "componentes/BotaoPrincipal"
import styles from "./NaoEncontrado.module.css"
import erro404 from "assets/erro_404.png"
import { useNavigate } from "react-router-dom"
const NaoEncontrado =() =>{
    const navegar = useNavigate()
    return(
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>Erro 404</span>
            <h1 className={styles.titulo}> OPA!! Pagina não encontrada.</h1>
            <p className={styles.paragrafo}> Possivelmente a página procurada não existe, tem certeza que digitou ou acessou corretamente?</p>
            <p className={styles.paragrafo}>Clique em "voltar" para voltar a tela principal</p>
            <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>
            <img className={styles.imagemCachorro} src={erro404} alt='Imagem de erro'/>
        </div>
        <div className={styles.espacoEmBranco}></div>
        </>
    )

}
export default NaoEncontrado