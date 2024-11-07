import styles from "./SobreMim.module.css"
import PostModelo from "componentes/postModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/minha_foto.jpeg"
const SobreMim = () =>{
    return(
        <PostModelo
        fotoCapa={fotoCapa}
        titulo = 'Sobre mim'>
            <h3 className={styles.subtitulo}/>
                Olá, sou kauã
                <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de desenvolvimento e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na escola tecnica do estado de são paulo (ETEC), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como C, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de como o mundo da programação funcionava.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar analise e desenvolvimento na Fatec ipiranga. Tive oportunidade de me aprofundar em orientação a objeto e desenvolvimento web.
            </p>
            <p className={styles.paragrafo}>
                Atualmente estou a procura de um estágio em desenvolvimento, pois quero adquirir experiencia profissional na area que eu gosto.
            </p>
            
        <img src={fotoSobreMim}
        alt="Foto kaua perfil"
        className={styles.fotoSobreMim}/>
        </PostModelo>
    )
}

export default SobreMim