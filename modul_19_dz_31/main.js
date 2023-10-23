function SuperMath() {
    this.input = function() {
        const newX = parseFloat(prompt("Enter X:"));
        const newY = parseFloat(prompt("Enter Y:"));
        const newZnak = prompt("Enter znak (+, -, /, *, %):");

        if (isNaN(newX) || isNaN(newY) || !"+-/*%".includes(newZnak)) {
            alert("Invalid input");
            return this.input();
        }

        return new Operation(newX, newY, newZnak);
    };

    this.check = function(obj) {
        while (!obj.isValid()) {
            alert("Invalid operation");
            obj = this.input();
        }
        alert(obj.performOperation());
    };
}

function Operation(X, Y, znak) {
    this.X = X;
    this.Y = Y;
    this.znak = znak;

    this.isValid = function() {
        return "+-/*%".includes(this.znak);
    };

    this.performOperation = function() {
        switch (this.znak) {
            case '+':
                return `${this.X} + ${this.Y} = ${this.X + this.Y}`;
            case '-':
                return `${this.X} - ${this.Y} = ${this.X - this.Y}`;
            case '/':
                if (this.Y === 0) {
                    return "Division by zero is not allowed.";
                }
                return `${this.X} / ${this.Y} = ${this.X / this.Y}`;
            case '*':
                return `${this.X} * ${this.Y} = ${this.X * this.Y}`;
            case '%':
                return `${this.X} % ${this.Y} = ${this.X % this.Y}`;
        }
    };
}

const p = new SuperMath();
const obj = p.input();
p.check(obj);