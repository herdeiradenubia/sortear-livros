let livros = ["Hoje depois amanhã", "Depois daquele verão", "Dracula", "Ao seu lado", "Oceano entre nós", "Rani e o sino da divisão", "O guia do cavalheiro", "Os garotos do cemitério", "Cordialmente cruel", "Você tem a vida inteira", "Black", "O ceifador", "The chase", "A pérola que rompeu a concha", "Um estudo em Charlotte", "The deal", "De repente nos dois", "Casei e agora?", "Enraizados", "Ninho de fogo", "The girl from everywhere", "A biblioteca invisível", "Arsen", "Jane Austen", "Nossa música", "Uma princesinha no país das maravilhas", "Não quero ser como você", "Fique comigo", "Filhos de sangue e ossos", "Lendário", "Quem teme a morte", "Binti", "Morro dos ventos uivantes ", "Um favorzinho do vizinho", "Um verão na Itália", "Avyssos", "Ao seu lado", "Nevernight ", "Ascensão das trevas"];
var leitura = document.getElementById('res')
function sortear(){
    const randomIndex = Math.floor(Math.random() * livros.length);
    const randomElement = livros[randomIndex];
    leitura.innerHTML = `Sua próxima leitura será: ${randomElement}`
    
    
    
}
