

// Obtener todos los productos
fetch("http://localhost:3000/productos")
  .then(res => res.json())
  .then(data => console.log("Productos:", data))
  .catch(err => console.error("Error al obtener productos:", err));

  // Crear un nuevo producto
const nuevoProducto = {
  nombre: "Auriculares Bluetooth",
  precio: 120000
};

fetch("http://localhost:3000/productos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(nuevoProducto)
})
  .then(res => res.json())
  .then(data => console.log("Producto creado:", data))
  .catch(err => console.error("Error al crear producto:", err));

  // Actualizar producto con ID 2
const productoActualizado = {
  nombre: "Mouse gamer RGB",
  precio: 85000
};

fetch("http://localhost:3000/productos/2", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(productoActualizado)
})
  .then(res => res.json())
  .then(data => console.log("Producto actualizado:", data))
  .catch(err => console.error("Error al actualizar producto:", err));

  // Eliminar producto con ID 1
fetch("http://localhost:3000/productos/1", {
  method: "DELETE"
})
  .then(() => console.log("Producto eliminado"))
  .catch(err => console.error("Error al eliminar producto:", err));
const productoInvalido = {
  nombre: "",
  precio: "no es un número"
};

if (
  productoInvalido.nombre.trim() === "" ||
  isNaN(productoInvalido.precio)
) {
  console.error("Producto inválido. Revisa los campos.");
} else {
  fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productoInvalido)
  })
    .then(res => res.json())
    .then(data => console.log("Producto creado:", data))
    .catch(err => console.error("Error al crear producto:", err));
}
