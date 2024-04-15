import React from 'react'
import CardReceita from '../components/CardReceita'
import './Home.css';
import ScrollableFeed from 'react-scrollable-feed';

export const Home = () => {


    const receitas = [
        {
            id: 1,
            imagem: 'https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            titulo: 'Torta de maçã',
            descricao: 'Torta de maça deliciosa',
            autor: 'Isaías Vasconcelos',
            ingredientes: [
                "1 cebola",
                "1 pimentão",
                "1 farinha de trigo"
            ],
            modo_preparo: "coloque tudo",
            gostei: 0,
            odiei: 0,
            created: '20/11/2024'
        },
        {
            id: 1,
            imagem: 'https://images.pexels.com/photos/724667/pexels-photo-724667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            titulo: 'Torta de maçã 2.0',
            descricao: 'Torta de maça deliciosa',
            autor: 'Isaías Vasconcelos',
            ingredientes: [
                "10 maçãs",
                "1 leite condensado",
                "1 fermento",
                "1 farinha de trigo"
            ],
            modo_preparo: "coloque tudo de novo",
            gostei: 0,
            odiei: 0,
            created: '20/11/2024'
        },
        {
            id: 1,
            imagem: 'https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            titulo: 'Torta de maçã 3.0',
            descricao: 'Torta de maça deliciosa',
            autor: 'Isaías Vasconcelos',
            ingredientes: [
                "1 cebola",
                "1 pimentão",
                "1 farinha de trigo"
            ],
            modo_preparo: "a mesma coisa",
            gostei: 0,
            odiei: 0,
            created: '20/11/2024'
        }
    ];
    return (
        <>

            <div className='container-Home'>

                <header className='barra_pesquisa'>
                    <input type='text' className='entrada_texto' placeholder='Digite alguma coisa... Torta de maça' />
                </header>

                <main className='feed'>

                    <section className='receitasFeed'>
                        <ScrollableFeed>
                            {
                                receitas.map(receita => <CardReceita informacoes={receita} />)
                            }
                        </ScrollableFeed>
                    </section>

                    
                </main>
            </div>

        </>
    )
}

