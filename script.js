const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
// Foi criado uma const para pegar o botao dentro do header
button.addEventListener('click', add)
// adicionamos ao button uma fução (.addEventListener) que "ouvi" o evento.
// dentro dos parenteses "()" informamos qual evento ele ficara ouvindo.
// evento sera o 'click'/ clique, sera executado.
// ainda detro do () apos a virgula adicionamos uma fução que sera executada apos ouvir o 'click'Exemp:(oque esta sendo ouvido, função que sera executada).
// obs: a função 'add' deve ser criada !
form.addEventListener("change", save)
// evento sera o 'change' / alteração, sera executado.
// obs: a função 'change' deve ser criada !

// 👇 Logica de programação:
function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5) // 1. adicona o dia. 
  const dayExists = nlwSetup.dayExists(today) // 2. verificar se o dia ja existe.

  if (dayExists) { // 3. se nao existir pula a função if.
    alert('Dia já incluso ❌') // 3.1 informa que o dia ja existe.
    return // 3.2 para de roda o programa.
  }

  alert('Adicionado com sucesso ✅') // 4. da o alerta que sera adicionado.
  nlwSetup.addDay(today) // 5. adicona o dia.
} //criamos a função "add" que sera executado no .addEventListener apos o 'click'
function save() {
  localStorage.setItem('NLWSetup@habits@jt', JSON.stringify(nlwSetup.data))
}

// const data = {
//  run: ["01-01", "01-02", "01-06", "01-07", "01-08",],
//  water: ["01-03"],
//  food: ["01-02"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits@jt")) || {}
nlwSetup.setData(data)
nlwSetup.load()