window.onload = function(){

let frutas = [ 
    {descricao: "Mamão Papaia", preco: 8.90 }, 
    {descricao: "Laranja", preco: 3.60 }, 
    {descricao: "Manga", preco: 5.30 }, 
    {descricao: "Melão", preco: 6.20 }, 
    {descricao: "Melancia", preco: 4.80 }, 
]

const produtos = document.querySelector(`#produtos`);

( ()=>{
    for (let fruits of frutas) {
        const frutaList = document.createElement(`li`);
        
        for(listaFruta in fruits){
            if(listaFruta == `preco`){
                produtos.appendChild(frutaList).setAttribute(`data-preco`, fruits[listaFruta]);
            } else{
                produtos.appendChild(frutaList).textContent=`${fruits[listaFruta]}`;
            }
        }
    }

})()

let cestaClient=[];
    const cestaDoCliente=document.querySelector('#cestaDoCliente');
    const totalCompra=document.querySelector ('#mostraTotalCompra');
    let selecItem=document.querySelectorAll('#produtos>li');
    let total = 0;

    selecItem.forEach(function(item){
        item.addEventListener('click', function(){
            if (cestaClient.indexOf(item.textContent)!= -1) {
                alert('Este item já esta na sua Cesta!');
            } else {
                total += Number(item.dataset.preco);
                cestaClient.push(item.textContent);
                let itemCesta = document.createElement('li');
                cestaDoCliente.appendChild(itemCesta).textContent = item.textContent;
                totalCompra.value = total.toFixed(2);
            }
            console.log(item.textContent);
        });
    })
}