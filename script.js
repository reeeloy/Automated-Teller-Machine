
    var cuentas = [
      { nombre: "Mali", saldo: 200 },
      { nombre: "Gera", saldo: 290 },
      { nombre: "Maui", saldo: 67 }
    ];

    var selectedAccount;
    var passwordInput = document.getElementById("password");
    var opcionesDiv = document.getElementById("opciones");
    var resultadoDiv = document.getElementById("resultado");

    function ingresar() {
      var selectedOption = document.getElementById("cuentasSelect").value;
      var password = passwordInput.value;

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