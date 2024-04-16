import React from 'react'
import './CardReceita.css';
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const CardReceita = ({ informacoes }) => {
    return (
        <>
            <div className='container-CardReceita' id={informacoes.id}>
                <header className='titulo'>
                    {informacoes.titulo}
                    <span>
                        <b>por {informacoes.autor}</b>
                    </span>
                </header>
                <main >
                    <img src={informacoes.imagem} alt={informacoes.descricao} title={informacoes.descricao} />
                </main>
                <footer>
                    <div className='reacoes'>
                        <SlLike className='icon' color='#a3a3a3' id='reacao-positiva' />
                        <span id='count-reacao-positiva'>{informacoes.gostei}</span>

                        <SlDislike className='icon' color='#a3a3a3' id='reacao-negativa' />
                        <span id='count-reacao-negativa'>{informacoes.odiei}</span>
                    </div>

                    <div className='descricao'>
                        {informacoes.descricao}
                    </div>
                </footer>
            </div>
        </>
    )
}

export default CardReceita