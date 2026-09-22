// ===== PARTE DE CAJA =====

// Variables globales para el desglose de la cuenta
let subtotal = 0;
let iva = 0;
const TASA_IVA = 0.16; // 16% de IVA. Usando el 16% ya que es el que se maneja en mexico 
function listarProductos() {
    const tabla = document.getElementById("tablaProductos");

    tabla.innerHTML = "";

    // Destructuring: extraemos id, nombre y precio directamente del objeto
    productos.forEach(({ id, nombre, precio }) => {
        tabla.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${nombre}</td>
                <td>$${precio.toFixed(2)}</td>
                <td>
                    <button
                        onclick="eliminarProducto(${id})"
                        class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

function agregarProducto() {
    const id = Number(document.getElementById("id").value);
    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);

    if (!id || !nombre || precio <= 0) {
        alert("Completa todos los campos.");
        return;
    }

    const existe = productos.some(producto => producto.id === id);

    if (existe) {
        alert("Ya existe un producto con ese ID.");
        return;
    }

    const nuevoProducto = {
        id: id,
        nombre: nombre,
        precio: precio
    };

    productos.push(nuevoProducto);

    limpiarFormulario();
    listarProductos();
    cargarMenuCliente();
}

function editarProducto() {
    const id = Number(document.getElementById("id").value);
    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        alert("No existe un producto con ese ID.");
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);

    if (nombre) {
        producto.nombre = nombre;
    }

    if (precio > 0) {
        producto.precio = precio;
    }

    limpiarFormulario();
    listarProductos();
    cargarMenuCliente();

    alert("Producto editado correctamente.");
}

function eliminarProducto(id) {
    productos = productos.filter(producto => producto.id !== id);

    carrito = carrito.filter(producto => producto.id !== id);

    calcularTotal();
    mostrarCarrito();
    listarProductos();
    cargarMenuCliente();
}

function limpiarFormulario() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
}

// Calcula subtotal, IVA y total a partir del carrito, y los muestra en el HTML
function calcularTotal() {
    // 1. Subtotal: sumamos (precio * cantidad) de cada producto del carrito usando reduce()
    subtotal = carrito.reduce((acumulado, { precio, cantidad }) => {
        return acumulado + (precio * cantidad);
    }, 0);

    // 2. IVA: 16% del subtotal
    iva = subtotal * TASA_IVA;

    // 3. Total: subtotal + IVA
    total = subtotal + iva;

    // 4. Reflejamos los 3 valores en el HTML
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("iva").textContent = iva.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

function listarPedidos() {
    const lista = document.getElementById("listaPedidos");

    lista.innerHTML = "";

    if (pedidos.length === 0) {
        lista.innerHTML = `
            <div class="mensaje">
                No hay pedidos realizados.
            </div>
        `;
        return;
    }

    // Destructuring: extraemos numero, productos, subtotal, iva y total de cada pedido
    pedidos.forEach(({ numero, productos, subtotal, iva, total }) => {
        lista.innerHTML += `
            <div class="pedido">
                <h3>Pedido #${numero}</h3>
        `;

        // Destructuring también en cada producto del pedido
        productos.forEach(({ nombre, cantidad, precio }) => {
            lista.innerHTML += `
                <p>
                    ${nombre}
                    x${cantidad}
                    - $${(precio * cantidad).toFixed(2)}
                </p>
            `;
        });

        lista.innerHTML += `
                <p>Subtotal: $${subtotal.toFixed(2)}</p>
                <p>IVA (16%): $${iva.toFixed(2)}</p>
                <strong>Total: $${total.toFixed(2)}</strong>
            </div>
        `;
    });
}

function consultarProductos() {
    console.log("----- MENÚ DE COFFEE CODE -----");

    // Destructuring en el forEach de consola
    productos.forEach(({ id, nombre, precio }) => {
        console.log(`${id}. ${nombre} - $${precio.toFixed(2)}`);
    });
}

function listarPedidosConsola() {
    console.log("----- PEDIDOS -----");

    pedidos.forEach(({ numero, productos, subtotal, iva, total }) => {
        console.log(`Pedido #${numero}`);

        productos.forEach(({ nombre, cantidad, precio }) => {
            console.log(
                `${nombre} x${cantidad} - $${(precio * cantidad).toFixed(2)}`
            );
        });

        console.log(`Subtotal: $${subtotal.toFixed(2)}`);
        console.log(`IVA: $${iva.toFixed(2)}`);
        console.log(`Total: $${total.toFixed(2)}`);
    });
}

// Calcula los ingresos totales de todos los pedidos usando reduce()
function calcularIngresosTotales() {
    const ingresos = pedidos.reduce((acumulado, { total }) => {
        return acumulado + total;
    }, 0);

    console.log(`Ingresos totales: $${ingresos.toFixed(2)}`);
    return ingresos;
}

// Cuenta cuántos productos (unidades) se han vendido en total usando reduce()
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