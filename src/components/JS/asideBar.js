export function createMainAsideBar() {
  document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', `
  <!-- ASIDEBAR -->
  <aside id="mainAsideBar" class="grid fixed top-0 width-full height-full-vw" style="display: none">
    <div onclick="document.getElementById('mainAsideBar').style.display = 'none';"></div>
    <!-- aside content -->
    <div id="mainAsideBarContent" class="flex flex-column overflow-auto  height-full-vw">
      <nav class="flex" dir="rtl">
        <!-- Close aside bar button -->
        <div id="closeAsideButton" onclick="document.getElementById('mainAsideBar').style.display = 'none';" class="button relative border-none user-select-none font-bold bg-gray"><span
            class="absoloute">/</span>
          <span>\\</span>
        </div>
      </nav>
      <br>
      <!-- title aside -->
      <h2 id="mainAsideTitle" class="font-bold"></h2>
      <p id="mainAsideDescription"></p>
      <br>
      <section id="freeResourcesSection">
        <div id="freeResourcesLable"
          class="relative flex align-items-center justify-content-center width-content font-bold bg-white">💚 Free
          Resources</div>
        <ul id="freeResourcesList" class="list-type-none flex flex-column"></ul>
      </section>
    </div>
  </aside>
`);
};
// Inserting asideBar content
export function openAsideBar(contentObj) {
  document.getElementById('mainAsideBar').style.display = ''
  document.getElementById("freeResourcesList").innerHTML = ''
  document.getElementById("mainAsideTitle").innerText = contentObj.title
  document.getElementById("mainAsideDescription").innerText = contentObj.description
  function listItems(type, link) {
    let lable = type[0].toUpperCase() + type.slice(1);
    document.getElementById("freeResourcesList").insertAdjacentHTML('beforeend', `
        <li class="freeResourcesItem">
            <div class="${type}-lable">${lable}</div>
            <a href="${link.link}">${link.text}</a>
        </li>`)
  }
  Object.entries(contentObj.freeResources).forEach(Item => {
    // get object element
    Item[1].forEach(value => {
      listItems(Item[0], value)
    })
  });
}