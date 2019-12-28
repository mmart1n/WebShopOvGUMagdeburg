let books = [
    {
        "title": "The Alchemist",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 30,
        "preis": 13.00
    },
    {
        "title": "The Alchemist 1",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 30,
        "preis": 13.00
    },
    {
        "title": "The Alchemist 2",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 30,
        "preis": 13.00
    },
    {
        "title": "The Alchemist 3",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 30,
        "preis": 13.00
    },
    {
        "title": "The Alchemist 4",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 30,
        "preis": 13.00
    },
    {
        "title": "The Alchemist 5",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 0,
        "preis": 13.00
    },
    {
        "title": "New",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 0,
        "preis": 13.00
    },
    {
        "title": "The Alchemist 6",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 30,
        "preis": 13.00
    },
    {
        "title": "The Alchemist 7",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 0,
        "preis": 13.00
    },
    {
        "title": "New 2",
        "autor": "Paulo Coelho",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "sprache": "English",
        "seiten": 208,
        "ISBN": "13-9780062315007",
        "genre": ["Adventure", "Fantasy"],
        "menge": 0,
        "preis": 13.00
    }
];

function renderBook(title, imgUrl, autor, verlag, auflage, sprache, seiten, isbn, genre, menge, preis) {
    let div = document.createElement("div");
    div.classList.add("col-sm-12", "col-xl-6");
    let table = document.createElement("table");
    table.classList.add("table", "table-borderless", "table-dark", "book-layout");
    div.appendChild(table);
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let td = document.createElement("td");
    td.setAttribute("colspan", 3);
    tr.appendChild(td);
    let h3 = document.createElement("h3");
    h3.textContent = title;
    td.appendChild(h3);
    let tr2 = tr.cloneNode(false);
    table.appendChild(tr2);
    let td2 = td.cloneNode(false);
    td2.setAttribute("colspan", 1);
    td2.classList.add("cover");
    tr2.appendChild(td2);
    let img = document.createElement("img");
    img.classList.add("cover-image");
    img.setAttribute("alt", "cover");
    img.setAttribute("src", imgUrl);
    td2.appendChild(img);
    let td3 = td.cloneNode(false);
    td3.setAttribute("colspan", 2);
    td3.classList.add("description");
    tr2.appendChild(td3);
    let ul = document.createElement("ul");
    ul.classList.add("description-list");
    td3.appendChild(ul);
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
    let tr3 = tr.cloneNode(false);
    table.appendChild(tr3);
    let td4 = td.cloneNode(false);
    td4.setAttribute("colspan", 2);
    td4.textContent = "Genre: " + genre;
    tr3.appendChild(td4);
    let td5 = td.cloneNode(false);
    td5.setAttribute("colspan", 1);
    td5.classList.add("preis");
    tr3.appendChild(td5);
    let p = document.createElement("p");
    td5.appendChild(p);
    p.textContent = "Preis: " + preis.toFixed(2) + "€";
    let tr4 = tr.cloneNode(false);
    tr4.classList.add("menge");
    table.appendChild(tr4);
    let td6 = td.cloneNode(false);
    td6.setAttribute("colspan", 2);
    tr4.appendChild(td6);
    let p2 = p.cloneNode(false);
    p2.textContent = "Menge: " + menge;
    td6.appendChild(p2);
    let td7 = td.cloneNode(false);
    td7.setAttribute("colspan", 1);
    td7.classList.add("buy-button");
    tr4.appendChild(td7);
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("btn", "btn-outline-success", "kaufen");
    button.textContent = "In den Einkaufswagen";
    if (menge == 0) {
        p2.style.color = "#dc3545";
        button.classList.remove("btn-outline-success");
        button.classList.add("btn-outline-danger");
        button.disabled = true;
    }
    td7.appendChild(button);
    return div;
}


//Paginator
class Paginator {

    constructor(books) {
        this.booksToDisplay = books;
        this.elementsPerPage = 6;
        this.currentPage = 1;
        this.startInput = 0;
        this.totalPages = Math.ceil(this.booksToDisplay.length / this.elementsPerPage);
        this.initializeButtons();
        this.render();
    }

    setBooksToDisplay(books){
        if(books.length>0){
            this.currentPage=1;
        } else {
            this.currentPage=0;
        }
        this.startInput=0;
        this.booksToDisplay = books;
        this.totalPages = Math.ceil(this.booksToDisplay.length / this.elementsPerPage);
        this.initializeButtons();
        this.render();
    }

    render() {
        let catalog = document.querySelectorAll(".catalog")[0];
        catalog.innerHTML = "";
        if(this.currentPage==0){
            let noBooks = document.createElement("p");
            noBooks.style.color = "#dc3545";
            noBooks.textContent = "No books found!"
            catalog.appendChild(noBooks);
        }
        let divRow = document.createElement("div");
        let booksPerPage = this.sliceData(this.startInput, this.startInput + this.elementsPerPage);
        divRow.classList.add("row", "cat-row");
        for (const book of booksPerPage) {
            let counter = 0;
            if (counter % 2 == 0) {
                catalog.appendChild(divRow);
            }
            let kniga = renderBook(book.title, book.imgUrl, book.autor, book.verlag, book.auflage, book.sprache, book.seiten, book.ISBN, book.genre, book.menge, book.preis);
            divRow.appendChild(kniga);
            counter++;
        }
    }

    sliceData(start, end) {
        return this.booksToDisplay.slice(start, end);
    }

    initializeButtons() {
        if(this.currentPage==0){
            document.getElementsByClassName("pagination")[0].style.visibility="hidden";
            return;
        } else {
            document.getElementsByClassName("pagination")[0].style.visibility="visible";
        }
        let that = this;
        let previousButtonList = document.getElementById("previous");
        previousButtonList.innerHTML="";
        if(this.currentPage<=1){
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
        nextButtonList.innerHTML="";
        if(this.currentPage==this.totalPages){
            nextButtonList.classList.add("disabled");
        } else {
            nextButtonList.classList.remove("disabled");
        }
        let nextButton = document.createElement("button");
        nextButton.classList.add("page-link");
        nextButton.textContent = "Next";
        nextButtonList.appendChild(nextButton);

        let currentPageList = document.getElementById("currentPage");
        currentPageList.innerHTML="";
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

let paginator = new Paginator(books);

//Search
let search = document.getElementById("search");
search.addEventListener("keyup", function(){
    let searchValue = search.value;
    if(searchValue===""){
        paginator.setBooksToDisplay(books);
    }
    let filteredBooks = [];
    for (const book of books) {
        if(book.title.toLowerCase().includes(searchValue.toLowerCase()) || book.autor.toLowerCase().includes(searchValue.toLowerCase())){
            filteredBooks.push(book);
        }
    }
    paginator.setBooksToDisplay(filteredBooks);
});

