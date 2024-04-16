import React, { useEffect, useState } from 'react'
import CardReceita from '../components/CardReceita'
import './Home.css';
import ScrollableFeed from 'react-scrollable-feed';
import { API_BACKEND } from '../config/api-connection';

export const Home = () => {

    const [receitas,setReceitas] = useState([]);
    useEffect(() => {
        
        API_BACKEND.get('/Receita')
        .then(response => setReceitas(response.data))

    }, [])

    return (
        <>
            <div className='container-Home'>

                <header className='barra_pesquisa'>
                    <input type='text' className='entrada_texto' placeholder='Digite aqui o nome da receita'/>
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

