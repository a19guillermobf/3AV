/**Recolhendo AJAX desde página externa */
const lista = document.querySelector("#lista");
const fragmento = document.createDocumentFragment()

/**Esto hai que revisa-lo, que nom entendim moi bem como vai */
fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"})
.then(resposta=>{
    if (resposta.ok) 
        return resposta.json()
     else
        return Promise.reject("Mensagem de erro")
    })
.then(json=>{
    json.forEach(el=>{
        const li=document.createElement("li")
        li.innerHTML=`${el.name} - ${el.email} -- ${el.phone}`
        fragmento.appendChild(li)
    })
    lista.appendChild(fragmento)
})
.catch(erro=>console.log(erro))