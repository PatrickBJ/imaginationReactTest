// import client from './instance';

async function buscaImagens() {
    let listaImagem = [];

    try
    {
        // const {data} = await client.get("v2/list");

        listaImagem = [
            {"id":"0","author":"Alejandro Escamilla","width":561,"height":374,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/561/374"},
            {"id":"1","author":"Alejandro Escamilla","width":561,"height":374,"url":"https://unsplash.com/photos/LNRyGwIJr5c","download_url":"https://picsum.photos/id/1/561/374"},
            {"id":"10","author":"Paul Jarvis","width":750,"height":1667,"url":"https://unsplash.com/photos/6J--NXulQCs","download_url":"https://picsum.photos/id/10/750/366"},
            {"id":"100","author":"Tina Rataj","width":750,"height":1656,"url":"https://unsplash.com/photos/pwaaqfoMibI","download_url":"https://picsum.photos/id/100/650/365"},
            {"id":"1000","author":"Lukas Budimaier","width":5626,"height":363,"url":"https://unsplash.com/photos/6cY-FvMlmkQ","download_url":"https://picsum.photos/id/1000/562/363"},
            {"id":"1001","author":"Danielle MacInnes","width":561,"height":374,"url":"https://unsplash.com/photos/1DkWWN1dr-s","download_url":"https://picsum.photos/id/1001/561/374"},
            {"id":"1002","author":"NASA","width":4312,"height":2868,"url":"https://unsplash.com/photos/6-jTZysYY_U","download_url":"https://picsum.photos/id/1002/431/286"},
            {"id":"1003","author":"E+N Photographies","width":1181,"height":1772,"url":"https://unsplash.com/photos/GYumuBnTqKc","download_url":"https://picsum.photos/id/1003/118/177"},
            {"id":"1004","author":"Greg Rakozy","width":561,"height":374,"url":"https://unsplash.com/photos/SSxIGsySh8o","download_url":"https://picsum.photos/id/1004/561/374"},
            {"id":"1005","author":"Matthew Wiebe","width":5760,"height":3840,"url":"https://unsplash.com/photos/tBtuxtLvAZs","download_url":"https://picsum.photos/id/1005/576/384"},
            {"id":"1006","author":"Vladimir Kudinov","width":3000,"height":2000,"url":"https://unsplash.com/photos/-wWRHIUklxM","download_url":"https://picsum.photos/id/1006/300/200"},
            {"id":"1008","author":"Benjamin Combs","width":561,"height":374,"url":"https://unsplash.com/photos/5L4XAgMSno0","download_url":"https://picsum.photos/id/1008/561/374"},
            {"id":"1009","author":"Christopher Campbell","width":5000,"height":7502,"url":"https://unsplash.com/photos/CMWRIzyMKZk","download_url":"https://picsum.photos/id/1009/500/750"},
            {"id":"101","author":"Christian Bardenhorst","width":2621,"height":1747,"url":"https://unsplash.com/photos/8lMhzUjD1Wk","download_url":"https://picsum.photos/id/101/262/174"},
            {"id":"1010","author":"Samantha Sophia","width":5184,"height":3456,"url":"https://unsplash.com/photos/NaWKMlp3tVs","download_url":"https://picsum.photos/id/1010/518/345"},
            {"id":"1011","author":"Roberto Nickson","width":5472,"height":3648,"url":"https://unsplash.com/photos/7BjmDICVloE","download_url":"https://picsum.photos/id/1011/547/364"},
            {"id":"1012","author":"Scott Webb","width":3973,"height":2639,"url":"https://unsplash.com/photos/uAgLGG1WBd4","download_url":"https://picsum.photos/id/1012/397/263"},
            {"id":"1013","author":"Cayton Heath","width":4256,"height":2832,"url":"https://unsplash.com/photos/D8LcRLwZyPs","download_url":"https://picsum.photos/id/1013/425/283"},
            {"id":"1014","author":"Oscar Keys","width":6016,"height":4000,"url":"https://unsplash.com/photos/AmPRUnRb6N0","download_url":"https://picsum.photos/id/1014/601/400"},
            {"id":"1015","author":"Alexey Topolyanskiy","width":6000,"height":4000,"url":"https://unsplash.com/photos/-oWyJoSqBRM","download_url":"https://picsum.photos/id/1015/600/400"},
            {"id":"1016","author":"Philippe Wuyts","width":3844,"height":2563,"url":"https://unsplash.com/photos/_h7aBovKia4","download_url":"https://picsum.photos/id/1016/384/256"},
            {"id":"1018","author":"Andrew Ridley","width":3914,"height":2935,"url":"https://unsplash.com/photos/Kt5hRENuotI","download_url":"https://picsum.photos/id/1018/391/293"},
            {"id":"1019","author":"Patrick Fore","width":5472,"height":3648,"url":"https://unsplash.com/photos/V6s1cmE39XM","download_url":"https://picsum.photos/id/1019/547/364"},
            {"id":"102","author":"Ben Moore","width":4320,"height":3240,"url":"https://unsplash.com/photos/pJILiyPdrXI","download_url":"https://picsum.photos/id/102/432/324"},
            {"id":"1020","author":"Adam Willoughby-Knox","width":4288,"height":2848,"url":"https://unsplash.com/photos/_snqARKTgoc","download_url":"https://picsum.photos/id/1020/428/284"},
            {"id":"1021","author":"Frances Gunn","width":2048,"height":1206,"url":"https://unsplash.com/photos/8BmNurlVR6M","download_url":"https://picsum.photos/id/1021/204/120"},
            {"id":"1022","author":"Vashishtha Jogi","width":6000,"height":3376,"url":"https://unsplash.com/photos/bClr95glx6k","download_url":"https://picsum.photos/id/102/600/337"},
            {"id":"1023","author":"William Hook","width":3955,"height":2094,"url":"https://unsplash.com/photos/93Ep1dhTd2s","download_url":"https://picsum.photos/id/1023/395/209"},
            {"id":"1024","author":"Мартин Тасев","width":1920,"height":1280,"url":"https://unsplash.com/photos/7ALI0RYyq6s","download_url":"https://picsum.photos/id/1024/192/128"},
            {"id":"1025","author":"Matthew Wiebe","width":4951,"height":3301,"url":"https://unsplash.com/photos/U5rMrSI7Pn4","download_url":"https://picsum.photos/id/1025/495/330"}
        ];

        // listaImagem = Array.from(data);
    }
    catch(error)
    {
        throw error;
    }

    return listaImagem;
}

export { buscaImagens }