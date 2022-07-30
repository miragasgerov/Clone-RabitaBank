var onlaynModal = document.querySelector(".onlaynModal");
var davamBtn = document.getElementById("davamBtn");
var closeBtn = document.querySelector(".close-btn");

// function toggleModal() {
//     onlaynModal.classList.toggle("show-modal");
// }

davamBtn.addEventListener("click" , function(e) {
    e.preventDefault();


    onlaynModal.classList.toggle("show-modal");
})


closeBtn.addEventListener("click" , (e) => {
    e.preventDefault();

    onlaynModal.classList.toggle("show-modal");

})




