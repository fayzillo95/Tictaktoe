let tanlov = ''
let currentT = ''
let winner = false
for(let section of sections.children){
    let index;
    section.addEventListener('click',(event) =>{
        console.log(res.includes(0))
        let index = parseInt(section.getAttribute('data-cell-index'))
        if( winner){
            h2.innerHTML = winner
            return 
        }
        
        if(res[index]== 0){
            res[index] +=1
            user_res+=`${index+1}`
            user_res = user_res.split('').sort().join('')
            section.innerHTML = user
            sum++
            winner = testWin()
            if(winner){
                h2.innerHTML = winner
                return
            }
            compSeleter()
            if(winner){
                h2.innerHTML = winner
            }
        }else{
            alert('Tanlangan')
        }
        if(!res.includes(0)){
            h2.innerHTML = (winner) ? winner : 'Draw'
        }

    })
}
function compSeleter() {
    let oldTanlov = tanlov
    let bloklandi = false

    for (let str of test) {
        let count = 0
        let emptyCell = -1

        for (let ch of str) {
            if (user_res.includes(ch)) {
                count++
            } else if (!comp_res.includes(ch)) {
                emptyCell = parseInt(ch) - 1
            }
        }

        if (count === 2 && res[emptyCell] === 0) {
            res[emptyCell] = 1
            comp_res += `${emptyCell + 1}`
            comp_res = comp_res.split('').sort().join('')
            sections.children[emptyCell].innerHTML = comp
            sum++
            winner = testWin()
            if (winner) h2.innerHTML = `Winner: ${winner}`
            return
        }
    }

    if (oldTanlov && !oldTanlov.split('').some(ch => user_res.includes(ch))) {
        for (let ch of oldTanlov) {
            let idx = parseInt(ch) - 1
            if (res[idx] === 0) {
                res[idx] = 1
                comp_res += `${idx + 1}`
                comp_res = comp_res.split('').sort().join('')
                sections.children[idx].innerHTML = comp
                sum++
                winner = testWin()
                if (winner) h2.innerHTML = `Winner: ${winner}`
                return
            }
        }
    }

    let foundLine = false
    for (let str of test) {
        if (!str.split('').some(ch => user_res.includes(ch))) {
            for (let ch of str) {
                let idx = parseInt(ch) - 1
                if (res[idx] === 0) {
                    tanlov = str
                    res[idx] = 1
                    comp_res += `${idx + 1}`
                    comp_res = comp_res.split('').sort().join('')
                    sections.children[idx].innerHTML = comp
                    sum++
                    foundLine = true
                    winner = testWin()
                    if (winner) h2.innerHTML = `Winner: ${winner}`
                    return
                }
            }
        }
    }

    if (!foundLine) {
        for (let i = 0; i < 9; i++) {
            if (res[i] === 0) {
                res[i] = 1
                comp_res += `${i + 1}`
                comp_res = comp_res.split('').sort().join('')
                sections.children[i].innerHTML = comp
                sum++
                winner = testWin()
                if (winner) h2.innerHTML = `Winner: ${winner}`
                return
            }
        }
    }
}

function testWin() {
    
    for(let str of test){
        console.log(comp_res,user_res);
        let win = 0
        let winc = 0
        for(let ch of str){
            if(user_res.includes(ch)){
                win++
            }
            if(comp_res.includes(ch)){
                winc++
            }
        }
        if(win==3){
            return 'User'
        }
        if(winc==3){
            return 'Comp '
        }

    }
    return false
}