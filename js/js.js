function init(d, w){
    d.onreadystatechange = () => {
        if (d.readyState === "complete") {
            init();
        }
    }
    
    //Formulario
    const seccionForm = crearElemento("section");
    seccionForm.classList.add("seccionForm");

    const formulario = crearElemento("form");
    formulario.classList.add("formularioAgregar");

    const inputNombre = crearElemento("input");
    inputNombre.classList.add("inputNombre");
    nombre = inputNombre;

    const inputApellido= crearElemento("input");
    inputApellido.classList.add("inputApellido");
    apellido = inputApellido;

    const inputTelefono = crearElemento("input");
    inputTelefono.classList.add("inputTelefono");
    telefono = inputTelefono;

    const inputEdad = crearElemento("input");
    inputEdad.classList.add("inputEdad");
    edad = inputEdad;

    const inputNombreUsuario = crearElemento("input");
    inputNombreUsuario.classList.add("inputNombreUsuario");
    nombreUsuario = inputNombreUsuario;

    const inputCorreo= crearElemento("input");
    inputCorreo.classList.add("inputCorreo");
    correo = inputCorreo;

    const inputContraseña= crearElemento("input");
    inputContraseñaclassList.add("inputContraseña");
    contraseña = inputContraseña;

    const usuario = [nombre, apellido, telefono, edad, nombreUsuario, correo, contraseña];
    const listaUsuario = [usuario];


    formulario.appendChild(inputNombre);
    formulario.appendChild(inputApellido);
    formulario.appendChild(inputTelefono);
    formulario.appendChild(inputEdad);
    formulario.appendChild(inputNombreUsuario);
    formulario.appendChild(inputCorreo);
    formulario.appendChild(inputContraseña);

    seccionForm.appendChild(formulario);
}