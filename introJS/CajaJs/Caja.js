+
// MÓDULO CAJA

// Lista de productos disponibles en la cafetería
let productos = [
    { id: 1, nombre: "Espresso", precio: 35 },
    { id: 2, nombre: "Capuchino", precio: 45 },
    { id: 3, nombre: "Latte", precio: 50 },
    { id: 4, nombre: "Americano", precio: 30 },
    { id: 5, nombre: "Mocha", precio: 55 },
    { id: 6, nombre: "Cheesecake", precio: 45 },
    { id: 7, nombre: "Brownie", precio: 35 },
    { id: 8, nombre: "Galleta", precio: 25 },
    { id: 9, nombre: "Pastel de chocolate", precio: 50 },
    { id: 10, nombre: "Croissant", precio: 40 }
];

// Productos que el cliente va agregando antes de pagar
let carrito = [];

// Pedidos ya confirmados y enviados a cocina
let pedidos = [];

// Valores de la cuenta que se calculan a partir del carrito
let subtotal = 0;
let iva = 0;
let total = 0;
const TASA_IVA = 0.16; // IVA del 16%, tasa usada en México


// CAJA: administración del menú


// Muestra en pantalla la tabla con todos los productos
function listarProductos() {
    const tabla = document.getElementById("tablaProductos");
    if (!tabla) return;

    tabla.innerHTML = "";

    productos.forEach(({ id, nombre, precio }) => {
        tabla.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${nombre}</td>
                <td>$${precio.toFixed(2)}</td>
                <td>
                    <button onclick="eliminarProducto(${id})" class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

// Agrega un nuevo producto al menú
function agregarProducto() {
    const id = Number(document.getElementById("id").value);
    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);

    if (!id || !nombre || precio <= 0) {
        alert("Completa todos los campos.");
        return;
    }

    if (productos.some(producto => producto.id === id)) {
        alert("Ya existe un producto con ese ID.");
        return;
    }

    productos.push({ id, nombre, precio });

    limpiarFormulario();
    listarProductos();
}

// Modifica el nombre y/o precio de un producto existente
function editarProducto() {
    const id = Number(document.getElementById("id").value);
    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        alert("No existe un producto con ese ID.");
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);

    if (nombre) producto.nombre = nombre;
    if (precio > 0) producto.precio = precio;

    limpiarFormulario();
    listarProductos();

    alert("Producto editado correctamente.");
}

// Elimina un producto del menú y, si estaba en el carrito, también de ahí
function eliminarProducto(id) {
    productos = productos.filter(producto => producto.id !== id);
    carrito = carrito.filter(producto => producto.id !== id);

    calcularTotal();
    listarProductos();
}

// Limpia los campos del formulario de producto
function limpiarFormulario() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
}



// CAJA: cálculo de la cuenta
// A partir de lo que hay en el carrito, calcula subtotal, IVA y total
function calcularTotal() {
    subtotal = carrito.reduce((acumulado, { precio, cantidad }) => {
        return acumulado + (precio * cantidad);
    }, 0);

    iva = subtotal * TASA_IVA;
    total = subtotal + iva;

    const elSubtotal = document.getElementById("subtotal");
    const elIva = document.getElementById("iva");
    const elTotal = document.getElementById("total");

    if (elSubtotal) elSubtotal.textContent = subtotal.toFixed(2);
    if (elIva) elIva.textContent = iva.toFixed(2);
    if (elTotal) elTotal.textContent = total.toFixed(2);
}

// Muestra en pantalla todos los pedidos y su estado actual
function listarPedidos() {
    const lista = document.getElementById("listaPedidos");
    if (!lista) return;

    lista.innerHTML = "";

    if (pedidos.length === 0) {
        lista.innerHTML = `<div class="mensaje">No hay pedidos realizados.</div>`;
        return;
    }

    pedidos.forEach(({ numero, productos, subtotal, iva, total, estado }) => {
        let itemsHTML = productos.map(({ nombre, cantidad, precio }) =>
            `<p>${nombre} x${cantidad} - $${(precio * cantidad).toFixed(2)}</p>`
        ).join('');

        lista.innerHTML += `
            <div class="pedido-card">
                <h3>Pedido #${numero}</h3>
                ${itemsHTML}
                <p>Subtotal: $${subtotal.toFixed(2)}</p>
                <p>IVA (16%): $${iva.toFixed(2)}</p>
                <p><strong>Total: $${total.toFixed(2)}</strong></p>
                <div class="estado-cocina"><strong>Estado:</strong> ${estado ?? "Sin estado"}</div>
            </div>
        `;
    });
}



// CAJA: reportes en consola
// Imprime el menú completo en la consola
function consultarProductos() {
    console.log("----- MENÚ DE COFFEE CODE -----");
    productos.forEach(({ id, nombre, precio }) => {
        console.log(`${id}. ${nombre} - $${precio.toFixed(2)}`);
    });
}

// Imprime todos los pedidos con su desglose en la consola
function listarPedidosConsola() {
    console.log("----- PEDIDOS -----");
    pedidos.forEach(({ numero, productos, subtotal, iva, total }) => {
        console.log(`Pedido #${numero}`);
        productos.forEach(({ nombre, cantidad, precio }) => {
            console.log(`${nombre} x${cantidad} - $${(precio * cantidad).toFixed(2)}`);
        });
        console.log(`Subtotal: $${subtotal.toFixed(2)}`);
        console.log(`IVA: $${iva.toFixed(2)}`);
        console.log(`Total: $${total.toFixed(2)}`);
    });
}

// Suma el total de todos los pedidos realizados
function calcularIngresosTotales() {
    const ingresos = pedidos.reduce((acumulado, { total }) => acumulado + total, 0);
    console.log(`Ingresos totales: $${ingresos.toFixed(2)}`);
    return ingresos;
}

// Cuenta cuántas unidades de productos se han vendido en total
function contarProductosVendidos() {
    const totalProductos = pedidos.reduce((acumulado, { productos }) => {
        const cantidadPedido = productos.reduce(
            (subtotalCantidad, { cantidad }) => subtotalCantidad + cantidad,
            0
        );
        return acumulado + cantidadPedido;
    }, 0);

    console.log(`Productos vendidos en total: ${totalProductos}`);
    return totalProductos;
}



 //CONEXIÓN CON COCINA (CALLBACKS)
 /*Un callback es una función que se pasa como parámetro a otra función,
 para que esta última la "llame de vuelta" cuando termine su trabajo.
 Caja le entrega a Cocina dos funciones (una para "listo" y otra para
 "cancelado"); Cocina, cuando su Promise se resuelve o falla, ejecuta
la que corresponda. Así es como Caja se entera del resultado. */


// Se ejecuta cuando cocina confirma que el pedido está listo
function onPedidoListo(numPedido, mensaje) {
    const pedido = pedidos.find(p => p.numero === numPedido);
    if (pedido) pedido.estado = "Preparado y listo para entregar";

    mostrarNotificacionCaja("listo", numPedido, mensaje);
    listarPedidos();
    alert(mensaje);
}

// Se ejecuta cuando cocina informa que el pedido no se pudo completar
function onPedidoCancelado(numPedido, mensaje) {
    const pedido = pedidos.find(p => p.numero === numPedido);
    if (pedido) pedido.estado = `Notificación en Caja: ${mensaje}`;

    mostrarNotificacionCaja("cancelado", numPedido, mensaje);
    listarPedidos();
    alert(`[AVISO A CAJA]\n${mensaje}`);
}

// Muestra en pantalla el historial de notificaciones que llegan a Caja
function mostrarNotificacionCaja(tipo, numPedido, mensaje) {
    const contenedor = document.getElementById("notificacionesCaja");
    if (!contenedor) return;

    const clase = tipo === "listo" ? "notificacion-exito" : "notificacion-error";

    contenedor.innerHTML += `
        <div class="${clase}">
            <strong>Pedido #${numPedido}:</strong> ${mensaje}
        </div>
    `;
}

/* Confirma el pedido, lo guarda y lo envía a cocina para su preparación.
 procesarPedidoEnCocina() está definida en el archivo de Cocina; aquí
 solo le pasamos los callbacks que Caja quiere que se ejecuten. */
function hacerPedido() {
    if (carrito.length === 0) {
        alert("Agrega productos antes de realizar el pedido.");
        return;
    }

    const numPedido = pedidos.length + 1;
    const nuevoPedido = {
        numero: numPedido,
        productos: [...carrito],
        subtotal,
        iva,
        total,
        estado: "Enviado a cocina..."
    };

    pedidos.push(nuevoPedido);

    carrito = [];
    subtotal = 0;
    iva = 0;
    total = 0;

    calcularTotal();
    listarPedidos();

    /* Conexión con cocina: le pasamos qué hacer cuando el pedido
     esté listo, y qué hacer si se cancela */
    procesarPedidoEnCocina(numPedido, onPedidoListo, onPedidoCancelado);
}



// Carga inicial al abrir la página

document.addEventListener("DOMContentLoaded", function () {
    listarProductos();
    listarPedidos();
});