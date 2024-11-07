import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'
const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Sobre mim
                </h1>
                <p className={styles.paragrafo}>
                    Bem-vindos ao meu projeto pessoal sobre react. Eu sou Kauã Barros, estudante de programação na Fatec Ipiranga, aqui estou aprendendo sobre react e suas funções
                </p>
            </div>
            <div className={styles.imagens}> 
                <img className={styles.circuloColorido} 
                src ={circuloColorido}
                aria-hidden={true}
                />
                <img className={styles.minhaFoto}
                src={minhaFoto}
                alt='Foto Kauã barros'/>
            </div>
        </div>
            
        
    )
}
export default Banner 