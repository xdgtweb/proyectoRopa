function cambiarPagina(pagina) {
    // Obtén la ruta actual de la página
    var rutaActual = window.location.pathname;

    switch (pagina) {
        case 'index':
            if (rutaActual.includes('/index.html')) {
                // Ya estás en una página que contiene 'index.html', no hagas nada
            } else {
                window.location.href = './index.html';
            }
            break;
        case 'lineas':
            if (rutaActual.includes('/lineas.html')) {
                // Ya estás en una página que contiene 'lineas.html', no hagas nada
            } else {
                window.location.href = './lineas.html';
            }
            break;
        case 'detalles':
            if (rutaActual.includes('/detalles.html')) {
                // Ya estás en una página que contiene 'detalles.html', no hagas nada
            } else {
                window.location.href = './detalles.html';
            }
            break;
        case 'login':
            if (rutaActual.includes('/login.html')) {
                // Ya estás en una página que contiene 'detalles.html', no hagas nada
            } else {
                window.location.href = './login.html';
            }
            break;
        case 'cesta':
            if (rutaActual.includes('/cesta.html')) {
                // Ya estás en una página que contiene 'detalles.html', no hagas nada
            } else {
                window.location.href = './cesta.html';
            }
            break;
        // Agregar más casos para otras páginas
        default:
        // Página no encontrada o manejar otros casos
    }
}
