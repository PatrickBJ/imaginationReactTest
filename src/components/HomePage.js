import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buscaImagens } from '../resources/buscaImagens'
import { CircularProgress } from '@material-ui/core';
import { encontraIndexacao, ajustaRatio } from '../utils/mathUtils';

function HomePage(){

    const [listaImagem, setListaImagem] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () =>{
        if(listaImagem.length <= 0){
            setListaImagem(await buscaImagens());
            setLoading(false);
        }
    }

    function seletorColunaEOrdem(i){
        const index = encontraIndexacao(i);
        return "item item"+index;
    }
      
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div className="homePage">
            <div className="progressCircle" hidden={!loading}>
                <CircularProgress className="progressCircleChild" color="inherit" />
            </div>
            <div className="grid">
                {
                    listaImagem.map(
                        (img, i) => {
                            if(i<= 12){
                                return(
                                    <div className={seletorColunaEOrdem(i+1)} key={i}>
                                        {<Link to={{
                                            pathname: '/ViewImage',
                                            image:img}}>
                                                {<img style={ajustaRatio(i+1, img)} alt={`${i}`} src={img.download_url} draggable="false"/>}
                                        </Link>}
                                    </div>
                                )}
                        }
                    )
                }
            </div>

            <div className="others">
                {
                    listaImagem.map(
                        (img, i) => {
                            if(i> 12){
                                return(
                                    <div className="item" key={i}>
                                        {<Link to={{
                                            pathname: '/ViewImage',
                                            image:img}}>
                                                {<img alt={`${i}`} src={img.download_url} draggable="false"/>}
                                        </Link>}
                                    </div>
                                )}
                        }
                    )
                }
            </div>
        </div>
    );
}

export default HomePage;