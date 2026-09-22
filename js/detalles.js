const recetas = {

    1: {
        nombre: "Brownie de Chocolate",
        categoria: "Brownies",
        tiempo: "40 minutos",

        ingredientes: [
            "200 g de chocolate",
            "100 g de mantequilla",
            "3 huevos",
            "150 g de azúcar",
            "100 g de harina"
        ],

        preparacion:
            "Derrite el chocolate con la mantequilla. Agrega los huevos y el azúcar. Incorpora la harina y mezcla. Coloca la preparación en un molde y hornea hasta que esté listo."
    },

    2: {
        nombre: "Cheesecake",
        categoria: "Cheesecake",
        tiempo: "1 hora",

        ingredientes: [
            "200 g de galletas",
            "100 g de mantequilla",
            "400 g de queso crema",
            "150 g de azúcar",
            "2 huevos"
        ],

        preparacion:
            "Tritura las galletas y mézclalas con mantequilla. Coloca la mezcla como base. Agrega el queso crema, azúcar y huevos. Hornea y deja enfriar antes de servir."
    },

    3: {
        nombre: "Galletas con Chispas",
        categoria: "Galletas",
        tiempo: "30 minutos",

        ingredientes: [
            "200 g de harina",
            "100 g de mantequilla",
            "100 g de azúcar",
            "1 huevo",
            "100 g de chispas de chocolate"
        ],

        preparacion:
            "Mezcla la mantequilla con el azúcar. Agrega el huevo y la harina. Incorpora las chispas de chocolate. Forma las galletas y hornea hasta que estén doradas."
    }

};

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("id");

const receta = recetas[id];

const contenedor = document.getElementById("detalleReceta");

if (receta) {

    contenedor.innerHTML = `

        <div class="card recipe-detail">

            <div class="card-body">

                <span class="badge bg-primary">
                    ${receta.categoria}
                </span>

                <h1 class="mt-3">
                    ${receta.nombre}
                </h1>

                <p>
                    Tiempo de preparación:
                    <strong>${receta.tiempo}</strong>
                </p>

                <h3>Ingredientes</h3>

                <ul>
                    ${receta.ingredientes
                        .map(ingrediente =>
                            `<li>${ingrediente}</li>`
                        )
                        .join("")}
                </ul>

                <h3>Preparación</h3>

                <p>
                    ${receta.preparacion}
                </p>

                <a href="recetas.html"
                   class="btn btn-primary">

                    Regresar a recetas

                </a>

            </div>

        </div>

    `;

} else {

    contenedor.innerHTML = `

        <div class="alert alert-warning">

            No se encontró la receta.

        </div>

    `;

}
