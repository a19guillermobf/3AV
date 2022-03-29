/**Recolhendo AJAX desde página externa */
const lista = document.querySelector("#lista");
const fragmento = document.createDocumentFragment()

/**Crear objeto xhr */

const xhr = new XMLHttpRequest();

//console.log(xhr)


/**Abrir o recurso, neste caso como umha petiçom GET, a essa página*/
xhr.open("GET","https://jsonplaceholder.typicode.com/users")

/**Envia-se a petiçom */
xhr.send()

/**Agora hai-na que processar num evento, cando se completa a petiçom
 * Hai que revisar o estado no que quedou a petiçom, se o readyState 
 * 4, é que se completou, que o servidor respondeu algo, ainda que seja um erro
 * e podemos seguir trabalhando, logo se o valore de status é
 * entre 200 e 300, é que finaliçou bem e podemos processar o
 * json recebido
 */
xhr.addEventListener("readystatechange",e=>{
    if(e.target.readyState != 4)
        return
    if(e.target.status>=200 && e.target.status<300){
        /**Agora, o response text é o json em texto plano, polo que se
         * pode converter como faziamos anteriormente, co JSON.parse
         */
        const json=JSON.parse(e.target.responseText)
        //console.log(json)
        /**E agora com um fragmento, pode-se ir metendo os dados que acabamos de 
         * recuperar, por exemplo, nome, id e email de cada um deles (som usuarios o que recolhemos)
         */
        json.forEach(el => {
            const li= document.createElement("li");
            li.innerHTML=`${el.name} - ${el.email} -- ${el.phone}`
            fragmento.appendChild(li)
        });
        lista.appendChild(fragmento)
    } else {
        console.log("Error!!!")
        /**Este de abaixo, o mensaje, se o e.target.statusText tem algum contido
         * menaje colhe esse valor, se nom colhe "ocorreu um erro", é como um ternario
         * pero mais simplificado
         */
        let mensaje = e.target.statusText || "Ocurreu um erro"
        lista.innerHTML=`Erro ${e.target.status}:${mensaje}`
    }
})
