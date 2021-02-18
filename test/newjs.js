class Options {
    constructor (height, width, background, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.background = background;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        }
        newDiv(){
            let div = document.createElement('div');
            div.style.cssText = `height: ${this.height}px;width: ${this.width}px;background: ${this.background};fontSize: ${this.fontSize}px;textAlign: ${this.textAlign}px;`;
            let body = document.querySelector('body');
            div.textContent = 'Привет';
            body.appendChild(div);
        }
    
}

let obj = new Options (100,100,'blue',10,'left');
obj.newDiv();

console.log(obj);