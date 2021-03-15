window.onload = function() {
    document.getElementById("pdfButton")
        .addEventListener("click", () => {
            let delt = document.getElementsByClassName("fc-header-toolbar fc-toolbar fc-toolbar-ltr")[0];
            delt.style.visibility = "hidden";
            const calendar = this.document.getElementById("calendar");
            let titre = document.getElementsByTagName("h2")[0];
            calendar.appendChild(titre);
            calendar.insertBefore(titre, calendar.firstChild);
            console.log(calendar);
            console.log(window);
            var opt = {
                filename: 'calendar.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'cm', format: [27, 32], orientation: 'landscape' }
            };
            //html2pdf().from(calendar).set(opt).save();
            setTimeout(() => {
                delt.style.visibility = "visible";
            }, 2000);
        })
}
