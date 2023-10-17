const headerHTML = `
    <img id="logo" src="./img/header/logo.svg">
    <nav>
      <button onclick="cambiarPagina('index')"><img src="./img/header/tornillo.svg">Nuevo</button>
      <button onclick="cambiarPagina('lineas')"><img src="./img/header/diseno-fluido.svg">Lineas</button>
      <button onclick="cambiarPagina('detalles')"><img src="./img/header/informacion-del-circulo-de-archivos.svg">Detalles</button>
      <div id="cajaUsuario">
        <button onclick="cambiarPagina('login')"><img src="./img/header/ingresar.svg">Login</button>
        <img src="./img/header/logo.svg">
        <button onclick="cambiarPagina('cesta')"><img src="./img/header/cesta.svg">Cesta</button>
      </div>
    </nav>
    
`;