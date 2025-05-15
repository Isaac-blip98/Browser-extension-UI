

function togglemode() {
  document.body.classList.toggle("darkmode");
  const icon = document.querySelector(".icon img");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "./assets/images/icon-moon.svg";
    icon.alt = "Light Mode";
  } else {
    icon.src = "./assets/images/icon-sun.svg";
    icon.alt = "Dark Mode";
  }
  document.body.classList.toggle("lightmode");
  if (document.body.classList.contains("darkmode")) {
    document.getElementById("lightmode").style.display = "block";
    document.getElementById("darkmode").style.display = "none";
  } else {
    document.getElementById("lightmode").style.display = "none";
    document.getElementById("darkmode").style.display = "block";
  }
}
let items = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
for (i in items) {
  document.getElementById("card").innerHTML += `
    <div class="item">
        <div class='identity'>
            <img src="${items[i].logo}" alt="${items[i].name} logo" class="logo">
            <div class='description'>
                <h3>${items[i].name}</h3>
                <p>${items[i].description}</p>
            </div>
        </div>
        <div class='controls'>
            <button class='btn' >Remove</button>
            <div class='btn1' id ="btn1" ">
               <div class='toggle' id='toggle' ></div>
            </div>
        </div>
    </div>`;
  // if (items[i].isActive ) {
  //   document.getElementById("btn1").style.backgroundColor = "#f55a56";
  //   document.getElementById("toggle").style.transform = "translateX(20px)";
  // }

}




