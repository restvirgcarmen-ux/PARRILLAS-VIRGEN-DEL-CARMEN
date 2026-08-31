/* =====================================================
   PARRILLAS VIRGEN DEL CARMEN
   Sistema de gestión
   ===================================================== */


/* ================= DATOS INICIALES ================= */

const mesas = [
    {
        id: 1,
        nombre: "Mesa 01",
        estado: "libre",
        pedido: null
    },
    {
        id: 2,
        nombre: "Mesa 02",
        estado: "libre",
        pedido: null
    },
    {
        id: 3,
        nombre: "Mesa 03",
        estado: "ocupada",
        pedido: null
    },
    {
        id: 4,
        nombre: "Mesa 04",
        estado: "libre",
        pedido: null
    },
    {
        id: 5,
        nombre: "Mesa 05",
        estado: "ocupada",
        pedido: null
    },
    {
        id: 6,
        nombre: "Mesa 06",
        estado: "libre",
        pedido: null
    }
];


let mesaSeleccionada = null;


/* ================= ELEMENTOS ================= */

const modal = document.getElementById("mesa-modal");

const modalMesaTitle =
    document.getElementById("modal-mesa-title");

const clienteInput =
    document.getElementById("cliente");

const personasSelect =
    document.getElementById("personas");

const closeModal =
    document.getElementById("close-modal");

const saveOrder =
    document.getElementById("save-order");

const pageTitle =
    document.getElementById("page-title");


/* ================= NAVEGACIÓN ================= */

document.querySelectorAll(".menu-item").forEach(button => {

    button.addEventListener("click", () => {

        const sectionId =
            button.dataset.section;

        cambiarSeccion(sectionId);

    });

});


function cambiarSeccion(sectionId) {

    document.querySelectorAll(".section").forEach(section => {

        section.classList.remove("active");

    });


    const section =
        document.getElementById(sectionId);

    if (section) {

        section.classList.add("active");

    }


    document.querySelectorAll(".menu-item").forEach(button => {

        button.classList.remove("active");

        if (button.dataset.section === sectionId) {

            button.classList.add("active");

        }

    });


    const nombres = {

        inicio: "Inicio",

        mesas: "Mesas",

        pedidos: "Pedidos",

        barra: "Barra",

        cocina: "Cocina",

        caja: "Caja",

        ventas: "Ventas",

        ajustes: "Ajustes"

    };


    pageTitle.textContent =
        nombres[sectionId] || "Inicio";

}


/* ================= BOTÓN VER MESAS ================= */

document.getElementById("go-mesas")
    .addEventListener("click", () => {

        cambiarSeccion("mesas");

    });


/* ================= CREAR MESAS ================= */

function renderMesas() {

    const containers = [

        document.getElementById("tables-home"),

        document.getElementById("tables-page")

    ];


    containers.forEach(container => {

        if (!container) return;


        container.innerHTML = "";


        mesas.forEach(mesa => {

            const button =
                document.createElement("button");


            button.className =
                `table ${mesa.estado}`;


            button.innerHTML = `

                <span class="table-number">
                    ${mesa.nombre}
                </span>

                <span class="table-status">
                    ${obtenerEstado(mesa.estado)}
                </span>

            `;


            button.addEventListener("click", () => {

                abrirMesa(mesa.id);

            });


            container.appendChild(button);

        });

    });


    actualizarDashboard();

}


/* ================= ESTADOS ================= */

function obtenerEstado(estado) {

    if (estado === "ocupada") {

        return "Ocupada";

    }


    if (estado === "reservada") {

        return "Reservada";

    }


    return "Libre";

}


/* ================= ABRIR MESA ================= */

function abrirMesa(id) {

    mesaSeleccionada =
        mesas.find(mesa => mesa.id === id);


    if (!mesaSeleccionada) return;


    modalMesaTitle.textContent =
        mesaSeleccionada.nombre;


    clienteInput.value = "";


    personasSelect.value = "1";


    modal.classList.add("show");

}


/* ================= CERRAR MODAL ================= */

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/* ================= ABRIR PEDIDO ================= */

saveOrder.addEventListener("click", () => {

    if (!mesaSeleccionada) return;


    mesaSeleccionada.estado =
        "ocupada";


    mesaSeleccionada.pedido = {

        cliente:
            clienteInput.value.trim() ||
            "Cliente",

        personas:
            Number(personasSelect.value),

        productos: [],

        total: 0,

        estado: "abierto"

    };


    modal.classList.remove("show");


    renderMesas();


    actualizarPedidos();


    cambiarSeccion("pedidos");

});


/* ================= PEDIDOS ================= */

function actualizarPedidos() {

    const container =
        document.getElementById("orders-container");


    const pedidos =
        mesas.filter(mesa =>
            mesa.pedido &&
            mesa.pedido.estado === "abierto"
        );


    if (pedidos.length === 0) {

        container.className =
            "empty-state";


        container.innerHTML = `

            <div>🧾</div>

            <h3>No hay pedidos activos</h3>

            <p>
                Los pedidos aparecerán aquí
                cuando abras una mesa.
            </p>

        `;


        return;

    }


    container.className =
        "orders-list";


    container.innerHTML = "";


    pedidos.forEach(mesa => {

        const card =
            document.createElement("div");


        card.className =
            "order-card";


        card.innerHTML = `

            <h3>${mesa.nombre}</h3>

            <p>
                Cliente:
                ${mesa.pedido.cliente}
            </p>

            <p>
                Personas:
                ${mesa.pedido.personas}
            </p>

            <strong>
                Total: S/ ${mesa.pedido.total.toFixed(2)}
            </strong>

        `;


        container.appendChild(card);

    });

}


/* ================= DASHBOARD ================= */

function actualizarDashboard() {

    const ocupadas =
        mesas.filter(mesa =>
            mesa.estado === "ocupada"
        ).length;


    const pedidos =
        mesas.filter(mesa =>
            mesa.pedido &&
            mesa.pedido.estado === "abierto"
        ).length;


    document.getElementById(
        "total-mesas"
    ).textContent = mesas.length;


    document.getElementById(
        "mesas-ocupadas"
    ).textContent = ocupadas;


    document.getElementById(
        "pedidos-activos"
    ).textContent = pedidos;

}


/* ================= INICIO ================= */

renderMesas();

actualizarPedidos();

actualizarDashboard();
