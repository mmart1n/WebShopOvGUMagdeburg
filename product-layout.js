let books = [
    {
        "title": "The Alchemist",
        "autor": "Paulo Coelho",
        "sprache": "Englisch",
        "genre": "Adventure, Fantasy",
        "verlag": "HarperCollins Publishers",
        "auflage": "25th Anniversary Edition",
        "Typ": "Gebunden",
        "seiten": "208",
        "preis": "13.00",
        "ISBN": "13-9780062315007",
        "menge": "30",
        "imgUrl": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg"
    },
    {
        "title": "Die kleine Raupe Nimmersatt",
        "autor": "Eric Carle",
        "sprache": "Deutsch",
        "genre": "Kinder, Fantasy",
        "verlag": "verlag Gerhard Stalling",
        "auflage": "1.",
        "Typ": "Gebunden",
        "seiten": "26",
        "preis": "9.90",
        "ISBN": "13-9780399226908, 10-0399226907",
        "menge": "38",
        "imgUrl": "https://antiquariat-schaper.de/wp-content/uploads/21549-1-768x550.jpg"
    },
    {
        "title": "Das Café am Rande der Welt",
        "autor": "John Strelecky",
        "sprache": "Deutsch",
        "genre": "Selbst-Hilfe",
        "verlag": "dtv",
        "auflage": "3.",
        "Typ": "Taschenbuch",
        "seiten": "128",
        "preis": "8.95",
        "ISBN": "13-9783423209694, 10-3423209690",
        "menge": "101",
        "imgUrl": "https://kopp-medien.websale.net/bilder/gross/124791.jpg"
    },
    {
        "title": "Der Kleine Prinz",
        "autor": "Antoine de Saint-Exupéry",
        "sprache": "Deutsch, Französisch",
        "genre": "Fantasy, Klassiker",
        "verlag": "Karl Rauch",
        "auflage": "73.",
        "Typ": "Kartoniert",
        "seiten": "94",
        "preis": "6.90",
        "ISBN": "13-9783792000496, 10-3792000490",
        "menge": "49",
        "imgUrl": "https://media.hugendubel.de/shop/coverscans/186/18691925_18691925_xl.jpg"
    },
    {
        "title": "The Da Vinci Code",
        "autor": "Dan Brown",
        "sprache": "Englisch",
        "genre": "Thriller, Krimi, Fiction, Spannung",
        "verlag": "Doubleday",
        "auflage": "1.",
        "Typ": "Gebunden",
        "seiten": "689",
        "preis": "20.90",
        "ISBN": "9780385504201",
        "menge": "36",
        "imgUrl": "http://images2.penguinrandomhouse.com/cover/700jpg/9780385504201"
    },
    {
        "title": "Harry Potter Series",
        "autor": "J. K. Rowling",
        "sprache": "Englisch",
        "genre": "Fantasy",
        "verlag": "Bloomsburry",
        "auflage": "1.",
        "Typ": "Gebunden",
        "seiten": "4224",
        "preis": "249.99",
        "ISBN": "13-9780545044257, 10-0545044251",
        "menge": "6",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/61FtDKQez2L._AC_SL1034_.jpg"
    },
    {
        "title": "Hundert Jahre Einsamkeit",
        "autor": "Gabriel García Márquez",
        "sprache": "Deutsch",
        "genre": "Roman, Magische Realismus",
        "verlag": "Fischer",
        "auflage": "1.",
        "Typ": "Taschenbuch",
        "seiten": "516",
        "preis": "16.50",
        "ISBN": "13-9783596907052, 10-3596907055",
        "menge": "23",
        "imgUrl": "https://www.fischerverlage.de/media/fs/15/u1_978-3-596-90705-2.jpg"
    },
    {
        "title": "The Name of the Rose",
        "autor": "Umberto Eco",
        "sprache": "Englisch",
        "genre": "Roman, Krimi, Klassiker",
        "verlag": "Vintage",
        "auflage": "4.",
        "Typ": "Kartoniert",
        "seiten": "592",
        "preis": "12.49",
        "ISBN": "13-9780099466031, 10-0099466031",
        "menge": "13",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/7171HdBzN3L.jpg"
    },
    {
        "title": "A Song of Ice and Fire 1: A Game of Thrones",
        "autor": "George R. R. Martin",
        "sprache": "Englisch",
        "genre": "Fantasy",
        "verlag": "Bantam Spectra",
        "auflage": "1.",
        "Typ": "Taschenbuch",
        "seiten": "694",
        "preis": "8.29",
        "ISBN": "13-9780553573404, 10-0553573403",
        "menge": "66",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg"
    },
    {
        "title": "A Song of Ice and Fire 2: A Clash of Kings",
        "autor": "George R. R. Martin",
        "sprache": "Englisch",
        "genre": "Fantasy",
        "verlag": "Bantam Spectra",
        "auflage": "1.",
        "Typ": "Taschenbuch",
        "seiten": "761",
        "preis": "9.49",
        "ISBN": "13-9780553579901, 10-0553579908",
        "menge": "67",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/en/3/39/AClashOfKings.jpg"
    },
    {
        "title": "A Song of Ice and Fire 3: A Storm of Swords",
        "autor": "George R. R. Martin",
        "sprache": "Englisch",
        "genre": "Fantasy",
        "verlag": "Bantam Spectra",
        "auflage": "1.",
        "Typ": "Taschenbuch",
        "seiten": "973",
        "preis": "11.00",
        "ISBN": "13-9780553573428, 10-055357342X",
        "menge": "32",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/en/2/24/AStormOfSwords.jpg"
    },
    {
        "title": "A Song of Ice and Fire 4: A Feast for Crows",
        "autor": "George R. R. Martin",
        "sprache": "Englisch",
        "genre": "Fantasy",
        "verlag": "Bantam Spectra",
        "auflage": "1.",
        "Typ": "Taschenbuch",
        "seiten": "753",
        "preis": "9.39",
        "ISBN": "13-9780553582024, 10-055358202X",
        "menge": "15",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/en/a/a3/AFeastForCrows.jpg"
    },
    {
        "title": "A Song of Ice and Fire 5: A Dance with Dragons",
        "autor": "George R. R. Martin",
        "sprache": "Englisch",
        "genre": "Fantasy",
        "verlag": "Bantam Spectra",
        "auflage": "1.",
        "Typ": "Taschenbuch",
        "seiten": "1016",
        "preis": "12.49",
        "ISBN": "13-9780553841121, 10-0553841122",
        "menge": "89",
        "imgUrl": "http://georgerrmartin.com/gallery/art/dragons01.jpg"
    },
    {
        "title": "Asterix 38: Die Tochter des Vercingetorix",
        "autor": "Jean-Yves Ferri, Didier Conrad",
        "sprache": "Deutsch",
        "genre": "Comic, Humor, Fiction",
        "verlag": "Egmont Comic Collection",
        "auflage": "1.",
        "Typ": "Gebunden",
        "seiten": "48",
        "preis": "12.00",
        "ISBN": "13-9783770436385",
        "menge": "13",
        "imgUrl": "https://assets.thalia.media/img/artikel/2cdd9b9e24100f2de179f38f8a4d9affeec3fce5-00_BF2000-2000.jpeg"
    },
    {
        "title": "Der große Gatsby",
        "autor": "F. Scott Fitzgerald",
        "sprache": "Deutsch",
        "genre": "Roman, Tragödie",
        "verlag": "Diogenes",
        "auflage": "2.",
        "Typ": "Kartoniert",
        "seiten": "248",
        "preis": "10.90",
        "ISBN": "13-9783257236927, 10-3257236921",
        "menge": "249",
        "imgUrl": "https://media.hugendubel.de/shop/coverscans/660/6609481_6609481_xl.jpg"
    },
    {
        "title": "Animal Farm",
        "autor": "George Orwell",
        "sprache": "Englisch",
        "genre": "Satire",
        "verlag": "Heinemann",
        "auflage": "2nd",
        "Typ": "Gebunden",
        "seiten": "396",
        "preis": "13.00",
        "ISBN": "13-9780435121655, 10-0435121650",
        "menge": "1",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/71KwxR7P0lL.jpg"
    },
    {
        "title": "The Lord of the Rings",
        "autor": "J. R. R. Tolkien",
        "sprache": "Englisch",
        "genre": "Fantasy",
        "verlag": "HarperCollins Publishers",
        "auflage": "Illustrated Slipcased edition",
        "Typ": "Gebunden",
        "seiten": "1244",
        "preis": "65.00",
        "ISBN": "13-9780007525546, 10-0007525540",
        "menge": "24",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51rky5-skhL.jpg"
    },
    {
        "title": "Grimms Märchen",
        "autor": "Wilhelm Grimm, Jacob Grimm",
        "sprache": "Deutsch",
        "genre": "Fantasy, Horror, Kinder",
        "verlag": "Fritzkatz Productions",
        "auflage": "57.",
        "Typ": "Gebunden",
        "seiten": "664",
        "preis": "24.80",
        "ISBN": "13-9783942764018, 10-3942764016",
        "menge": "36",
        "imgUrl": "https://media.hugendubel.de/shop/coverscans/280/28060883_9783942764018_xl.jpg"
    },
    {
        "title": "Murder on the Orient Express",
        "autor": "Agatha Cristie",
        "sprache": "Englisch",
        "genre": "Krimi",
        "verlag": "HarperCollins UK",
        "auflage": "10th",
        "Typ": "Gebunden",
        "seiten": "240",
        "preis": "14.99",
        "ISBN": "13-9780008226664, 10-0008226660",
        "menge": "45",
        "imgUrl": "https://bilder.buecher.de/produkte/48/48473/48473286z.jpg"
    },
    {
        "title": "Die Geschichte der Bienen",
        "autor": "Maja Lunde",
        "sprache": "Deutsch",
        "genre": "Roman",
        "verlag": "btb",
        "auflage": "1.",
        "Typ": "Kartoniert, Gebunden, Taschenbuch",
        "seiten": "528",
        "preis": "10.99, 20.99, 8.99",
        "ISBN": "13-9783442717415, 10-3442717418",
        "menge": "150",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41jueOnweQL.jpg"
    },
    {
        "title": "Die Geschichte des Wassers",
        "autor": "Maja Lunde",
        "sprache": "Deutsch",
        "genre": "Roman",
        "verlag": "btb",
        "auflage": "1.",
        "Typ": "Kartoniert, Gebunden, Taschenbuch",
        "seiten": "480",
        "preis": "10.99, 20.99, 8.99",
        "ISBN": "13-9783442718313, 10-3442718317",
        "menge": "189",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/81JKiaVdKhL.jpg"
    },
    {
        "title": "What if? Was wäre wenn?",
        "autor": "Randall Munroe",
        "sprache": "Deutsch",
        "genre": "Wissenschaft, Hobby",
        "verlag": "Knaus",
        "auflage": "3.",
        "Typ": "Taschenbuch",
        "seiten": "368",
        "preis": "9.99",
        "ISBN": "13-9783328100317, 10-3328100318",
        "menge": "364",
        "imgUrl": "https://assets.thalia.media/img/artikel/8ba422c5a55a6f3267d9b7984ab81a2549ba888f-00-00.jpeg"
    },
    {
        "title": "Der Insasse",
        "autor": "Sebastian Fitzek",
        "sprache": "Deutsch",
        "genre": "Thriller, Mistery",
        "verlag": "Droemer HC",
        "auflage": "9.",
        "Typ": "Gebunden",
        "seiten": "384",
        "preis": "22.99",
        "ISBN": "13-9783426281536, 10-3426281538",
        "menge": "98",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41EGNYXlMxL.jpg"
    },
    {
        "title": "Becoming",
        "autor": "Michelle Obama",
        "sprache": "Ensglisch",
        "genre": "Memoire",
        "verlag": "Random House LCC US",
        "auflage": "1.",
        "Typ": "Gebunden",
        "seiten": "428",
        "preis": "17.09",
        "ISBN": "13-9781524763138, 10-1524763136",
        "menge": "56",
        "imgUrl": "https://media.hugendubel.de/shop/coverscans/319/31910958_9781524763138_xl.jpg"
    },
    {
        "title": "Permanent Record",
        "autor": "Edward Snowden",
        "sprache": "Deutsch",
        "genre": "Memoire",
        "verlag": "S. Fischer",
        "auflage": "3.",
        "Typ": "Gebunden",
        "seiten": "432",
        "preis": "22.00",
        "ISBN": "13-9783103974829, 10-3103974825",
        "menge": "232",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/91IDevyZc0L.jpg"
    },
    {
        "title": "Der Ernährungskompass",
        "autor": "Bas Kast",
        "sprache": "Deutsch",
        "genre": "Selbst-Hilfe, Hobby, Wissenschaft",
        "verlag": "C. Bertelsmann",
        "auflage": "Originalausgabe",
        "Typ": "Gebunden",
        "seiten": "320",
        "preis": "21.99",
        "ISBN": "13-9783570103197, 10-3570103196",
        "menge": "321",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/81A7JVl7%2BfL.jpg"
    },
    {
        "title": "Das Schmetterlingszimmer",
        "autor": "Lucinda Riley",
        "sprache": "Deutsch",
        "genre": "Roman",
        "verlag": "Goldmann",
        "auflage": "1.",
        "Typ": "Taschenbuch",
        "seiten": "672",
        "preis": "15.90",
        "ISBN": "13-9783442485819, 10-3844534997",
        "menge": "9",
        "imgUrl": "https://assets.thalia.media/img/artikel/6d8b10192c0a5a434f9a518b230a3f32a5b2dfd6-00_BF2000-2000.jpeg"
    },
    {
        "title": "Die exige Toten",
        "autor": "Simon Beckett",
        "sprache": "Deutsch",
        "genre": "Thriller",
        "verlag": "Wunderlich",
        "auflage": "6.",
        "Typ": "Gebunden",
        "seiten": "480",
        "preis": "22.95",
        "ISBN": "13-9783805250023, 10-3805250029",
        "menge": "65",
        "imgUrl": "https://media.hugendubel.de/shop/coverscans/342/34200336_9783805250023_xl.jpg"
    },
    {
        "title": "Nächte, in denen Sturm aufzieht",
        "autor": "Jojo Moyes",
        "sprache": "Deutsch",
        "genre": "Roman",
        "verlag": "Rowolth Polaris",
        "auflage": "8.",
        "Typ": "Kartoniert",
        "seiten": "480",
        "preis": "16.99",
        "ISBN": "13-9783499276392, 10-3499276399",
        "menge": "98",
        "imgUrl": "https://media.hugendubel.de/shop/coverscans/342/34208525_9783499276392_xl.jpg"
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
    let h4 = document.createElement("h6");
    h4.textContent = title;
    h4.style.textDecoration = "underline";
    td.appendChild(h4);
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
    p.textContent = "Preis: " + Number.parseFloat(preis).toFixed(2) + "€";
    let tr4 = tr.cloneNode(false);
    tr4.classList.add("menge");
    table.appendChild(tr4);
    let td6 = td.cloneNode(false);
    td6.setAttribute("colspan", 2);
    tr4.appendChild(td6);
    let p2 = p.cloneNode(false);
    p2.textContent = "Quantität: " + menge;
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

    setBooksToDisplay(books) {
        if (books.length > 0) {
            this.currentPage = 1;
        } else {
            this.currentPage = 0;
        }
        this.startInput = 0;
        this.booksToDisplay = books;
        this.totalPages = Math.ceil(this.booksToDisplay.length / this.elementsPerPage);
        this.initializeButtons();
        this.render();
    }

    render() {
        let catalog = document.querySelectorAll(".catalog")[0];
        catalog.innerHTML = "";
        if (this.currentPage == 0) {
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
        if (this.currentPage == 0) {
            document.getElementsByClassName("pagination")[0].style.visibility = "hidden";
            return;
        } else {
            document.getElementsByClassName("pagination")[0].style.visibility = "visible";
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

let paginator = new Paginator(books);

//Search
let search = document.getElementById("search");
search.addEventListener("keyup", function () {
    let searchValue = search.value;
    if (searchValue === "") {
        paginator.setBooksToDisplay(books);
    }
    let filteredBooks = [];
    for (const book of books) {
        if (book.title.toLowerCase().includes(searchValue.toLowerCase()) || book.autor.toLowerCase().includes(searchValue.toLowerCase())) {
            filteredBooks.push(book);
        }
    }
    paginator.setBooksToDisplay(filteredBooks);
});

