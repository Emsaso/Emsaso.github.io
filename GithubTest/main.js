var body, cont, para, image, link;

body = document.body;

cont = document.createElement("div");
cont.className = "container";
body.appendChild(cont);

para = document.createElement("p");
para.innerHTML = "Først lag en github bruker.";
cont.appendChild(para);
image = document.createElement("img");
image.src = "assets/img1.png"
cont.appendChild(image);
para = document.createElement("p");
para.innerHTML = "Så lager man ett repository med navnet {USERNAME}.github.io - (Jeg får rødt, siden jeg allerede har laget det).";
cont.appendChild(para);
image = document.createElement("img");
image.src = "assets/img2.png"
cont.appendChild(image);
para = document.createElement("p");
para.innerHTML = "Deretter lager man ett folder med navnet på prosjektet (f.eks. \"GithubTest\").";
cont.appendChild(para);
image = document.createElement("img");
image.src = "assets/img3.png"
cont.appendChild(image);
para = document.createElement("p");
para.innerHTML = "Når man har gjort det, kan man bare lage en HTML fil (med Javascript og CSS).";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Så bare dropper du folder'n du lagde inn i repository'et, og trykker \"Commit changes\" (Det kan ta en stund før endringene lagrer seg).";
cont.appendChild(para);
image = document.createElement("img");
image.src = "assets/img4.png"
cont.appendChild(image);
para = document.createElement("p");
para.innerHTML = "Da trenger du bare å gå inn i mappa, så står nettaddressen rett over filene.";
cont.appendChild(para);
image = document.createElement("img");
image.src = "assets/img5.png"
cont.appendChild(image);
para = document.createElement("p");
para.innerHTML = "Til slutt trenger du bare å legge til /index (hvis det er det du kalte hovedsiden din. den kan også hete home, main eller noe liknende...).";
cont.appendChild(para);
image = document.createElement("img");
image.src = "assets/img6.png"
cont.appendChild(image);
para = document.createElement("p");
para.innerHTML = "Og da burde du være ferdig";
para.className = "rainbow";
cont.appendChild(para);
link = document.createElement("a");
link.href = "apekatt.html";
link.innerHTML = "Du kan også linke til andre filer eller nettsider. Her linker jeg til apekatt.html ved å ha en &lt;a href=\"apekatt.html\"&gt;TEKST&lt;/a&gt;";
cont.appendChild(link)