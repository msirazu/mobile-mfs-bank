numberValueConverter = (num) => {
    const value = document.getElementById(num).value;
    const newValue = parseFloat(value);
    return newValue;
}

innerTextNumberConverter = (text) => {
    const textValue = document.getElementById(text).innerText;
    const newTextValue = parseFloat(textValue);
    return newTextValue;
}

getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
}

getInnerTextValue = (id) => {
    const textValue = document.getElementById(id).innerText;
    return textValue;
}