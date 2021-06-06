let num = [5,8,2,3]
num [1]= 7
num.push(9)
console.log(num)
console.log(`o primeiro elemeto é ${num[0]}`)
console.log(`em ordem ${num.sort()}`)
console.log(`o primeiro elemeto em ordem é ${num[0]}`)
console.log(`o vetor tem ${num.length} posições`)
let pos = num.indexOf(9)
if ( pos == -1 ){
    console.log(`Esta valor não existe`)
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}



/*let valores = [0, 1, 7, 4, 2, 9]
for(let pos=0;pos<valores.length;pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/


/*let num = [5, 1, 7, 4, 2, 9]
num.sort()
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(`Em qual posição esta o valor 5 ... posição: ${num.indexOf(5)}`)
console.log(`Em qual posição esta o valor 3 ... posição: ${num.indexOf(3)}`)*/

