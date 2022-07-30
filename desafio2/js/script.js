window.onload = function(){
   
    function resultCep(dataCep){
        for(let campo in dataCep){
    if(document.querySelector(`#${campo}`)){
        document.querySelector(`#${campo}`).value=dataCep[campo];
    }}}

    let dataCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        try{
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();
            resultCep(dadosJson);
        } catch(error){
            alert(error);
        }   
    }

    const butBuscar =  document.querySelector("#button");
    const ENDERECO =   document.querySelector("#CEP");
    const BAIRRO =     document.querySelector("#bairro");
    const CIDADE =     document.querySelector("#localidade");
    const ESTADO =     document.querySelector("#uf");
    butBuscar.addEventListener('click', function(){
       dataCep(ENDERECO.value),(BAIRRO.value),(CIDADE.value),(ESTADO.value);
    
    })
}
