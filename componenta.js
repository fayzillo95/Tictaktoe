let res = [0,0,0,0,0,0,0,0,0]
let res_index = [0,1,2,3,4,5,6,7,8]
let user_res = ''
let comp_res = ''
let test = ['123','456','789','147','258','369','159','357']

const sections = document.getElementsByClassName('game--container')[0]
const status = document.getElementsByClassName('game--status')[0]
const restarter = document.getElementsByClassName('game--restart')[0]
const h2 = document.getElementsByClassName('game--status')[0]
let user = 'x'
let comp = 'o'
let sum = 0
let turn = false

h2.innerHTML = 'Result'

restarter.addEventListener('click',() =>{
    clearAll()
    console.log(res);
})
function clearAll() {
    sum=0
    user_res  = ''
    comp_res = ''
    winner = false
    h2.innerHTML = 'Result'
    for(let section of sections.children){
        let index = parseInt(section.getAttribute('data-cell-index'))
        res[index] = 0
        res_index[index] = index
        section.innerHTML = ''
    }
    console.log({user_res,comp_res,sum,res,res_index,winner});
}