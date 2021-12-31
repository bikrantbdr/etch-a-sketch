function draw() {
    let boxContainer = document.querySelector(".grid");
    let newboxes;

    for (i=0; i<874; i++) {
        newboxes = document.createElement("div");
        newboxes.classList.add("box");
        boxContainer.appendChild(newboxes);
    }
}

draw();