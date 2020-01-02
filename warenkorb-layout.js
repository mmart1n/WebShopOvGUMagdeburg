function renderProductInWarenkorb(titel, autor, verlag, auflage, sprache, seiten, isbn, imgUrl, anzahl, preis, summe) {
    let id = "1";
    let accordion = document.getElementById("accordionExample");
    let card = document.createElement("div");
    card.classList.add("card");
    accordion.appendChild(card);
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.id = "heading" + id;
    card.appendChild(cardHeader);
    let h5 = document.createElement("h5");
    h5.classList.add("mb-0");
    cardHeader.appendChild(h5);
    let headerButton = document.createElement("button");
    headerButton.classList.add("btn", "btn-link");
    headerButton.setAttribute("data-toggle", "collapse");
    headerButton.setAttribute("data-target", "#collapse" + id);
    headerButton.setAttribute("aria-expanded", "true");
    headerButton.setAttribute("aria-controls", "collapse" + id);
    headerButton.textContent = titel;
    let preisMengeButton = document.createElement("button");
    preisMengeButton.classList.add("preis-menge", "btn", "btn-link", "float-right", "disabled");
    preisMengeButton.textContent = "Anzahl: " + anzahl + ", Summe: " + summe.toFixed(2) + "€";
    h5.appendChild(headerButton);
    h5.appendChild(preisMengeButton);

    let cardCollapse = document.createElement("div");
    cardCollapse.id = "collapse" + id;
    cardCollapse.classList.add("collapse");
    cardCollapse.setAttribute("aria-labelledby", "heading" + id);
    cardCollapse.setAttribute("data-parent", "#accordionExample");
    card.appendChild(cardCollapse);
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardCollapse.appendChild(cardBody);
    let table = document.createElement("table");
    table.classList.add("table", "table-borderless", "book-layout");
    cardBody.appendChild(table);
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let td = document.createElement("td");
    td.setAttribute("width", "15%");
    tr.appendChild(td);
    let img = document.createElement("img");
    img.classList.add("cover-image", "float-left");
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", "cover");
    td.appendChild(img);
    let td2 = document.createElement("td");
    tr.appendChild(td2);
    let ul = document.createElement("ul");
    ul.classList.add("description", "float-left");
    td2.appendChild(ul);
    let li = document.createElement("li");
    li.textContent = "Autor: " + autor;
    ul.appendChild(li);
    let li2 = li.cloneNode(false);
    li2.textContent = "Verlag: " + verlag;
    ul.appendChild(li2);
    let li3 = li.cloneNode(false);
    li3.textContent = "Auflage: " + auflage;
    ul.appendChild(li3);
    let li4 = li.cloneNode(false);
    li4.textContent = "Sprache: " + sprache;
    ul.appendChild(li4);
    let li5 = li.cloneNode(false);
    li5.textContent = "Seiten: " + seiten;
    ul.appendChild(li5);
    let li6 = li.cloneNode(false);
    li6.textContent = "ISBN: " + isbn;
    ul.appendChild(li6);
    let tr2 = tr.cloneNode(false);
    table.appendChild(tr2);
    let td3 = td2.cloneNode(false);
    tr2.appendChild(td3);
    let anzahlBold = document.createElement("b");
    anzahlBold.textContent = "Anzahl: " + anzahl;
    td3.appendChild(anzahlBold);
    let td4 = td2.cloneNode(false);
    tr2.appendChild(td4);
    let stuckPreisBold = anzahlBold.cloneNode(false);
    stuckPreisBold.textContent = "Stückpreis: " + preis.toFixed(2) + "€";
    td4.appendChild(stuckPreisBold);
    let tr3 = tr.cloneNode(false);
    table.appendChild(tr3);
    let td5 = td2.cloneNode(false);
    tr3.appendChild(td5);
    let summeBold = anzahlBold.cloneNode(false);
    summeBold.textContent = "Summe: " + summe.toFixed(2) + "€";
    td5.appendChild(summeBold);
    let td6 = td2.cloneNode(false);
    tr3.appendChild(td6);
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("type", "button");
    buttonDelete.classList.add("btn", "btn-danger", "button_delete");
    buttonDelete.textContent = "Entfernen";
    td6.appendChild(buttonDelete);
}

renderProductInWarenkorb("Martin e pich", "Martin Evtimov", "verlag", "auflage", "BG", "18", "18131813", "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png", "1", 2, 2);

function checkWarenkorb() {
  let products = document.querySelectorAll(".card");
  if (products.length == 0) {
    document.getElementById("empty").style.visibility = "visible";
    document.getElementsByClassName("preis")[0].style.visibility = "hidden";
  } else if (products.length == 1) {
    products[0].classList.add("singleAcordion");
    document.getElementById("empty").style.visibility = "hidden";
  } else {
    products[0].classList.remove("singleAcordion");
    document.getElementById("empty").style.visibility = "hidden";
  }
}

let kaufen = document.getElementById("kaufen");
kaufen.addEventListener("click", () => {
    renderProductInWarenkorb("Martin e pich", "Martin Evtimov", "verlag", "auflage", "BG", "18", "18131813", "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png", "1", 2, 2);
    checkWarenkorb();
  });

let emptyWarenkorb = document.getElementById("emptyWarenkorb");
emptyWarenkorb.addEventListener("click", () => {
  let prodkti = document.getElementsByClassName("accordion")[0];
  let child = prodkti.lastElementChild;
  while (child) { 
    prodkti.removeChild(child); 
    child = prodkti.lastElementChild; 
  } 
  checkWarenkorb();
});
// renderProductInWarenkorb("Martin e pich", "Martin Evtimov", "verlag", "auflage", "BG", "18", "18131813", "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png", "1", 2, 2);