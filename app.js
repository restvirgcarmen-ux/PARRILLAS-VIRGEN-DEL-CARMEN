// Base de datos local simulada para interactividad fluida
let mesas = [
    { id: 1, nombre: "MESA 01", estado: "libre", total: 0, tiempo: "", mozo: "" },
    { id: 2, nombre: "MESA 02", estado: "ocupada-verde", total: 72.00, tiempo: "02h 14m", mozo: "JOSE" },
    { id: 3, nombre: "MESA 03", estado: "libre", total: 0, tiempo: "", mozo: "" },
    { id: 4, nombre: "MESA 04", estado: "ocupada-verde", total: 97.00, tiempo: "02h 48m", mozo: "JOSE" },
    { id: 5, nombre: "MESA 05", estado: "ocupada-azul", total: 65.00, tiempo: "00h 33m", mozo: "JOSE" }
];

let mesaSeleccionada = null;

// Ejecutar al cargar la interfaz
document.addEventListener("DOMContentLoaded", () => {
    renderizarMesas();
});

// Renderizado dinámico de las mesas en su contenedor
function renderizarMesas() {
    const contenedor = document.getElementById("zone-content-principal");
    contenedor.innerHTML = "";

    mesas.forEach(mesa => {
        const div = document.createElement("div");
        div.className = `mesa-card ${mesa.estado === 'libre' ? '' : mesa.estado}`;
        
        if (mesa.estado === 'libre') {
            div.innerHTML = `<div>🪑</div><strong>${mesa.nombre}</strong>`;
            div.onclick = () => abrirModalApertura(mesa.id);
        } else {
            div.innerHTML = `
                <strong>${mesa.nombre}</strong>
                <div class="mesa-meta">💵 S/ ${mesa.total.toFixed(2)}</div>
                <div class="mesa-meta">🕒 ${mesa.tiempo}</div>
                <div class="mesa-meta">👤 ${mesa.mozo}</div>
            `;
            div.onclick = () => irAPuntoDeVenta(mesa.id);
        }
        contenedor.appendChild(div);
    });
}

// Control del Acordeón de Zonas
function toggleZone(zoneId) {
    const content = document.getElementById(`zone-content-${zoneId}`);
    content.classList.toggle("hidden");
}

// Controladores del Modal de Apertura
function abrirModalApertura(id) {
    mesaSeleccionada = id;
    document.getElementById("modal-mesa-id").innerText = String(id).padStart(2, '0');
    document.getElementById("input-cliente").value = "";
    document.getElementById("input-personas").value = 1;
    document.getElementById("modal-apertura").classList.remove("hidden");
}

function cerrarModal() {
    document.getElementById("modal-apertura").classList.add("hidden");
}

function updatePersonas(valor) {
    const input = document.getElementById("input-personas");
    let actual = parseInt(input.value) + valor;
    if (actual < 1) actual = 1;
    input.value = actual;
}

function confirmarApertura() {
    const mesa = mesas.find(m => m.id === mesaSeleccionada);
    if (mesa) {
        mesa.estado = "ocupada-verde";
        mesa.total = 0.00;
        mesa.tiempo = "00h 01m";
        mesa.mozo = "GERARDO";
        
        cerrarModal();
        renderizarMesas();
        irAPuntoDeVenta(mesa.id);
    }
}

// Navegación de Vistas (Planos vs Punto de Venta)
function irAPuntoDeVenta(idMesa) {
    mesaSeleccionada = idMesa;
    document.getElementById("pos-mesa-num").innerText = String(idMesa).padStart(2, '0');
    document.getElementById("vista-mesas").add("hidden"); // Ocultar Dashboard
    document.getElementById("vista-pos").classList.remove("hidden"); // Mostrar POS
}

function volverAMesas() {
    document.getElementById("vista-pos").classList.add("hidden");
    document.getElementById("vista-mesas").classList.remove("hidden");
}
