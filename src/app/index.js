 
function panis (name){
    
    this.name = name,
    this.greet = function(){
        console.log(`Hello ${this.name}`)
    }
}

const arbell = new panis('Lopit');
arbell.greet();
