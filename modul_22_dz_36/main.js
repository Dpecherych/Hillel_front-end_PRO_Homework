function getElementByid(id) {
    return document.getElementById(id)
};

function updateTextarea(input1, input2, input3, input4) {
    let prevInput1Value = input1.value;
    let prevInput2Value = input2.value;
    let prevInput3Value = input3.value;

    setInterval(function () {
        const currentValue1 = input1.value;
        const currentValue2 = input2.value;
        const currentValue3 = input3.value;

        if (currentValue1 !== prevInput1Value ||
            currentValue2 !== prevInput2Value ||
            currentValue3 !== prevInput3Value) {
            
            output.value = `${currentValue1}, ${currentValue2}, ${currentValue3}`;
            
            prevInput1Value = currentValue1;
            prevInput2Value = currentValue2;
            prevInput3Value = currentValue3;

            }

    }, 2000);
}

const input1 = getElementByid('input1');
const input2 = getElementByid('input2');
const input3 = getElementByid('input3');
const output = getElementByid('output');

updateTextarea(input1, input2, input3, output);


