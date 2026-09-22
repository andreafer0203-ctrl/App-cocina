const recetas = [

    {
        id: 1,
        nombre: "Brownie de Chocolate",
        categoria: "Brownies",
        descripcion: "Brownie de chocolate suave y delicioso."
    },

    {
        id: 2,
        nombre: "Cheesecake",
        categoria: "Cheesecake",
        descripcion: "Cheesecake cremoso con base de galleta."
    },

    {
        id: 3,
        nombre: "Galletas con Chispas",
        categoria: "Galletas",
        descripcion: "Galletas caseras con chispas de chocolate."
    },

    {
        id: 4,
        nombre: "Pastel de Chocolate",
        categoria: "Pasteles",
        descripcion: "Pastel de chocolate cubierto con crema."
    },

    {
        id: 5,
        nombre: "Pastel de Vainilla",
        categoria: "Pasteles",
        descripcion: "Pastel esponjoso con sabor a vainilla."
    }

];

const contenedor = document.getElementById("contenedorRecetas");
const buscador = document.getElementById("buscador");

function mostrarRecetas(lista) {

    contenedor.innerHTML = "";

    lista.forEach(receta => {

        contenedor.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="card recipe-card h-100">

                    <div class="card-body">

                        <span class="badge bg-primary">
                            ${receta.categoria}
                        </span>

                        <h5 class="mt-3">
                            ${receta.nombre}
                        </h5>

                        <p>
                            ${receta.descripcion}
                        </p>

                        <a href="detalles.html?id=${receta.id}"
                           class="btn btn-primary">

                            Ver detalles

                        </a>

                    </div>

                </div>

            </div>

        `;
    });
}

function filtrar(categoria) {

    if (categoria === "Todos") {

        mostrarRecetas(recetas);

    } else {

        const resultado = recetas.filter(
            receta => receta.categoria === categoria
        );

        mostrarRecetas(resultado);
    }
}

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const resultado = recetas.filter(receta =>
        receta.nombre.toLowerCase().includes(texto)
    );

    mostrarRecetas(resultado);

});

mostrarRecetas(recetas);
