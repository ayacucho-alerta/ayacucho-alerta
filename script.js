// MENSAJE DE PREVENCIÓN

function mostrarMensaje() {

    alert(
        "AYACUCHO ALERTA\n\n" +
        "Mantén la calma.\n" +
        "Busca una zona segura.\n" +
        "Aléjate de ventanas y lugares peligrosos.\n" +
        "Sigue siempre las indicaciones de las autoridades."
    );

}



// MOSTRAR DATOS DE LOS RIESGOS

function mostrarRiesgos() {

    const datos = document.getElementById("datosRiesgos");

    if (datos.style.display === "none") {

        datos.style.display = "block";

    } else {

        datos.style.display = "none";

    }

}



// BUSCADOR DE RIESGOS

function buscarRiesgo() {

    const texto = document
        .getElementById("buscarRiesgo")
        .value
        .toLowerCase()
        .trim();

    const resultado =
        document.getElementById("resultadoBusqueda");


    if (texto === "") {

        resultado.innerHTML =
            "<p class='mensaje-busqueda'>" +
            "Escribe el nombre de un riesgo para buscarlo." +
            "</p>";

        return;

    }


    if (
        texto.includes("sismo") ||
        texto.includes("sismos")
    ) {

        resultado.innerHTML = `

            <div class="resultado">

                <h3>🌎 Sismos</h3>

                <p>
                    Los sismos son movimientos repentinos
                    de la tierra que pueden causar daños.
                </p>

                <p>
                    <strong>¿Qué hacer?</strong><br>
                    Mantén la calma, aléjate de ventanas
                    y objetos que puedan caer y dirígete
                    a una zona segura cuando sea necesario.
                </p>

            </div>

        `;

        return;

    }



    if (
        texto.includes("lluvia") ||
        texto.includes("lluvias")
    ) {

        resultado.innerHTML = `

            <div class="resultado">

                <h3>🌧️ Lluvias intensas</h3>

                <p>
                    Son precipitaciones fuertes o prolongadas
                    que pueden provocar inundaciones,
                    huaicos y deslizamientos.
                </p>

                <p>
                    <strong>¿Qué hacer?</strong><br>
                    Aléjate de ríos, quebradas y zonas
                    donde pueda acumularse o bajar agua.
                </p>

            </div>

        `;

        return;

    }



    if (
        texto.includes("helada") ||
        texto.includes("heladas")
    ) {

        resultado.innerHTML = `

            <div class="resultado">

                <h3>❄️ Heladas</h3>

                <p>
                    Son períodos en los que la temperatura
                    desciende considerablemente,
                    especialmente durante la noche
                    y madrugada.
                </p>

                <p>
                    <strong>¿Qué hacer?</strong><br>
                    Permanece en ambientes protegidos
                    y utiliza ropa adecuada para el frío.
                </p>

            </div>

        `;

        return;

    }



    if (
        texto.includes("deslizamiento") ||
        texto.includes("deslizamientos")
    ) {

        resultado.innerHTML = `

            <div class="resultado">

                <h3>⛰️ Deslizamientos</h3>

                <p>
                    Son desplazamientos de tierra,
                    piedras o rocas por una pendiente.
                </p>

                <p>
                    <strong>¿Qué hacer?</strong><br>
                    Aléjate de laderas y zonas inestables
                    y dirígete hacia un lugar seguro.
                </p>

            </div>

        `;

        return;

    }



    resultado.innerHTML = `

        <div class="resultado">

            <h3>⚠️ Riesgo no encontrado</h3>

            <p>
                No encontramos ese riesgo.
                Prueba con: sismos, lluvias,
                heladas o deslizamientos.
            </p>

        </div>

    `;

}