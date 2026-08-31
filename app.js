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

/* =====================================================
   CARTA DE PRODUCTOS
   Los productos sin precio quedan en S/ 0.00
   ===================================================== */

const productos = [

    /* ================= PARRILLAS Y ANTICUCHOS ================= */

    {
        id: 1,
        nombre: "Anticuchos de corazón",
        categoria: "parrillas",
        precio: 18.00
    },
    {
        id: 2,
        nombre: "Anticuchos de mollejas",
        categoria: "parrillas",
        precio: 18.00
    },
    {
        id: 3,
        nombre: "Chuleta de res a la parrilla",
        categoria: "parrillas",
        precio: 24.00
    },
    {
        id: 4,
        nombre: "Chuleta de cerdo a la parrilla",
        categoria: "parrillas",
        precio: 24.00
    },
    {
        id: 5,
        nombre: "Costillas de cerdo BBQ",
        categoria: "parrillas",
        precio: 25.00
    },
    {
        id: 6,
        nombre: "Pechuga de pollo a la parrilla",
        categoria: "parrillas",
        precio: 22.00
    },
    {
        id: 7,
        nombre: "Pulpo anticuchero",
        categoria: "parrillas",
        precio: 30.00
    },
    {
        id: 8,
        nombre: "Langostinos anticucheros",
        categoria: "parrillas",
        precio: 25.00
    },

    /* ================= COMBOS PARRILLEROS ================= */

    {
        id: 9,
        nombre: "Combo personal",
        categoria: "parrillas",
        precio: 35.00
    },
    {
        id: 10,
        nombre: "Combo mediano",
        categoria: "parrillas",
        precio: 55.00
    },
    {
        id: 11,
        nombre: "Combo familiar",
        categoria: "parrillas",
        precio: 90.00
    },
    {
        id: 12,
        nombre: "Combo parrillero premium",
        categoria: "parrillas",
        precio: 120.00
    },

    /* ================= ALITAS ================= */

    {
        id: 13,
        nombre: "Alitas BBQ - 6 und.",
        categoria: "alitas",
        precio: 18.00
    },
    {
        id: 14,
        nombre: "Alitas BBQ - 12 und.",
        categoria: "alitas",
        precio: 34.00
    },
    {
        id: 15,
        nombre: "Alitas BBQ - 18 und.",
        categoria: "alitas",
        precio: 51.00
    },
    {
        id: 16,
        nombre: "Alitas BBQ - 24 und.",
        categoria: "alitas",
        precio: 65.00
    },

    {
        id: 17,
        nombre: "Alitas Búfalo - 6 und.",
        categoria: "alitas",
        precio: 18.00
    },
    {
        id: 18,
        nombre: "Alitas Búfalo - 12 und.",
        categoria: "alitas",
        precio: 34.00
    },
    {
        id: 19,
        nombre: "Alitas Búfalo - 18 und.",
        categoria: "alitas",
        precio: 51.00
    },
    {
        id: 20,
        nombre: "Alitas Búfalo - 24 und.",
        categoria: "alitas",
        precio: 65.00
    },

    {
        id: 21,
        nombre: "Alitas de maracuyá - 6 und.",
        categoria: "alitas",
        precio: 18.00
    },
    {
        id: 22,
        nombre: "Alitas de maracuyá - 12 und.",
        categoria: "alitas",
        precio: 34.00
    },
    {
        id: 23,
        nombre: "Alitas de maracuyá - 18 und.",
        categoria: "alitas",
        precio: 51.00
    },
    {
        id: 24,
        nombre: "Alitas de maracuyá - 24 und.",
        categoria: "alitas",
        precio: 65.00
    },

    {
        id: 25,
        nombre: "Alitas acevichadas - 6 und.",
        categoria: "alitas",
        precio: 18.00
    },
    {
        id: 26,
        nombre: "Alitas acevichadas - 12 und.",
        categoria: "alitas",
        precio: 34.00
    },
    {
        id: 27,
        nombre: "Alitas acevichadas - 18 und.",
        categoria: "alitas",
        precio: 51.00
    },
    {
        id: 28,
        nombre: "Alitas acevichadas - 24 und.",
        categoria: "alitas",
        precio: 65.00
    },

    /* ================= HAMBURGUESAS ================= */

    {
        id: 29,
        nombre: "Hamburguesa clásica",
        categoria: "hamburguesas",
        precio: 8.00
    },
    {
        id: 30,
        nombre: "Cheeseburger",
        categoria: "hamburguesas",
        precio: 15.00
    },
    {
        id: 31,
        nombre: "Hamburguesa BBQ",
        categoria: "hamburguesas",
        precio: 14.00
    },
    {
        id: 32,
        nombre: "Hamburguesa hawaiana",
        categoria: "hamburguesas",
        precio: 15.00
    },
    {
        id: 33,
        nombre: "Royal clásica",
        categoria: "hamburguesas",
        precio: 15.00
    },

    /* ================= TRAGOS ================= */

    {
        id: 34,
        nombre: "Machu Picchu",
        categoria: "tragos",
        precio: 14.00
    },
    {
        id: 35,
        nombre: "Maracuyá Sour",
        categoria: "tragos",
        precio: 14.00
    },
    {
        id: 36,
        nombre: "Pisco Sour",
        categoria: "tragos",
        precio: 14.00
    },
    {
        id: 37,
        nombre: "Mojito",
        categoria: "tragos",
        precio: 13.00
    },
    {
        id: 38,
        nombre: "Chilcano",
        categoria: "tragos",
        precio: 12.00
    },
    {
        id: 39,
        nombre: "Daiquiri",
        categoria: "tragos",
        precio: 14.00
    },
    {
        id: 40,
        nombre: "Planters Punch",
        categoria: "tragos",
        precio: 14.00
    },
    {
        id: 41,
        nombre: "Laguna Azul",
        categoria: "tragos",
        precio: 13.00
    },
    {
        id: 42,
        nombre: "Esperma de Pitufos",
        categoria: "tragos",
        precio: 12.00
    },
    {
        id: 43,
        nombre: "Rambox Paradise",
        categoria: "tragos",
        precio: 12.00
    },
    {
        id: 44,
        nombre: "Cuba Libre",
        categoria: "tragos",
        precio: 12.00
    },
    {
        id: 45,
        nombre: "Perú Libre",
        categoria: "tragos",
        precio: 12.00
    },
    {
        id: 46,
        nombre: "Júgele de Algarrobina",
        categoria: "tragos",
        precio: 14.00
    },
    {
        id: 47,
        nombre: "Piña Colada",
        categoria: "tragos",
        precio: 14.00
    },

    /* ================= BEBIDAS NATURALES ================= */

    {
        id: 48,
        nombre: "Chicha morada",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 49,
        nombre: "Maracuyá",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 50,
        nombre: "Limonada Frozen",
        categoria: "bebidas",
        precio: 0.00
    },

    /* ================= GASEOSAS ================= */

    {
        id: 51,
        nombre: "Coca Cola",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 52,
        nombre: "Inca Kola",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 53,
        nombre: "Guaraná",
        categoria: "bebidas",
        precio: 0.00
    },

    /* ================= CERVEZAS ================= */

    {
        id: 54,
        nombre: "Cristal",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 55,
        nombre: "Cusqueña Trigo",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 56,
        nombre: "Cusqueña Negra",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 57,
        nombre: "Pilsen",
        categoria: "bebidas",
        precio: 0.00
    },

    /* ================= OTROS ================= */

    {
        id: 58,
        nombre: "Agua",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 59,
        nombre: "Sporade",
        categoria: "bebidas",
        precio: 0.00
    },
    {
        id: 60,
        nombre: "Vino",
        categoria: "bebidas",
        precio: 0.00
    },

    /* ================= SALSAS EXTRA ================= */

    {
        id: 61,
        nombre: "Salsa BBQ extra",
        categoria: "alitas",
        precio: 5.00
    },
    {
        id: 62,
        nombre: "Salsa Búfalo extra",
        categoria: "alitas",
        precio: 5.00
    },
    {
        id: 63,
        nombre: "Salsa Maracuyá extra",
        categoria: "alitas",
        precio: 5.00
    },
    {
        id: 64,
        nombre: "Salsa Acevichada extra",
        categoria: "alitas",
        precio: 5.00
    },
    {
        id: 65,
        nombre: "Salsa Chimichurri extra",
        categoria: "alitas",
        precio: 5.00
    },
    {
        id: 66,
        nombre: "Salsa Huancaína extra",
        categoria: "alitas",
        precio: 5.00
    }

];

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
