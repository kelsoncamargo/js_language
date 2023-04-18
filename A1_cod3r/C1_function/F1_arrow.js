let double = function(a){
    return 2 * a
}

double = (a) =>{
    return 2 * a
} 

double = a => 2 * a // Implicit return
console.log(double(Math.PI))

let helo = function(){
    return 'Olá'
}

helo = () => 'Olá'
helo = _ => 'Olá' // It has param
console.log(helo())