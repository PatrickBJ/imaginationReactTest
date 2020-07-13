import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

function ViewImage(props){

    const [imagem, setImagem] = useState(props.location.image?[props.location.image.download_url,'','']:[]);
    const [imageId, setImageId] = useState(props.location.image?props.location.image.id:null);
    const [author, setAuthor] = useState(props.location.image?props.location.image.author:null);
    const [dimensions, setDimensions] = useState(props.location.image?props.location.image.width+" x "+props.location.image.height:null);
    const [grayScale, setGrayScale] = useState(false);
    const [blur, setBlur] = useState('0');
    const [loading, setLoading] = useState(false);

    useEffect(() =>  {
        if(props.location.image == null || imagem == null){
            const dadosImagem = JSON.parse(localStorage.getItem("imageEdit"));
            setImagem([dadosImagem.download_url,'','']);
            setImageId(dadosImagem.id);
            setAuthor(dadosImagem.author);
            setDimensions(dadosImagem.width+" x "+dadosImagem.height);
        }
        else if(props.location.image !== localStorage.getItem("imageEdit")){
            localStorage.setItem("imageEdit", JSON.stringify(props.location.image));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function toggleGray(){
        setLoading(true);
        setGrayScale(!grayScale);
        setImagem([imagem[0], grayScale?'':'?grayscale' , blur>0?`${grayScale?'?':'&'}blur=${blur}`:'']);
    }
    
    function Blur(value){
        setLoading(true);
        setBlur(value);
        setImagem([imagem[0], imagem[1], value>0?`${grayScale?'&':'?'}blur=${value}`:'']);
    }

    return(
        <div className="viewImage">
            <img src={imagem.join('')} alt={imageId} onLoad={()=> setLoading(false)} onError={()=> setLoading(false)}/>
            <div className="edicao">
                
                <div className="info">{imageId}</div>
                <div className="info">{author}</div>
                <div className="info">{dimensions}</div>
                <div className="filters">FILTERS
                    <div className="progressCircle" hidden={!loading}>
                        <CircularProgress className="progressCircleChild" color="inherit" />
                    </div>
                </div>
                <div className="grayscale">
                    <input type="checkbox" disabled={loading} checked={grayScale} onChange={()=>toggleGray()}/>
                    <label>GrayScale</label>
                </div>
                <div className="info">Blur</div>
                <input className="blur" disabled={loading} type="range" min="0" max="10" value={blur} onChange={(e)=> Blur(e.target.value)}/>
                <div className="info">{blur}</div>
            </div>
        </div>
    );
}

export default ViewImage;