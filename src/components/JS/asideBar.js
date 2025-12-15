document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', `
  <!-- ASIDEBAR -->
  <aside id="mainAsideBar" class="grid fixed top-0 width-full height-full-vw">
    <div></div>
    <!-- aside content -->
    <div id="mainAsideBarContent" class="bg-sky flex flex-column overflow-auto  height-full-vw">
      <nav class="flex" dir="rtl" style="background-color: red;">
        <!-- Close aside bar button -->
        <div id="closeAsideButton" class="button relative border-none user-select-none font-bold bg-gray"><span
            class="absoloute">/</span>
          <span>\\</span>
        </div>
      </nav>
      <br>
      <!-- title aside -->
      <h2 id="mainAsideTitle" class="font-bold">Title</h2>
      <p id="mainAsideDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos unde voluptas fugit
        excepturi rem cum facere
        voluptatibus repellat amet quia nobis, odit, dignissimos enim, tempora eligendi non ipsum harum soluta.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos unde voluptas fugit excepturi rem cum facere
      </p>
      <br>
      <section id="freeResourcesSection">
        <div id="freeResourcesLable"
          class="relative flex align-items-center justify-content-center width-content font-bold bg-white">💚 Free
          Resources
        </div>
        <ul id="freeResourcesList" class="list-type-none flex flex-column">
          <li class="freeResourcesItem">
            <div class="roadmap-lable">Roadmap</div>
            <a href="#">ttafsafa</a>
          </li>
          <li class="freeResourcesItem">
            <div class="course-lable">Course</div>
            <a href=""></a>
          </li>
          <li class="freeResourcesItem">
            <div class="video-lable">Video</div>
            <a href=""></a>
          </li>
          <li class="freeResourcesItem">
            <div class="feed-lable">Feed</div>
            <a href=""></a>
          </li>
        </ul>
      </section>
    </div>
  </aside>
`);
