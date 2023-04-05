console.log(Math.ceil(6.1))

const obj1 = {}
obj1.youName = 'Ball'
// obj1['youName'] = 'Ball 2'
console.log(obj1.youName)

function Obj(name){
    this.name = name
    this.exec = function(){
        console.log('Exec...')
    }
}


const obj2 = new Obj('Cadeira')
console.log(obj2)
obj2.exec()

const obj3 = new Obj('Mesa')
console.log(obj3)
obj3.exec()