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
        nombre: "Combo Personal",
        categoria: "parrillas",
        precio: 35.00
    },

    {
        id: 10,
        nombre: "Combo Mediano",
        categoria: "parrillas",
        precio: 55.00
    },

    {
        id: 11,
        nombre: "Combo Familiar",
        categoria: "parrillas",
        precio: 90.00
    },

    {
        id: 12,
        nombre: "Combo Parrillero Premium",
        categoria: "parrillas",
        precio: 120.00
    },


    /* ================= ALITAS ================= */

    {
        id: 13,
        nombre: "Alitas BBQ - 6 unidades",
        categoria: "alitas",
        precio: 18.00
    },

    {
        id: 14,
        nombre: "Alitas BBQ - 12 unidades",
        categoria: "alitas",
        precio: 34.00
    },

    {
        id: 15,
        nombre: "Alitas BBQ - 18 unidades",
        categoria: "alitas",
        precio: 51.00
    },

    {
        id: 16,
        nombre: "Alitas BBQ - 24 unidades",
        categoria: "alitas",
        precio: 65.00
    },

    {
        id: 17,
        nombre: "Alitas Búfalo - 6 unidades",
        categoria: "alitas",
        precio: 18.00
    },

    {
        id: 18,
        nombre: "Alitas Búfalo - 12 unidades",
        categoria: "alitas",
        precio: 34.00
    },

    {
        id: 19,
        nombre: "Alitas Búfalo - 18 unidades",
        categoria: "alitas",
        precio: 51.00
    },

    {
        id: 20,
        nombre: "Alitas Búfalo - 24 unidades",
        categoria: "alitas",
        precio: 65.00
    },

    {
        id: 21,
        nombre: "Alitas de Maracuyá - 6 unidades",
        categoria: "alitas",
        precio: 18.00
    },

    {
        id: 22,
        nombre: "Alitas de Maracuyá - 12 unidades",
        categoria: "alitas",
        precio: 34.00
    },

    {
        id: 23,
        nombre: "Alitas de Maracuyá - 18 unidades",
        categoria: "alitas",
        precio: 51.00
    },

    {
        id: 24,
        nombre: "Alitas de Maracuyá - 24 unidades",
        categoria: "alitas",
        precio: 65.00
    },

    {
        id: 25,
        nombre: "Alitas Acevichadas - 6 unidades",
        categoria: "alitas",
        precio: 18.00
    },

    {
        id: 26,
        nombre: "Alitas Acevichadas - 12 unidades",
        categoria: "alitas",
        precio: 34.00
    },

    {
        id: 27,
        nombre: "Alitas Acevichadas - 18 unidades",
        categoria: "alitas",
        precio: 51.00
    },

    {
        id: 28,
        nombre: "Alitas Acevichadas - 24 unidades",
        categoria: "alitas",
        precio: 65.00
    },


    /* ================= HAMBURGUESAS ================= */

    {
        id: 29,
        nombre: "Hamburguesa Clásica",
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
        nombre: "Hamburguesa Hawaiana",
        categoria: "hamburguesas",
        precio: 15.00
    },

    {
        id: 33,
        nombre: "Royal Clásica",
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
        nombre: "Esperma de Pitufo",
        categoria: "tragos",
        precio: 14.00
    },

    {
        id: 43,
        nombre: "Rainbow Paradise",
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
        nombre: "Cóctel de Algarrobina",
        categoria: "tragos",
        precio: 14.00
    },

    {
        id: 47,
        nombre: "Piña Colada",
        categoria: "tragos",
        precio: 14.00
    },


    /* ================= BEBIDAS ================= */

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


    /* ================= FIN DE PRODUCTOS ================= */

];

/* =====================================================
   CARRITO TEMPORAL DEL PEDIDO
   ===================================================== */

let carritoTemporal = {};
let categoriaSeleccionada = "parrillas";


/* =====================================================
   ELEMENTOS DE LA CARTA
   ===================================================== */

const productsContainer =
    document.getElementById("products-container");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const categoryView =
    document.getElementById("category-view");

const productsView =
    document.getElementById("products-view");

const backCategories =
    document.getElementById("back-categories");

const selectedCategoryTitle =
    document.getElementById("selected-category-title");

const nombresCategorias = {
    parrillas: "Parrillas y anticuchos",
    alitas: "Alitas",
    hamburguesas: "Hamburguesas",
    tragos: "Tragos",
    bebidas: "Bebidas"
};


/* =====================================================
   CAMBIAR CATEGORÍA
   ===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        categoriaSeleccionada =
            button.dataset.category;

        mostrarProductos();

    });

});

if (backCategories) {
    backCategories.addEventListener("click", mostrarCategorias);
}

function mostrarCategorias() {
    if (categoryView) categoryView.classList.remove("hidden");
    if (productsView) productsView.classList.add("hidden");
}

function mostrarProductos() {
    if (categoryView) categoryView.classList.add("hidden");
    if (productsView) productsView.classList.remove("hidden");

    if (selectedCategoryTitle) {
        selectedCategoryTitle.textContent =
            nombresCategorias[categoriaSeleccionada] || "Productos";
    }

    renderProductos();
}


/* =====================================================
   MOSTRAR PRODUCTOS
   ===================================================== */

function renderProductos() {

    if (!productsContainer) return;

    const lista =
        productos.filter(producto =>
            producto.categoria === categoriaSeleccionada
        );

    productsContainer.innerHTML = "";

    lista.forEach(producto => {

        const cantidad =
            carritoTemporal[producto.id] || 0;

        const item =
            document.createElement("div");

        item.className = "product-item";

        item.innerHTML = `

            <div class="product-info">

                <strong>
                    ${producto.nombre}
                </strong>

                <span>
                    S/ ${producto.precio.toFixed(2)}
                </span>

            </div>

            <div class="product-controls">

                <button
                    type="button"
                    class="quantity-btn"
                    onclick="cambiarCantidad(${producto.id}, -1)">
                    −
                </button>

                <span class="quantity">
                    ${cantidad}
                </span>

                <button
                    type="button"
                    class="quantity-btn"
                    onclick="cambiarCantidad(${producto.id}, 1)">
                    +
                </button>

            </div>

        `;

        productsContainer.appendChild(item);

    });

    actualizarTotalTemporal();

}


/* =====================================================
   CAMBIAR CANTIDAD
   ===================================================== */

function cambiarCantidad(id, cambio) {

    const cantidadActual =
        carritoTemporal[id] || 0;

    const nuevaCantidad =
        cantidadActual + cambio;

    if (nuevaCantidad <= 0) {

        delete carritoTemporal[id];

    } else {

        carritoTemporal[id] =
            nuevaCantidad;

    }

    renderProductos();

}


/* =====================================================
   CALCULAR TOTAL
   ===================================================== */

function calcularTotalCarrito() {

    let total = 0;

    Object.keys(carritoTemporal).forEach(id => {

        const producto =
            productos.find(
                p => p.id === Number(id)
            );

        if (!producto) return;

        total +=
            producto.precio *
            carritoTemporal[id];

    });

    return total;

}


/* =====================================================
   ACTUALIZAR TOTAL EN EL MODAL
   ===================================================== */

function actualizarTotalTemporal() {

    const total =
        calcularTotalCarrito();

    const totalElement =
        document.querySelector(".order-total strong");

    if (totalElement) {

        totalElement.textContent =
            `S/ ${total.toFixed(2)}`;

    }

}


/* =====================================================
   INICIAR NUEVO PEDIDO
   ===================================================== */

function iniciarCarrito() {

    carritoTemporal = {};

    categoriaSeleccionada =
        "parrillas";

    categoryButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.dataset.category ===
            "parrillas"
        ) {

            button.classList.add("active");

        }

    });

    mostrarCategorias();

}

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

    iniciarCarrito();
   
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


    const productosPedido = [];


    Object.keys(carritoTemporal).forEach(id => {

        const producto =
            productos.find(
                p => p.id === Number(id)
            );

        if (!producto) return;


        const cantidad =
            carritoTemporal[id];


        productosPedido.push({

            id: producto.id,

            nombre: producto.nombre,

            precio: producto.precio,

            cantidad: cantidad,

            subtotal:
                producto.precio * cantidad

        });

    });


    const total =
        productosPedido.reduce(
            (suma, producto) =>
                suma + producto.subtotal,
            0
        );


    mesaSeleccionada.estado =
        "ocupada";


    mesaSeleccionada.pedido = {

        cliente:
            clienteInput.value.trim() ||
            "Cliente",

        personas:
            Number(personasSelect.value),

        productos:
            productosPedido,

        total:
            total,

        estado:
            "abierto"

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
