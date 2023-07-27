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
  var cuentasSelect = document.getElementById("cuentasSelect");
  var ingresarBtn = document.getElementById("ingresarBtn");
  var consultarSaldoBtn = document.getElementById("consultarSaldoBtn");
  var passwordDiv = document.getElementById("passwordDiv");
  var saludoDiv = document.getElementById("saludo");

  cuentasSelect.addEventListener("change", reiniciarSesion);
  ingresarBtn.addEventListener("click", ingresar);

  function reiniciarSesion() {
    selectedAccount = null;
    passwordInput.value = "";
    opcionesDiv.style.display = "none";
    resultadoDiv.innerHTML = "";
    consultarSaldoBtn.style.display = "none";
    passwordDiv.style.display = "block";
    saludoDiv.style.display = "none";
  }

  function ingresar(event) {
    event.preventDefault(); // Cancelar el envío del formulario al hacer clic en el botón "Ingresar"
    var selectedOption = cuentasSelect.value;
    var password = passwordInput.value;

    if (password.trim() === "" && passwordDiv.style.display === "block") {
      alert("Por favor, ingresa tu contraseña.");
      return;
    }

    if (cuentas[selectedOption].password === password) {
      selectedAccount = cuentas[selectedOption];
      passwordInput.value = "";
      opcionesDiv.style.display = "block";
      consultarSaldoBtn.style.display = "block";
      passwordDiv.style.display = "none";
      mostrarSaludo(cuentas[selectedOption].nombre); // Mostrar el mensaje de saludo
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
      passwordInput.value = "";
      opcionesDiv.style.display = "none";
      consultarSaldoBtn.style.display = "none";
      passwordDiv.style.display = "block";
      saludoDiv.style.display = "none";
    }
  }

  function mostrarSaludo(nombreCuenta) {
    saludoDiv.innerText = "¡Hola! " + nombreCuenta;
    saludoDiv.style.display = "block";
  }


  function consultarSaldo() {
    if (!selectedAccount) {
      alert("Por favor, selecciona una cuenta e inicia sesión.");
      return;
    }

    resultadoDiv.innerHTML = "<p style='font-size: 30px;'>Tu saldo disponible: $" + selectedAccount.saldo + "</p>";
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
