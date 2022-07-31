
var onlaynModal = document.querySelector(".onlaynModal");
var davamBtn = document.getElementById("davamBtn");
var closeBtn = document.querySelector(".close-btn");
var loadingModal = document.querySelector(".loadingModal")







davamBtn.addEventListener("click" , function(e) {
    e.preventDefault();


    loadingModal.classList.toggle("show-modal");

    setTimeout(modal,2000);

    onlaynModal.classList.toggle("show-modal");


})

function modal() {
    loadingModal.style.display = "none";
    onlaynModal.style.display = "block"
}


closeBtn.addEventListener("click" , (e) => {
    e.preventDefault();

    onlaynModal.classList.toggle("show-modal");


})




