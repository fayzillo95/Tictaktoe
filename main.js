
let winner = false
for(let section of sections.children){
    let index;
    section.addEventListener('click',(event) =>{
        
        let index = parseInt(section.getAttribute('data-cell-index'))
        if(sum>=9 || winner){
            return
        }
        
        if(res[index]== 0){
            res[index] +=1
            user_res+=`${index+1}`
            user_res = user_res.split('').sort().join('')
            section.innerHTML = user


            if(res_index.length>0){

                res_index.splice(res_index.indexOf(index),1)
                index = res_index[Math.floor(Math.random() * res_index.length)]
                sum++
                winner = testWin()

                if(typeof winner == 'string'){
                    h2.innerHTML = `Winner ${winner}`
                    return
                }
                compSeleter(index)
                winner = testWin()
                if(typeof winner == 'string'){
                    h2.innerHTML = `Winner ${winner}`
                    return
                }
            }
        }else{
            alert('Tanlangan')
        }
        console.log(res);
        if(sum>=9){
            if(typeof winner == 'string'){
                h2.innerHTML = `Winner ${winner}`
                return
            }else{
                h2.innerHTML = 'DRAAW !'
            }
            return
        }
    })
}
function compSeleter(index) {


    // for(let chars of test){
    //     let end_num = parseInt(chars.at(-1))
    //     if(comp_res.includes(chars.slice(0,2)) && res[end_num-1] == 0){
    //          index = end_num-1               
    //     }
    //     if(user_res.includes(chars.slice(0,2)) && res[end_num-1] == 0){
    //          index = end_num-1               
    //     }
    // }
    // console.log(index,res_index);
    
    if(index < 9){
        sum++
        res_index.splice(res_index.indexOf(index),1)
            sections.children[index].innerHTML = comp
            res[index]+=1
            comp_res+=`${index+1}`
            comp_res = comp_res.split('').sort().join('')
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