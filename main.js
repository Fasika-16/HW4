let movieArray = [];
let selectedGenre = "";
// define a constructor to create note objects
let MovieObject = function (pTitle, pYear,pGenre) {
    this.title = pTitle;
    this.year = pYear;
    this.genre = pGenre;
}



    document.addEventListener("DOMContentLoaded", function (event) {

        document.getElementById("buttonAdd").addEventListener("click", function () {
    
            movieArray.push(new MovieObject(document.getElementById("title").value, document.getElementById("year").value, selectedGenre
        ));
            console.log(movieArray);
            document.getElementById("title").value = "";
            document.getElementById("year").value = "";
        });
        $(document).bind("change", "#select-genre", function (event, ui) {
            selectedGenre = document.getElementById("select-genre").value;
        });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
});
function createList() {
    
    // clear prior data
    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    movieArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.title + " (" + element.year + "): " + element.genre;
        myul.appendChild(li);
    });
};

