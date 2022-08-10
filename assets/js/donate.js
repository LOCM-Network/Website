function onSubmit() {
    amount = document.getElementById("amount")
    telco = document.getElementById("telcos")
    pin = document.getElementById("pin")
    serial = document.getElementById("serial")
    ingame = document.getElementById("ingame")
    if(ingame.value == "" || pin.value == "" || serial.value == "" ) {
        alert("Please fill all fields")
        return false
    }
}