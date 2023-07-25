var cuentas =[  
    { nombre: "Tomas", saldo: 200, password:"123" },
    { nombre: "Liliana", saldo: 290, password:"456" },
    { nombre: "Armando", saldo: 67, password:"789" }
];

document.querySelector("#persona").addEventListener("change",leerPersona)

function leerPersona(){
    let indice = parseInt(document.querySelector("#persona").value);

    console.log("Hola! "+indice);
}

