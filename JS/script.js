var form = document.querySelector('form')

form.addEventListener('submit', function(e){

  //Impedir que o form faça refresh
  e.preventDefault()

//URL da Pesquisa
  let urlForm = " https://pokeapi.co/api/v2/pokemon/";

//Valor do Input Name
let nome = document.getElementById("name")

//Concatena a URL
urlForm = urlForm + this.name.value

//Transforma os valores em minúsculos
urlForm = urlForm.toLocaleLowerCase()

//Id content
let resposta = document.getElementById('content')

//Id imgPokemon
let imagem = document.getElementById('imgPokemon')

//Resposta em HTML
let html = ''

fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
      console.log(data)
      html = 'Nome: ' + maiuscula(data.name) + '<br>' 
      html = html + 'Type: ' + maiuscula(data.types[0].type.name)
      resposta.innerHTML = html

      imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
    })
      .catch(function(err) {
        if(err = 'SyntaxError: Unexpected token N, "Not Found" is not valid JSON'){
          html = 'Pokémon Não Encontrado' 
        } else {
          html = 'Erro:'
        }         
        resposta.innerHTML = html 
      })
});


function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}