let sessionBooks = JSON.parse(localStorage.getItem("sessionBooks"));
let bookContainer = document.getElementById("bookContainer");
let itemsContainer = document.getElementById("accordionExample");
let booksInWarenkorb = [];
if (!localStorage.getItem("booksInWarenkorb") == []) {
  booksInWarenkorb = JSON.parse(localStorage.getItem("booksInWarenkorb"));
}

//Render single book cart
function renderSingeBookCart(indexInCatalog, id, title, autor, verlag, auflage, sprache, seiten, isbn, genre, imgUrl, menge, preis) {
  let newBookContainer = bookContainer.cloneNode(true);
  newBookContainer.classList.remove("singleAcordion");
  itemsContainer.appendChild(newBookContainer);

  let openItemBtn = document.getElementsByClassName("openItemBtn")[indexInCatalog];
  openItemBtn.setAttribute("data-target", "#collapse" + indexInCatalog);

  let itemBody = document.getElementsByClassName("itemBody")[indexInCatalog];
  itemBody.id = "collapse" + indexInCatalog;
  if (indexInCatalog > 0) {
    itemBody.classList.remove("show");
  }

  let titleContent = document.getElementsByClassName("titleContent")[indexInCatalog];
  titleContent.textContent = title;

  let autorContent = document.getElementsByClassName("autorContent")[indexInCatalog];
  autorContent.textContent = autor;

  let imageContent = document.getElementsByClassName("cover-image")[indexInCatalog];
  imageContent.setAttribute("src", imgUrl);

  let verlagContent = document.getElementsByClassName("verlagContent")[indexInCatalog];
  verlagContent.textContent = verlag;

  let auflageContent = document.getElementsByClassName("auflageContent")[indexInCatalog];
  auflageContent.textContent = auflage;

  let spracheContent = document.getElementsByClassName("spracheContent")[indexInCatalog];
  spracheContent.textContent = sprache;

  let seitenContent = document.getElementsByClassName("seitenContent")[indexInCatalog];
  seitenContent.textContent = seiten;

  let isbnContent = document.getElementsByClassName("isbnContent")[indexInCatalog];
  isbnContent.textContent = isbn;

  let genreContent = document.getElementsByClassName("genreContent")[indexInCatalog];
  genreContent.textContent = genre;

  let mengeContent = document.getElementsByClassName("mengeContent")[indexInCatalog];
  mengeContent.textContent = menge;

  let preisContent = document.getElementsByClassName("preisContent")[indexInCatalog];
  preisContent.textContent = preis.toFixed(2) + "€";

  let gesamtSumContent = document.getElementsByClassName("gesamtSumContent")[indexInCatalog];
  gesamtSumContent.textContent = (menge * preis).toFixed(2) + "€";

  let removeItemBtn = document.getElementsByClassName("removeFromShoppingCartBtn")[indexInCatalog];
  removeItemBtn.addEventListener("click", buttonFunction(id, menge, indexInCatalog));
}

//Delete button functionality for every item
let buttonFunction = (id, mengeContent, indexInCatalog) => {
  return () => {
    let removeQuantityInput = document.getElementsByClassName("inputMenge")[indexInCatalog];
    let quantity = Number.parseInt(removeQuantityInput.value);
    if (quantity <= 0 || quantity > mengeContent) {
      window.alert("Ungültige Anzahl eingegeben!");
      removeQuantityInput.value = 1;
      return;
    }
    sessionBooks[id].menge += quantity;
    localStorage.setItem("sessionBooks", JSON.stringify(sessionBooks));
    booksInWarenkorb[indexInCatalog].menge -= quantity;
    if (booksInWarenkorb[indexInCatalog].menge == 0) {
      for (let i = 0; i < booksInWarenkorb.length; i++) {
        if (booksInWarenkorb[i].id == id) {
          booksInWarenkorb.splice(i, 1);
        }
      }
    }
    if (booksInWarenkorb.length > 0) {
      localStorage.setItem('booksInWarenkorb', JSON.stringify(booksInWarenkorb));
    } else {
      localStorage.setItem('booksInWarenkorb', []);
    }
    location.reload();
  }
};

//Render all items in Warenkorb
function renderProductsInWarenkorb() {
  while (itemsContainer.firstChild) {
    itemsContainer.firstChild.remove();
  }
  let indexInAcordion = 0;
  for (const book of booksInWarenkorb) {
    renderSingeBookCart(indexInAcordion, book.id, book.title, book.autor, book.verlag, book.auflage, book.sprache, book.seiten, book.ISBN, book.genre, book.imgUrl, book.menge, book.preis, book.preis);
    indexInAcordion++;
  }
  let subtotalContent = document.getElementById("subtotalContent");
  let totalItemsContent = document.getElementById("totalItemsContent");
  let lieferungContent = document.getElementById("lieferungContent");
  let gesamtPreisContent =document.getElementById("gesamtPreisContent");
  let summe = 0;
  let totalItemsValue = 0;
  let lieferungValue = 5;
  let gesamtPreis = 0;
  for (const book of booksInWarenkorb) {
    summe += book.preis * book.menge;
    totalItemsValue += book.menge;
  }
  gesamtPreis = summe + 5;
  subtotalContent.textContent = summe.toFixed(2);
  if(summe >= 40){
    lieferungValue = 0;
    gesamtPreis -= 5;
  }
  totalItemsContent.textContent = totalItemsValue.toFixed(0);
  lieferungContent.textContent = lieferungValue.toFixed(2);
  gesamtPreisContent.textContent = gesamtPreis.toFixed(2);
  checkWarenkorb();
}

renderProductsInWarenkorb();

//Check if warenkorb is empty
function checkWarenkorb() {
  let products = document.querySelectorAll(".card");
  if (products.length == 0) {
    document.getElementById("emptyWarenkorb").style.visibility = "visible";
    document.getElementById("notEmptyWarenkorb").style.display = "none";
  } else if (products.length == 1) {
    products[0].classList.add("singleAcordion");
    document.getElementById("emptyWarenkorb").style.display = "none";
  } else {
    products[0].classList.remove("singleAcordion");
    document.getElementById("emptyWarenkorb").style.display = "none";
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

//Kaufen button functionality
let kaufen = document.getElementById("kaufen");
kaufen.addEventListener("click", () => {
  alert("Sie haben die Bücher erfolgreich gekauft!")
  booksInWarenkorb = [];
  localStorage.setItem("booksInWarenkorb", booksInWarenkorb);
  location.reload();
});

//Warenkorbleeren functionality
let emptyWarenkorb = document.getElementById("warenkorbLeeren");
emptyWarenkorb.addEventListener("click", () => {
  alert("Sie haben den Warenkorb geleert!")
  for (let i = 0; i < booksInWarenkorb.length; i++) {
    sessionBooks[booksInWarenkorb[i].id].menge += booksInWarenkorb[i].menge;
  }
  localStorage.setItem("sessionBooks", JSON.stringify(sessionBooks));
  booksInWarenkorb = [];
  localStorage.setItem("booksInWarenkorb", booksInWarenkorb);
  location.reload();
});