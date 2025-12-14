// ELEMENTS 
const body = document.getElementsByTagName('body')[0];
body.insertAdjacentHTML('afterbegin', `
  <!-- NAVBAR / navigation bar -->
  <nav id="mainNavBar" class="fixed top-0 width-full flex justify-content-between bg-sky">
    <div id="projectName" style="margin-left: 4vw;" class="user-select-none">Roadmap 🧾</div>
    <!-- moon= &#127769; Sun= 🔆-->
    <div class="flex gap1 margi-right-4">
      <!-- mode dark/light -->
      <div id="modeChanger" class="button border-size-1 user-select-none">🔆</div>
      <!-- language English/Persian -->
      <div id="languageChanger" class="button border-size-1 user-select-none" title="English / Persian">🌍</div>
      <!-- go to the home page -->
      <div id="home" class="button border-size-1 user-select-none"><a href="../../index.html" target="_blank">🏠</a>
      </div>
    </div>
  </nav>
  `)