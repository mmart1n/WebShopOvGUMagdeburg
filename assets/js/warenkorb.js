let localStorage = window.localStorage;

let sessionBooks = JSON.parse(localStorage.getItem("sessionBooks"));
let booksInWarenkorb = [];
if (!localStorage.getItem("booksInWarenkorb") == []) {
  booksInWarenkorb = JSON.parse(localStorage.getItem("booksInWarenkorb"));
}

function renderProductInWarenkorb(bookId, titel, autor, verlag, auflage, sprache, seiten, isbn, genre, imgUrl, anzahl, preis, summe) {
  let id = bookId;
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
  preisMengeButton.textContent = "Anzahl: " + anzahl + ", Summe: " + (anzahl * preis).toFixed(2) + "€";
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
  table.classList.add("table", "table-borderless", "book-layout", "table-responsive");
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
  let li7 = li.cloneNode(false);
  li7.textContent = "Genre: " + genre;
  ul.appendChild(li7);
  let tr2 = tr.cloneNode(false);
  table.appendChild(tr2);
  let td3 = td2.cloneNode(false);
  tr2.appendChild(td3);
  let anzahlBold = document.createElement("b");
  anzahlBold.textContent = "Anzahl: " + anzahl;
  td3.appendChild(anzahlBold);
  let td4 = td2.cloneNode(false);
  tr2.appendChild(td4);
  let ul2 = ul.cloneNode(false);
  let li8 = li.cloneNode(false);
  li8.style.fontWeight = "bold";
  ul2.appendChild(li8);
  li8.textContent = "Stückpreis: " + preis.toFixed(2) + "€";
  td4.appendChild(ul2);
  let tr3 = tr.cloneNode(false);
  table.appendChild(tr3);
  let td5 = td2.cloneNode(false);
  tr3.appendChild(td5);
  let summeButton = document.createElement("button");
  summeButton.classList.add("btn", "float-left", "disabled");
  summeButton.style.cursor = "default";
  summeButton.style.paddingLeft = "0px";
  summeButton.style.color = "green";
  summeButton.style.fontWeight = "bold";
  summeButton.textContent = "Summe: " + (anzahl * preis).toFixed(2) + "€";
  td5.appendChild(summeButton);
  let td6 = td2.cloneNode(false);
  tr3.appendChild(td6);
  let buttonDelete = document.createElement("button");
  buttonDelete.setAttribute("type", "button");
  buttonDelete.classList.add("btn", "btn-danger", "button_delete");
  buttonDelete.textContent = "Entfernen";
  buttonDelete.addEventListener("click", () => {
    sessionBooks[id - 1].menge += anzahl;
    localStorage.setItem("sessionBooks", JSON.stringify(sessionBooks));
    for (let i = 0; i < booksInWarenkorb.length; i++) {
      if (booksInWarenkorb[i].id == id) {
        booksInWarenkorb.splice(i, 1);
      }
    }
    if (booksInWarenkorb.length > 0) {
      localStorage.setItem('booksInWarenkorb', JSON.stringify(booksInWarenkorb));
    } else {
      localStorage.setItem('booksInWarenkorb', []);
    }
    location.reload();
  });
  td6.appendChild(buttonDelete);
}

renderProductsInWarenkorb();

function renderProductsInWarenkorb() {
  for (const book of booksInWarenkorb) {
    console.log(book.title);
    renderProductInWarenkorb(book.id, book.title, book.autor, book.verlag, book.auflage, book.sprache, book.seiten, book.ISBN, book.genre, book.imgUrl, book.menge, book.preis, book.preis)
  }
  let gesamtPreis = document.getElementById("gesamtPreis");
  let summe = 0;
  for (const book of booksInWarenkorb) {
    summe += book.preis * book.menge;
  }
  gesamtPreis.textContent = summe.toFixed(2);
  checkWarenkorb();
}

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

  let res = window.innerWidth;
  if (res < 768) {
    $('.preis-menge').removeClass('float-right');
    $('.preis-menge').addClass('preis-menge-left');
  } else {
    $('.preis-menge').removeClass('preis-menge-left');
    $('.preis-menge').addClass('float-right');
  }

  window.onresize = function () {
    let res = window.innerWidth;
    if (res < 768) {
      $('.preis-menge').removeClass('float-right');
      $('.preis-menge').addClass('preis-menge-left');
    } else {
      $('.preis-menge').removeClass('preis-menge-left');
      $('.preis-menge').addClass('float-right');
    }
  };
}

let kaufen = document.getElementById("kaufen");
kaufen.addEventListener("click", () => {
  alert("Sie haben den Buechern gekauft!")
  booksInWarenkorb = [];
  localStorage.setItem("booksInWarenkorb", booksInWarenkorb);
  location.reload();
});

let emptyWarenkorb = document.getElementById("emptyWarenkorb");
emptyWarenkorb.addEventListener("click", () => {
  alert("Sie haben den Warenkorb geleert!")
  for (let i = 0; i < booksInWarenkorb.length; i++) {
    sessionBooks[booksInWarenkorb[i].id - 1].menge += booksInWarenkorb[i].menge;
  }
  localStorage.setItem("sessionBooks", JSON.stringify(sessionBooks));
  booksInWarenkorb = [];
  localStorage.setItem("booksInWarenkorb", booksInWarenkorb);
  location.reload();
});