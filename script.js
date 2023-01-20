const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert('Dia já incluso')
        return
    }
    
    nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  // localStorage.setItem(nomeDaChave, dadoEmString) = guarda informações no local ao adicionar um item | JSON.stringfy = transforma em string
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
// JSON.parse(localStorage.getItem("nomeDaChaveAPegar")) = pega informações do local guardadas anteriormente | JSON.parse = transforma string em objeto


// dias marcados manualmente
// const data = {
//   py: ["01-20", "01-21", "01-22", "01-23", "01-24", "01-25"],
//   html: ["01-20", "01-21", "01-22", "01-23"],
//   css: ["01-20", "01-21", "01-22", "01-23"],
//   js: ["01-20", "01-21", "01-22", "01-23"],
// }

nlwSetup.setData(data)
nlwSetup.load()