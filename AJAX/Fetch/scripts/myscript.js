/**Recolhendo AJAX desde página externa */
const lista = document.querySelector("#lista");
const fragmento = document.createDocumentFragment()

/**Esto hai que revisa-lo, que nom entendim moi bem como vai */
fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"})
.then(resposta=>console.log(resposta))
.catch(erro=>console.log("Erro!!"))