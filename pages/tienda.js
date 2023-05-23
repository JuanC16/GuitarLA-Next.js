import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from "../styles/grid.module.css"

function Tienda({guitarras}) {

  return (
    <Layout title={"Tienda"} description="Tienda Virtual">
       <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>
        <div className={styles.grid}>
          {guitarras?.map(guitarra=>(
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
       </main>
    </Layout>
  )
}

export default Tienda


export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()

  return {
      props:{
        guitarras
      }
    }
}


// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data: guitarras} = await respuesta.json()

//   return {
//     props:{
//       guitarras
//     }
//   }
// }