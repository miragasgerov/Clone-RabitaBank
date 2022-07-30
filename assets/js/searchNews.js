document.getElementById("searchInput").addEventListener("input",filterList)


function filterList(){
    const searchInput = document.getElementById("searchInput");
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll(".newsLi");

    listItems.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    });
}