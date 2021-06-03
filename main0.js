var persona = {
    nombre: ['Robert'],
    apellidos: ['Marley Nesta'],
    edad: 36,
    saludar: function () {
        console.log("Hola soy " + this.nombre + ' ' + this.apellidos)
}

}

persona.saludar();
