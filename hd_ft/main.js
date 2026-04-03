function loadHTML(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load chung cho mọi trang
loadHTML("header", "hd_ft/header.html");
loadHTML("footer", "hd_ft/footer.html");
