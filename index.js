//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES
const mesagesNotification = document.getElementById("messages-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.getElementById("message-search");

//THEME
//Display Theme
const theme = document.getElementById("theme");
const themeModal = document.querySelector(".customize-theme");
//font size
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
//change color
const colorPalette = document.querySelectorAll(".choose-color span");

//SIDEBAR
//remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "Notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#Notifications .notification-count"
      ).style.display = "none";
    }
  });
});
//SIDEBAR

//MESSAGES
// Search messages
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

// remove message alert and highlighted messages card when message menu item is clicked
mesagesNotification.addEventListener("click", () => {
  document.querySelector(
    "#messages-notifications .notification-count"
  ).style.display = "none";
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
//MESSAGES

// THEME DISPLAY CUSTOMIZATION
// open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
theme.addEventListener("click", openThemeModal);
// open modal

//close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);
//close modal

// font size
// remove active class from spans or font size selector
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}

fontSizes.forEach(size => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    // change font size of the root HTML element
    document.querySelector("html").style.fontSize = fontSize;
  })
})
// font size

//change color
const removeColorPalette = () => {
  colorPalette.forEach(color => {
    color.classList.remove("active")
  })
}
colorPalette.forEach(color => {
  color.addEventListener("click", () => {
    removeColorPalette();
    color.classList.toggle("active");
    if(color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if(color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if(color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if(color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if(color.classList.contains("color-5")) {
      primaryHue = 202;
    } 
    root.style.setProperty("--primary-color-hue", primaryHue);
  })
})

//change color
// THEME DISPLAY CUSTOMIZATION
