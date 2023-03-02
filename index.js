const menuItems = document.querySelectorAll(".menu-item");
const mesagesNotification = document.getElementById("messages-notifications");
const message = document.querySelector(".messages");

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
mesagesNotification.addEventListener("click", () => {
  document.querySelector(
    "#messages-notifications .notification-count"
  ).style.display = "none";
  message.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    message.style.boxShadow = "none"
  }, 2000)
});
