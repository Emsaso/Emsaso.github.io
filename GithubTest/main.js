var body, cont, para;

body = document.body;

cont = document.createElement("div");
cont.className = "container";
body.appendChild(cont);

para = document.createElement("p");
para.innerHTML = "Først lag en github bruker";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Så lager man ett repository med navnet {USERNAME}.github.io - (Jeg får rødt, siden jeg allerede har laget det)";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Deretter lager man ett folder med navnet på prosjektet (f.eks. \"GithubTest\")";
cont.appendChild(para);
para = document.createElement("p");
para.innerHTML = "Når man har gjort det, kan man bare lage en HTML fil (med Javascript og CSS)";
cont.appendChild(para);