export const crearEncabezado = () => {
    const header = document.createElement('header');
    header.style.backgroundColor = 'cyan';
    header.style.height = '100px';
    header.style.justifyContent = 'center';
    header.style.textAlign = 'center';
    const titulo = document.createElement('h1');
    titulo.textContent = 'Mi Página Simple';
    titulo.style.fontSize = '70px';
    titulo.style.color = 'brown';
    header.appendChild(titulo);
    return header;
}

export const crearContenido = () => {
    const contenido = document.createElement('div');
    contenido.id = 'contenido';
    const parrafo = document.createElement('p');
    parrafo.textContent = '¡Hola! Este es el contenido principal de mi página.';
    parrafo.style.fontSize = '30px'
    contenido.appendChild(parrafo);
    return contenido;
}

export const crearPieDePagina = () => {
    const footer = document.createElement('footer');
    const hr = document.createElement("hr");
    hr.style.border = "3px solid black"
    footer.appendChild(hr)
    const parrafo = document.createElement('p');
    parrafo.textContent = '© 2024 Mi Página Simple. Todos los derechos reservados.';
    parrafo.style.textAlign = 'center';
    parrafo.style.fontStyle = 'italic'
    footer.appendChild(parrafo);
    return footer;
}

export const crearPagina = () => {
    const app = document.getElementById('app');
    app.appendChild(crearEncabezado());
    app.appendChild(crearContenido());
    app.appendChild(crearPieDePagina());
}