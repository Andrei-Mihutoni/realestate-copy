for(let i=0; i<9; i++){
    const t = document.querySelector("template").content;
    const c = t.cloneNode(true);
    document.querySelector(".properties").appendChild(c)
}