import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

function Nosotros() {
  return (
    <Layout title={"Nosotros"} description="Sobre Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen Nosotros"/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id blandit nulla, id dictum ligula. Ut sed libero sem. Donec auctor leo risus, ac placerat nisi ultrices et. Sed at nunc vitae nulla rhoncus vestibulum at at ex. Nunc pretium sem euismod est ultrices, vel scelerisque sem finibus.</p>
            <p>Aenean ullamcorper dignissim consequat. Integer nunc orci, tincidunt eget magna auctor, maximus vulputate quam. In faucibus semper mi eget dapibus. Nulla hendrerit porta tellus, sed finibus purus aliquet in. Nunc ac est fringilla, sodales erat ac, iaculis orci.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros