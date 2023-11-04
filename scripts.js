// definir valor del ticket
const ticket = 200;

// definir los descuentos

let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

// tomar elementos

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const cantidad = document.getElementById('cantidad');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago(){
    let total = cantidad.value * ticket;
    // condicionar por descuento

    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        
        default:
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}

btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});