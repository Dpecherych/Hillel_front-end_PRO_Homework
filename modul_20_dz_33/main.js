function HTMLElementInput(tagName, className, id) {
    this.tagName = tagName;
    this.className = className;
    this.id = id;
}

HTMLElementInput.prototype.render = function () {
    console.log(`Rendered ${this.tagName} element with class ${this.className} and id ${this.id}`);
}

HTMLElementInput.prototype.rotate = function () {
    console.log(`Rotated ${this.tagName} element with class ${this.className} and id ${this.id}`);
}

HTMLElementInput.prototype.setValue = function (value) {
    this.value = value;
}

const inputElement = new HTMLElementInput("input", "text-input", "input-1");
inputElement.render();
inputElement.rotate();
inputElement.setValue("Input Value");

console.log(inputElement.value);