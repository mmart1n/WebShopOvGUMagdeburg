let sessionBooks = JSON.parse(localStorage.getItem("sessionBooks"));
let bookContainer = document.getElementById("bookContainer");
let catalogContainer = document.getElementById("catalogContainer");
let booksInWarenkorb = [];

if (!localStorage.getItem("booksInWarenkorb") == []) {
    booksInWarenkorb = JSON.parse(localStorage.getItem("booksInWarenkorb"));
}

//Check if Warenkorb is empty
function containsBook(id) {
    if (booksInWarenkorb.length == 0) {
        return false;
    }
    let contains = false;
    for (const book of booksInWarenkorb) {
        if (book.id === id) {
            contains = true;
        }
    }
    return contains;
}

//Paginator
class Paginator {

    constructor(books) {
        this.booksToDisplay = books;
        this.elementsPerPage = 6;
        this.currentPage = 1;
        this.startInput = 0;
        this.totalPages = Math.ceil(this.booksToDisplay.length / this.elementsPerPage);
        this.render();
    }

    setBooksToDisplayWhenFiltered(books) {
        if (books.length > 0) {
            this.currentPage = 1;
        }
        this.startInput = 0;
        this.booksToDisplay = books;
        this.totalPages = Math.ceil(this.booksToDisplay.length / this.elementsPerPage);
        this.render();
    }

    render() {
        while (catalogContainer.firstChild) {
            catalogContainer.firstChild.remove();
        }
        if (this.booksToDisplay.length === 0) {
            let noBooks = document.createElement("div");
            noBooks.classList.add("alert", "alert-danger");
            noBooks.setAttribute("role", "alert");
            noBooks.textContent = "No books found!"
            catalogContainer.appendChild(noBooks);
            catalogContainer.classList.remove("row");
        } else {
            catalogContainer.classList.add("row");
        }
        let booksForThePage = this.sliceData(this.startInput, this.startInput + this.elementsPerPage);
        let indexInCatalog = 0;
        for (const book of booksForThePage) {
            renderSingleBook(indexInCatalog, book.id, book.title, book.imgUrl, book.autor, book.verlag, book.auflage, book.sprache, book.seiten, book.ISBN, book.genre, book.menge, book.preis);
            indexInCatalog++;
            if (indexInCatalog == this.elementsPerPage) {
                indexInCatalog = 0;
            }
        }
        this.initializeButtons();
    }

    sliceData(start, end) {
        return this.booksToDisplay.slice(start, end);
    }

    initializeButtons() {
        if (this.booksToDisplay.length > 0) {
            document.getElementsByClassName("pagination")[0].style.display = "flex";
        } else {
            document.getElementsByClassName("pagination")[0].style.display = "none";
            return;
        }

        let that = this;

        let previousButtonList = document.getElementById("previous");
        previousButtonList.innerHTML = "";
        if (this.currentPage <= 1) {
            previousButtonList.classList.add("disabled");
        } else {
            previousButtonList.classList.remove("disabled");
        }
        let previousButton = document.createElement("button");
        previousButton.classList.add("page-link");
        previousButton.setAttribute("tabindex", -1);
        previousButton.textContent = "Back";
        previousButtonList.appendChild(previousButton);

        let nextButtonList = document.getElementById("next");
        nextButtonList.innerHTML = "";
        if (this.currentPage == this.totalPages) {
            nextButtonList.classList.add("disabled");
        } else {
            nextButtonList.classList.remove("disabled");
        }
        let nextButton = document.createElement("button");
        nextButton.classList.add("page-link");
        nextButton.textContent = "Next";
        nextButtonList.appendChild(nextButton);

        let currentPageList = document.getElementById("currentPage");
        currentPageList.innerHTML = "";
        let currentPage = document.createElement("a");
        currentPage.classList.add("page-link");
        currentPage.textContent = this.currentPage + "/" + this.totalPages;
        currentPageList.appendChild(currentPage);

        previousButton.addEventListener("click", function () {
            that.paging(-1);
        });

        nextButton.addEventListener("click", function () {
            that.paging(1);
        });

    }

    paging(dir) {
        if (dir === 1) {
            if (this.startInput + this.elementsPerPage >= this.booksToDisplay.length) {
                return;
            }
            this.startInput += this.elementsPerPage;
            this.currentPage++;
        }
        else {
            if (this.startInput === 0) {
                return;
            }
            this.startInput -= this.elementsPerPage;
            this.currentPage--;
        }
        this.render();
        this.initializeButtons();
    }
}

//Render Single Book
function renderSingleBook(indexInCatalog, id, title, imgUrl, autor, verlag, auflage, sprache, seiten, isbn, genre, menge, preis) {
    let newBookContainer = bookContainer.cloneNode(true);
    catalogContainer.appendChild(newBookContainer);


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

    let addToShoppingCartBtn = document.getElementsByClassName("addToShoppingCartButton")[indexInCatalog];

    addToShoppingCartBtn.addEventListener("click", buttonFunction(id, mengeContent, addToShoppingCartBtn, indexInCatalog));
    if (menge == 0) {
        mengeContent.style.color = "#dc3545";
        addToShoppingCartBtn.classList.remove("btn-success");
        addToShoppingCartBtn.classList.add("btn-danger");
        addToShoppingCartBtn.disabled = true;
    }
}

let buttonFunction = (id, mengeContent, addToShoppingCartBtn, indexInCatalog) => {
    return () => {
        let mengeZuAddieren = document.getElementsByClassName("inputMenge")[indexInCatalog];
        let quantity = Number.parseInt(mengeZuAddieren.value);
        if (quantity <= 0 || quantity > sessionBooks[id].menge) {
            window.alert("Invalid amount!");
            mengeZuAddieren.value = 1;
            return;
        }
        sessionBooks[id].menge -= quantity;
        if (sessionBooks[id].menge == 0) {
            mengeContent.style.color = "#dc3545";
            addToShoppingCartBtn.classList.remove("btn-success");
            addToShoppingCartBtn.classList.add("btn-danger");
            addToShoppingCartBtn.disabled = true;
        }
        mengeContent.textContent = sessionBooks[id].menge;
        localStorage.setItem('sessionBooks', JSON.stringify(sessionBooks));
        if (containsBook(id)) {
            for (const book of booksInWarenkorb) {
                if (book.id == id) {
                    book.menge += quantity;
                }
            }
        } else {
            booksInWarenkorb.push(sessionBooks[id]);
            for (const book of booksInWarenkorb) {
                if (book.id == id) {
                    book.menge = quantity;
                }
            }
        }
        localStorage.setItem('booksInWarenkorb', JSON.stringify(booksInWarenkorb));
        sessionBooks = JSON.parse(localStorage.getItem("sessionBooks"));
        let highlight = document.getElementsByClassName("highlight")[indexInCatalog];
        highlight.classList.add("glow");
        setTimeout(() => highlight.classList.remove("glow"), 1000);
    }
};

//Render Books
let paginator = new Paginator(sessionBooks);

//Search
let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {
    let searchValue = search.value;
    if (searchValue === "") {
        paginator.setBooksToDisplayWhenFiltered(sessionBooks);
    }
    let filteredBooks = [];
    for (const book of sessionBooks) {
        if (book.title.toLowerCase().includes(searchValue.toLowerCase()) || book.autor.toLowerCase().includes(searchValue.toLowerCase())) {
            filteredBooks.push(book);
        }
    }
    paginator.setBooksToDisplayWhenFiltered(filteredBooks);
});