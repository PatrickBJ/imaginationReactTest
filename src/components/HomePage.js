import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buscaImagens } from '../resources/buscaImagens'
import { CircularProgress } from '@material-ui/core';
import { encontraIndexacao } from '../utils/mathUtils';

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
                                    <div className={seletorColunaEOrdem(i+1)} style={{backgroundImage: `url(${img.download_url})`}} key={i}>
                                        <Link to={{
                                            pathname: '/ViewImage',
                                            image:img}} style={{width: "100%", height:"100%"}}>
                                        </Link>
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
                                    <Link to={{
                                        pathname: '/ViewImage',
                                        image:img}} key={i}>
                                        <div className="item" style={{backgroundImage: `url(${img.download_url})`}}/>
                                    </Link>
                                )
                            }
                        }
                    )
                }
            </div>
        </div>
    );
}

export default HomePage;