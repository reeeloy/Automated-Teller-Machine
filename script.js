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
  var selectCuentaDiv = document.getElementById("selectCuentaDiv");
  var ingresarBtn = document.getElementById("ingresarBtn");
  var consultarSaldoBtn = document.getElementById("consultarSaldoBtn");
  var passwordDiv = document.getElementById("passwordDiv");
  var saludoDiv = document.getElementById("saludo");
  var cerrarSesionBtn = document.getElementById("cerrarSesionBtn");
  var bienvenidaDiv = document.getElementById("bienvenidaDiv");
  var saldoDisponibleDiv = document.getElementById("saldoDisponible"); 
  

  cuentasSelect.addEventListener("change", reiniciarSesion);
  ingresarBtn.addEventListener("click", ingresar);
  cerrarSesionBtn.addEventListener("click", cerrarSesion);
  consultarSaldoBtn.addEventListener("click", consultarSaldo);

  function reiniciarSesion() {
    selectedAccount = null;
    passwordInput.value = "";
    opcionesDiv.style.display = "none";
    resultadoDiv.innerHTML = "";
    consultarSaldoBtn.style.display = "none";
    passwordDiv.style.display = "block";
    saludoDiv.style.display = "none";
    selectCuentaDiv.style.display = "block";
    cerrarSesionBtn.style.display = "none";
  }

  function ingresar(event) {
    event.preventDefault();
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
      saludoDiv.innerHTML = "¡Hola! " + cuentas[selectedOption].nombre;
      saludoDiv.style.display = "block";
      selectCuentaDiv.style.display = "none";
      cerrarSesionBtn.style.display = "block";
      bienvenidaDiv.style.display = "none";
      saldoDisponibleDiv.style.display = "none";
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
      passwordInput.value = "";
      opcionesDiv.style.display = "none";
      consultarSaldoBtn.style.display = "none";
      passwordDiv.style.display = "block";
      saludoDiv.style.display = "none";
      selectCuentaDiv.style.display = "block";
      cerrarSesionBtn.style.display = "none";
      saldoDisponibleDiv.style.display = "none";
    }
  }

  function cerrarSesion() {
    reiniciarSesion();
    bienvenidaDiv.style.display = "block"; // Mostrar el mensaje de bienvenida al cerrar sesión
    saldoDisponibleDiv.style.display = "none"; // Ocultar el saldo disponible al cerrar sesión
  }

  function consultarSaldo() {
    if (!selectedAccount) {
      alert("Por favor, selecciona una cuenta de inicia sesión.");
      return;
    }

    saldoDisponibleDiv.innerHTML = "Tu saldo disponible: $" + selectedAccount.saldo;
    saldoDisponibleDiv.style.display = "block"; 
    saldoDisponibleDiv.style.fontSize = "40px";
    saldoDisponibleDiv.style.color = "rgba(27, 27, 141, 0.87)";
  }

  var ingresarMontoBtn = document.getElementById("ingresarMontoBtn");
  ingresarMontoBtn.addEventListener("click", ingresarMonto);

  function ingresarMonto() {
    if (!selectedAccount) {
      alert("Por favor, selecciona una cuenta e inicia sesión.");
      return;
    }
  
    var montoIngresado = prompt("Ingrese el monto a ingresar:");
  
    // Validar si el valor ingresado es un número
    if (!isNumeric(montoIngresado)) {
      alert("Solo se aceptan números.");
      return;
    }
  
    montoIngresado = parseInt(montoIngresado);
  
    if (montoIngresado <= 0) {
      alert("Ingresa un monto válido mayor a cero.");
    } else {
      selectedAccount.saldo += montoIngresado;
      resultadoDiv.innerHTML = "Monto ingresado: $" + montoIngresado + "<br> Nuevo saldo: $" + selectedAccount.saldo;
      consultarSaldo(selectedAccount.saldo); // Actualizar el mensaje de "Saldo disponible:" en tiempo real
    }
  }
  
  // Función para validar si el valor es un número
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  // Función para validar si el valor es un número
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  function retirarMonto() {
    if (!selectedAccount) {
      alert("Por favor, selecciona una cuenta e inicia sesión.");
      return;
    }
  
    var montoRetirar = prompt("Ingrese el monto a retirar:");
  
    // Validar si el valor ingresado es un número
    if (!isNumeric(montoRetirar)) {
      alert("Solo se aceptan números.");
      return;
    }
  
    montoRetirar = parseInt(montoRetirar);
  
    if (montoRetirar <= 0) {
      alert("Ingresa un monto válido mayor a cero.");
      return;
    }
  
    if (montoRetirar > selectedAccount.saldo) {
      alert("No tienes suficiente saldo para retirar esa cantidad.");
      return;
    }
  
    if (selectedAccount.saldo - montoRetirar < 0) {
      alert("No puedes retirar esa cantidad, debe haber al menos $10 en la cuenta.");
      return;
    }
  
    selectedAccount.saldo -= montoRetirar;
    resultadoDiv.innerHTML = "Monto retirado: $" + montoRetirar + "<br> Nuevo saldo: $" + selectedAccount.saldo;
    consultarSaldo(selectedAccount.saldo); // Actualizar el mensaje de "Saldo disponible:" en tiempo real
  }
  
  // Resto del código permanece igual
  
  // Asignar evento click al botón "Retirar Monto"
  var retirarMontoBtn = document.getElementById("retirarMontoBtn");
  retirarMontoBtn.addEventListener("click", retirarMonto);
});