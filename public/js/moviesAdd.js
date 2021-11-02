window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", () => {
        titulo.style.color = "green"
    })
    let inputTitle = document.getElementById("titulo")
    let estado = 0
    
    const estadoSecreto = (key) => {
        switch (true) {
            case key === 's' && estado === 0:
            ++estado
                break;
            case key === 'e' && estado === 1:
            ++estado
                break;
            case key === 'c' && estado === 2:
            ++estado
                break;
            case key === 'r' && estado === 3:
            ++estado
                break;
            case key === 'e' && estado === 4:
            ++estado
                break;
            case key === 't' && estado === 5:
            ++estado
                break;
            case key === 'o' && estado === 6:
            estado = 0
            alert("SECRETO MAGICO")
                break;
            default:
            estado = 0
                break;
        }
    }
    inputTitle.addEventListener("keyup", (e) => {
        estadoSecreto(e.key)
    })
}
