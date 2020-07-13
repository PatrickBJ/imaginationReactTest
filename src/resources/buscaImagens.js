import client from './instance';

async function buscaImagens() {
    let listaImagem = [];

    try
    {
        const {data} = await client.get("v2/list");
        listaImagem = Array.from(data);
    }
    catch(error)
    {
        throw error;
    }

    return listaImagem;
}

export { buscaImagens }