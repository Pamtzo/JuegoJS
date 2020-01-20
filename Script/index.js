const button = document.getElementById("Boton")

const red = document.getElementById("Red")
const blue = document.getElementById("Blue")
const yellow = document.getElementById("Yellow")
const green = document.getElementById("Green")

class Juego{
    constructor(){
        this.start()
        this.genSeq()
        this.upgrade()
    }

    start(){
        button.classList.add('hide')
        this.level=1
        this.colors=[red,blue,green,yellow]
    }

    genSeq(){
        this.seq=new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }

    upgrade(){
        this.shineSeq()
        this.level += 1
    }

    shineSeq(){
        for(let i=0; i<this.level; i++){
            const color=this.colors[this.seq[i]]
            console.log(color)
            setTimeout(() => {
                this.shine(color)
            }, 1000*i);
        }
    }

    shine(color){
        color.classList.add('light')
        setTimeout(() => {
            this.shutdown(color)
        }, 350);
    }

    shutdown(color){
        color.classList.remove('light')
    }
}

function empezar(){
    window.juego=new Juego()
}
