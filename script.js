document.addEventListener("DOMContentLoaded", function () {
    var cuentas = [
      { nombre: "Tomas", saldo: 200, password: "Tomas_123" },
      { nombre: "Liliana", saldo: 290, password: "Liliana_456" },
      { nombre: "Armando", saldo: 67, password: "Armando_789" }
    ];
  
    var selectedAccount;
    var passwordInput = document.getElementById("password");
    var opcionesDiv = document.getElementById("opciones");
    var resultadoDiv = document.getElementById("resultado");
  
    document.getElementById("ingresarBtn").addEventListener("click", ingresar);
    document.getElementById("consultarSaldoBtn").addEventListener("click", consultarSaldo);
    document.getElementById("ingresarMontoBtn").addEventListener("click", ingresarMonto);
    document.getElementById("retirarMontoBtn").addEventListener("click", retirarMonto);
  
    function ingresar() {
      var selectedOption = document.getElementById("cuentasSelect").value;
      var password = passwordInput.value;
  
      if (password.trim() === "") {
        alert("Por favor, ingresa tu contraseña.");
        return;
      }
  
      if (cuentas[selectedOption].password === password) {
        selectedAccount = cuentas[selectedOption];
        passwordInput.value = "";
        opcionesDiv.style.display = "block";
      } else {
        alert("Contraseña incorrecta. Intenta nuevamente.");
        passwordInput.value = "";
        opcionesDiv.style.display = "none";
      }
    }
  
    function consultarSaldo() {
      resultadoDiv.innerHTML = "Saldo actual: $" + selectedAccount.saldo;
    }
  
    function ingresarMonto() {
      var monto = prompt("Ingrese el monto a ingresar:");
      monto = parseInt(monto);
  
      if (!isNaN(monto)) {
        if (monto <= 0) {
          alert("El monto a ingresar debe ser mayor a cero.");
        } else {
          selectedAccount.saldo += monto;
          resultadoDiv.innerHTML = "Monto ingresado: $" + monto + "<br> Nuevo saldo: $" + selectedAccount.saldo;
        }
      } else {
        alert("Ingresa un monto válido.");
      }
    }
  
    function retirarMonto() {
      var monto = prompt("Ingrese el monto a retirar:");
      monto = parseInt(monto);
  
      if (!isNaN(monto)) {
        if (monto <= 0) {
          alert("El monto a retirar debe ser mayor a cero.");
        } else if (monto > selectedAccount.saldo) {
          alert("No tienes suficiente saldo para retirar esa cantidad.");
        } else if (selectedAccount.saldo - monto < 10) {
          alert("No puedes retirar esa cantidad, debe haber al menos $10 en la cuenta.");
        } else {
          selectedAccount.saldo -= monto;
          resultadoDiv.innerHTML = "Monto retirado: $" + monto + "<br> Nuevo saldo: $" + selectedAccount.saldo;
        }
      } else {
        alert("Ingresa un monto válido.");
      }
    }
  });
  