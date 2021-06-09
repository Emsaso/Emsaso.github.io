var body, cont, para;

body = document.body;

cont = document.createElement("div");
cont.className = "container";
body.appendChild(cont);

para = document.createElement("p");
para.innerHTML = "Først lag en github bruker.";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Så lager man ett repository med navnet {USERNAME}.github.io - (Jeg får rødt, siden jeg allerede har laget det).";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Deretter lager man ett folder med navnet på prosjektet (f.eks. \"GithubTest\").";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Når man har gjort det, kan man bare lage en HTML fil (med Javascript og CSS).";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Så bare dropper du folder'n du lagde inn i repository'et.";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Da trenger du bare å gå inn i mappa, så står nettaddressen rett over filene.";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Til slutt trenger du bare å legge til /index (hvis det er det du kalte hovedsiden din. den kan også hete home, main eller noe liknende...).";
cont.appendChild(para);