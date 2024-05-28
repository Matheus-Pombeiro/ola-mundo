import styles from "./Banner.module.css";

import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Olá, Mundo</h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Matheus Pombeiro, aluno de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="Círculo Colorido"
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src="https://media.licdn.com/dms/image/D4D03AQF7OC59nWxZWQ/profile-displayphoto-shrink_800_800/0/1709071293936?e=1722470400&v=beta&t=Fh-PCT5B7qckHOUdZMdDa4W75eAOAdgfy-G0uuOjwLo"
                    alt="Matheus Pombeiro Foto"
                />
            </div>
        </div>
    );
};