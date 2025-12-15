import { createNavigationBar } from "../../src/components/JS/navigation.js";
import { createMainAsideBar, openAsideBar } from "../../src/components/JS/asideBar.js";
import { HTMLRoadmapEN } from "../../src/components/JS/asideBarContent/EN/HTML.js";
// current language
let lang = 'En'
// create navigationvar
createNavigationBar();
// create mani asidebar
createMainAsideBar();
// get all titles
const roadmaps = {
  Fa: {},
  En: { HTML: HTMLRoadmapEN }
}
const titles = document.getElementsByClassName("main-title")
for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function (item) {
    openAsideBar(roadmaps[lang][item.target.innerText])
  })
};
