const { returnStatement } = require("@babel/types");

class Shapes {
    constructor(color) {
        this.color = color;
    }
    setColor(newColor) { this.color = newColor }
}

class Circle extends Shapes {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="25" cy="75" r="20" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }

}

class Square extends Shapes {
    constructor(color) {
        super(color);
    }
    render(){
        return`<rect x="10" y="10" width="30" height="30" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }
}

class Triangle extends Shapes {
    constructor(color) {
        super(color);
}
render(){
    return `<polygon points="200,10 250,210 160,210" stroke="${this.color}" fill="${this.color}" stroke-width="5" />`
}
}

module.exports= {Shapes, Circle, Square, Triangle};