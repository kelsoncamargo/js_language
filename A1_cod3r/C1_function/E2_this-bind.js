function Person(){
    this.age = 0

    const self = this
    setInterval(function(){
        self.age++
        console.log(self.age)
    }/*.bind(this)a*/, 1000)
}


new Person