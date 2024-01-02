function HTMLElement(className, id) {
  console.log("---call HTMLElement ---", this);
  this.className = className;
  this.id = id;
}

HTMLElement.prototype.render = function () {
  console.log("Tag rendered from HTMLElement.prototype", this);
};

HTMLElement.prototype.rotate = function () {
  console.log("Common rotate", this);
};

const mySuper = (context, parentCnstr, args) => {
  parentCnstr.apply(context, args);
};

function IMGElement(src, ...args) {
  mySuper(this, HTMLElement, args);
  this.src = src;
}

IMGElement.prototype = Object.create(HTMLElement.prototype);

IMGElement.prototype.showPicture = function () {
  console.log("show picture", this.src);
};

function AnchorElement(href, className, id, flag = false) {
  mySuper(this, HTMLElement, [className, id]); // ==>  HTMLElement.apply(this, args);
  this.href = href;

  if (flag) {
    this.redirect = function () {
      console.log("---special redirect---");
    };
  }
}

// AnchorElement.prototype.__proto__ = HTMLElement.prototype;
AnchorElement.prototype = Object.create(HTMLElement.prototype);

AnchorElement.prototype.redirect = function () {
  console.log("rendireting....", this.href);
};

AnchorElement.prototype.rotate = function () {
  console.log("--- special for Anhors-----");
};

const link = new AnchorElement(
  "https://rogaTakopita.com",
  "link-className",
  "link-id"
);
const link2 = new AnchorElement("https://frizbiz.com", "link", "link", true);

const img = new IMGElement("./assets/img/picture.jpg", "picture", "logo");

console.log(link, "link");
console.log(link.hasOwnProperty);


console.log(HTMLElement.prototype.__proto__, "HTMLElement.prototype");
console.log(Object.prototype, "Object.prototype");

console.log(HTMLElement.prototype.__proto__ === Object.prototype);

//--------------------------

function HTMLElementInput(type, value, className, id) {

  HTMLElement.call(this, className, id);

  this.type = type;
  this.value = value;
}

HTMLElementInput.prototype = Object.create(HTMLElement.prototype);
HTMLElementInput.prototype.constructor = HTMLElementInput;

HTMLElementInput.prototype.render = function () {
  console.log(`Rendering input with type: ${this.type}, value: ${this.value}`);
};

HTMLElementInput.prototype.rotate = function () {
  console.log("Rotating input...");
};

const inputElement = new HTMLElementInput("text", "Hello, World!", "input-class", "input-id");

inputElement.render();
inputElement.rotate();