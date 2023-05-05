import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from '../../assets/minha_foto.png'



export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo={"Sobre mim"}
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Caio
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto Caio Tozer"
                className={styles.fotoSobreMim}
            />
             <p classname={styles.paragrafo} >
                Me chamo Caio Tozer, iniciei no mundo da programação em 2019. Interessado em desenvolver para Web,
                iniciei minha aprendizagem estudando Javascript, Html e CSS.
                Atualmente, estou expandido conhecimento buscando experiência em React Native, ReactJS e Angular.
                Nos dias atuais,
                estou fazendo minha graduação em Licenciatura em Computação
                na Universidade Federal Rural de Pernambuco.
            </p>
            <br />
             <p classname={styles.paragrafo} >
                Curiosidades sobre mim:
                Sou comunicativo,
                gosto de trabalhar em equipe, gosto de resolver problemas, sou bom em liderança,
                gosto de aprender novas tecnologias e estudar sobre a área de programação e 
                desenvolvimento de software.
            </p>
            <br />
            <br />
            <h3 className={styles.subtitulo}>
                Hello, I´m Caio
            </h3>
             <p classname={styles.paragrafo} >
                My name is Caio Tozer, I started in the world of programming in 2019. 
                Interested in developing for the Web,
                I started my learning by studying Javascript, Html and CSS.
                Currently, I am expanding my knowledge seeking experience in React Native, ReactJS and Angular.
                In the present day,
                I am doing my degree in Bachelor of Science in Computing
                at the Federal Rural University of Pernambuco.
            </p>
            <br/>
             <p classname={styles.paragrafo} >
            Trivia about me:
                I am communicative,
                I like to work in a team, I like to solve problems, I'm good at leadership,
                I like to learn new technologies and study about the area of ​​programming and
                software development.
            </p>
        </PostModelo>
    )
}