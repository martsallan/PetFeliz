import { useRouter } from "next/dist/client/router"
import styles from "../../styles/Product.module.scss"

export default function Produto() {

    const router = useRouter()
    const {id} = router.query
    return (

        <div className={styles.container}>
            <div className={`${styles.imageContainer}`}>
                <div className={`${styles.imgGallery}`}>
                    <h1>item {id}</h1>
                </div>
            </div>
            <div className={`${styles.infoContainer}`}>
                <div className={`${styles.info}`}>
                    <p>Marca item {id}</p>
                    <h1>Nome item {id} - Categoria item {id}</h1>
                    <p>unidades em estoque item {id}</p>
                    <h2>R$ Preco item {id}</h2>
                    <h3>Deseja adicionar quantos items?</h3>
                    <form action="">
                        <div>
                            <input type='number' />
                        </div>
                        <button type='submit'>Adicionar ao carrinho</button>
                    </form>
                </div>
            </div>
        </div>
    )
}