const form = document.getElementById("form");
const input = document.getElementById("input");
const listaALL = document.getElementById("lista");
const contador = document.getElementById("contador");

const listagem = JSON.parse(localStorage.getItem("lista"));

if (listagem) {
    listagem.forEach((lista) => {
        addLista(lista);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addLista();
});

function addLista(lista) {
    let listaTexto = input.value;

    if (lista) {
        listaTexto = lista.text;
    }

    if (listaTexto) {
        const elemTarefa = document.createElement("li");
        if (lista && lista.concluido) {
            elemTarefa.classList.add("concluido");
        }

        elemTarefa.innerText = listaTexto;

        elemTarefa.addEventListener("click", () => {
            elemTarefa.classList.toggle("concluido");

            updateLS();
        });

        elemTarefa.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            elemTarefa.remove();

            updateLS();
        });

        listaALL.appendChild(elemTarefa);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const elemTarefa = document.querySelectorAll("li");

    const listagem = [];
    let r = 0

    elemTarefa.forEach((elemLista) => {
        listagem.push({
            text: elemLista.innerText,
            concluido: elemLista.classList.contains("concluido"),
        });
    });

    for(let i = 0; i < listagem.length; i++) {
        if(!listagem[i].concluido) {
            r++;
        }
    }

    if (r <= 0 && listagem.length > 0) {
        contador.innerText = "Todas as tarefas foram concluídas.";
    } else if (r <= 0) {
        contador.innerText = "Sem tarefas a fazer.";
    } else {
        contador.innerText = `Tarefas restantes: ${r}`;
    };

    localStorage.setItem("lista", JSON.stringify(listagem));
}
