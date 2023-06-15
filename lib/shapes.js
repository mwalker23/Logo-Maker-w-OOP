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

    render(textColor, text) {
        const circleElement= `<circle cx="300" cy="200" r="200" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
        const textElement = `<text x="200" y="200" fill="${textColor}" font-size="100">${text}</text>`;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">${circleElement}${textElement}</svg>`;
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