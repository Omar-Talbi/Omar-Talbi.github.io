window.onload = function() {
    document.getElementById("pdfButton")
        .addEventListener("click", () => {
            let delt = document.getElementsByClassName("fc-header-toolbar fc-toolbar fc-toolbar-ltr")[0];
            delt.style.visibility = "hidden";
            const calendar = this.document.getElementById("cal");
            let titre = document.getElementsByTagName("h2")[0];
            calendar.appendChild(titre);
            calendar.insertBefore(titre, calendar.firstChild);

   
}
