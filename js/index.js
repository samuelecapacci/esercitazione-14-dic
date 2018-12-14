var cont = [
    { id: 0, nome: "Gianni" }, { id: 1, nome: "Paolo" }, { id: 2, nome: "Franco" }
];
for (let i = 0; i < cont.length; i++) {
    let p = document.createElement("p");
    let nome = document.createTextNode(cont[i].nome);
    p.appendChild(nome);
    let identifier = document.createElement("span");
    let id = document.createTextNode(cont[i].id);
    identifier.appendChild(id)
    document.body.appendChild(identifier)
    document.body.appendChild(p)
}
console.log(cont);