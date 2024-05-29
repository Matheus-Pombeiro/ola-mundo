import PostModelo from "components/PostModelo";

import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

import styles from "./SobreMim.module.css";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
           <h3 className={styles.subtitulo}>Olá, eu sou o Matheus!</h3>
           <img 
                src={fotoSobreMim}
                alt="Foto do Matheus Sorrindo"
                className={styles.fotoSobreMim}
           />

           <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet magna eleifend, dictum turpis non, posuere erat. Sed commodo metus et mattis interdum. Mauris tempus neque sed augue pellentesque, in mollis purus blandit. Quisque vel tortor sit amet diam accumsan lobortis. Nam pulvinar bibendum lacus, ac iaculis enim lacinia vel. Fusce ut ligula erat. Vestibulum tempus tortor arcu, ac aliquam elit imperdiet in. Sed justo mi, sollicitudin at felis malesuada, vestibulum consectetur quam. Nam interdum, turpis et tristique tempor, magna velit vestibulum libero, sed varius lacus ex nec erat. Quisque est dolor, condimentum in lacus sed, eleifend sagittis metus. Mauris porttitor dui vel augue iaculis, at pellentesque odio varius. Aenean vitae nisl ut enim venenatis fermentum sit amet in odio. Nunc consequat id arcu vel tempus.</p>

           <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet magna eleifend, dictum turpis non, posuere erat. Sed commodo metus et mattis interdum. Mauris tempus neque sed augue pellentesque, in mollis purus blandit. Quisque vel tortor sit amet diam accumsan lobortis. Nam pulvinar bibendum lacus, ac iaculis enim lacinia vel. Fusce ut ligula erat. Vestibulum tempus tortor arcu, ac aliquam elit imperdiet in. Sed justo mi, sollicitudin at felis malesuada, vestibulum consectetur quam. Nam interdum, turpis et tristique tempor, magna velit vestibulum libero, sed varius lacus ex nec erat. Quisque est dolor, condimentum in lacus sed, eleifend sagittis metus. Mauris porttitor dui vel augue iaculis, at pellentesque odio varius. Aenean vitae nisl ut enim venenatis fermentum sit amet in odio. Nunc consequat id arcu vel tempus.</p>

           <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet magna eleifend, dictum turpis non, posuere erat. Sed commodo metus et mattis interdum. Mauris tempus neque sed augue pellentesque, in mollis purus blandit. Quisque vel tortor sit amet diam accumsan lobortis. Nam pulvinar bibendum lacus, ac iaculis enim lacinia vel. Fusce ut ligula erat. Vestibulum tempus tortor arcu, ac aliquam elit imperdiet in. Sed justo mi, sollicitudin at felis malesuada, vestibulum consectetur quam. Nam interdum, turpis et tristique tempor, magna velit vestibulum libero, sed varius lacus ex nec erat. Quisque est dolor, condimentum in lacus sed, eleifend sagittis metus. Mauris porttitor dui vel augue iaculis, at pellentesque odio varius. Aenean vitae nisl ut enim venenatis fermentum sit amet in odio. Nunc consequat id arcu vel tempus.</p>

        </PostModelo>
    );
};