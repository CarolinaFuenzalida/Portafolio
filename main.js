import data from "./projects.js"
// Variables de data
const allProjects = data.projects
const [p1, p2, p3, p4] = allProjects;
const titles = data.projects.map(data => data.name);
const descriptions = data.projects.map(data => data.about);
const dates = data.projects.map(data => data.time);
const pictures = data.projects.map(data => data.image);
const demoLinks = data.projects.map(data => data.demo);
const repoLinks = data.projects.map(data=> data.repo);
let projectCards = "";

window.addEventListener("load", createProjectCards);
function createProjectCards() {
    document.getElementById("mainProjects").innerHTML = "";
    for(let i = 0; i < allProjects.length; i++){
        projectCards = `
        <div id="projectCont">
        <div id="titleCont">
        <div class="hideAndShow">
        <a class="linkIcon" href="${demoLinks[i]}" target="_blank"><img src="https://www.freeiconspng.com/thumbs/site-internet-icon/www-web-site-internet-icon-0.png"></a>
        <p class ="hideP" >Demo</p> </div>
            <h1>${titles[i]}</h1>
         <div class ="hideAndShow">
        <a class="linkIcon" href="${repoLinks[i]}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></a>
        <p class ="hideP">Repositorio</p> </div>
        </div>
        <div id="projectBodyCont">
            <div id="projectImg"><img  src="${pictures[i]}"></div>
            <div id="projectInfoCont">
                <p>${descriptions[i]}</p>
                <p>${dates[i]}</p>
                <div id="tools">
                </div>
                <div id="btnCont">
                    
                    
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById("mainProjects").innerHTML += projectCards;
    }
}