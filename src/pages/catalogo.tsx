import React from "react"
import styles from "../styles/Catalogo.module.scss"
import Item from "../components/Item/Item"
import Produto from "../core/Produto"
import { SearchIcon } from "../components/Icons"

export default function Catalogo() {

    const products = [
        new Produto('produto1', 'descricao1', 22.50, 2, 1),
        new Produto('produto2', 'descricao2', 22.50, 2, 2),
        new Produto('produto3', 'descricao3', 22.50, 2, 3),
        new Produto('produto4', 'descricao4', 22.50 , 2, 4),
        new Produto('produto5', 'descricao5', 22.50 , 2, 5),
        new Produto('produto6', 'descricao6', 22.50 , 2, 6),
        new Produto('produto7', 'descricao7', 22.50, 2, 7),
        new Produto('produto1', 'descricao1', 22.50, 2, 1),
        new Produto('produto2', 'descricao2', 22.50, 2, 2),
        new Produto('produto3', 'descricao3', 22.50, 2, 3),
        new Produto('produto4', 'descricao4', 22.50 , 2, 4),
        new Produto('produto5', 'descricao5', 22.50 , 2, 5),
        new Produto('produto6', 'descricao6', 22.50 , 2, 6),
        new Produto('produto7', 'descricao7', 22.50, 2, 7),
    ]


    const categorias = [
        {
            id: 1,
            nome: 'categoria1'
        },
        {
            id: 2,
            nome: 'categoria2'
        },
        {
            id: 3,
            nome: 'categoria3'
        },
        {
            id: 4,
            nome: 'categoria4'
        },
    ]

    return (
        <section className={styles.container}>
            <aside className={styles.sidenav}>
                <h1 className={`${styles.title}`}>Filtros</h1>
                <form>
                    <div className={`${styles.sideBox}`}>
                        <h3>Categoria</h3>
                            {categorias?.map((categoria) => (
                                <div key={categoria.id} >
                                    <input type="checkbox" id={categoria.nome} name='categoria[]' value={categoria.nome}/>
                                    <label>{categoria.nome}</label>
                                </div>
                            ))}
                    </div>
                    <div className={`${styles.sideBox}`}>
                        <h3>Preço</h3>
                            <div className={`${styles.priceRange}`}>
                                <input type="radio" id={`preco1`} value='<-20' name='preco'/>
                                <label>{'<'}R$ 20,00</label>
                            </div>
                            <div className={`${styles.priceRange}`}>
                                <input type="radio" id={`preco2`} value='20-50' name='preco'/>
                                <label>R$ 20,00 - R$ 50,00</label>
                            </div>
                            <div className={`${styles.priceRange}`}>    
                                <input type="radio" id={`preco3`} value='50-100' name='preco'/>
                                <label>R$ 50,00 - R$ 100,00</label>
                            </div>
                            <div className={`${styles.priceRange}`}>    
                                <input type="radio" id={`preco4`} value='>-100' name='preco'/>
                                <label>{'>'}R$ 100,00</label>
                            </div>
                    </div>
                    <div className={`${styles.sideBox}`}>
                        <h3>Marca</h3>
                        <input type='text' className={`${styles.searchBar}`} placeholder={`Procurar`} />
                    </div>

                    <button type='submit' className={styles.searchButton}>Buscar</button>
                </form>
            </aside>
            <main className={styles.shelf}>
                <div className={styles.shelfContent}>
                    {products?.map((product) => (
                        <Item product={product} key={product.id}></Item>
                    ))}
                </div>
            </main>
        </section>
    )
}