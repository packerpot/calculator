
function clearfunction() {
    document.getElementById("result").value = '';
}

function num(value) {
    document.getElementById("result").value += value;
}

function sign() {
    document.getElementById("result").value += value;
}

function equal() {
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}

function onoffmyfunction() {


}