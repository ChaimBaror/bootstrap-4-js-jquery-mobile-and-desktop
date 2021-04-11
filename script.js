const data = [
    { id: 1, name: "דסקטופ", value: "דסקטופ" },
    { id: 2, name: "מגה פלאזמה וידאו", value: "" },
    { id: 3, name: "מגה פלאזמה", value: "" },
    { id: 4, name: "פלאזמה", value: "" },
    { id: 5, name: "אינרבוקס", value: "אינרבוקס" },
    { id: 6, name: "מגה מגדל", value: "" },
    { id: 7, name: "אוזן מגדל", value: "" },
    { id: 8, name: "קוביה בעמוד הבית", value: "" },
    { id: 9, name: "פרירול", value: "פרירול" },
]

let itemDesktop = "";
let itemMobile = "";



function menuItemsList() {
    DesktopHtml = '';
    data.map(data => {
        DesktopHtml += `<div class="list" onclick=clickedDesktop(${data.id})>${data.name} </div>`;
    })
    return DesktopHtml;
}

function menuItemsListOfMobile() {
    DesktopHtml = '';
    data.map(data => {
        DesktopHtml += `<div class="list listOfMobile" onclick=clickedOfMobile(${data.id})>${data.name} </div>`;
    })
    return DesktopHtml;
}


function menuItemsSelect() {
    DesktopHtml = '<select name="menu" id="menu">';
    data.map(data => {
        DesktopHtml += `<option value="${data.value}">${data.name}</option>`;
    })
    return DesktopHtml + "</select>";
}


function clickedDesktop(eventId) {
    itemDesktop = data.find(x => x.id === eventId).name
    console.log("clicked", itemDesktop);
    showDesktopHTML()

    //this is jquery  active
    $(document).ready(function () {
        $(".list").click(function () {
            $(".list").removeClass("active");
            $(this).addClass("active");
        });
    });
}

function clickedOfMobile(eventId) {
    itemMobile = data.find(x => x.id === eventId).name
    console.log("clickedOfMobile", itemMobile);
    showMobilepHTML()

    //this is jquery  active
    $(document).ready(function () {
        $(".listOfMobile").click(function () {
            $(".listOfMobile").removeClass("active");
            $(this).addClass("active");
        });
    });
}


function showItems() {
    return `<div class="showItems">${itemDesktop}</div>`
}
function showItemsMobile() {
    return `<div class="showItemsMobile">${itemMobile}</div>`
}

function showDesktopHTML() {
    document.querySelector('.desktop').innerHTML = `<div class="desktop">
     <img src="assets/desktop-desktop.png" class="rounded" alt="">
     ${showItems()}
     </div>`
}
function showMobilepHTML() {
    document.querySelector('.mobile').innerHTML = `<div class="mobile"> 
     <img src="assets/phone-desctop.png" class="rounded" alt="" >
     ${showItemsMobile()}
     </div>`

}
document.querySelector('.desktopMenu').innerHTML = menuItemsList()
document.querySelector('.mobileMenu').innerHTML = menuItemsListOfMobile()

showDesktopHTML()
showMobilepHTML()


//this is jquery  resize
$(window).resize(function () {

    var width = $(window).width();
    console.log("resize");

    if (width > 600) {
        console.log("resize desktop");
        $("#desktop img").each(function (index) {
            $(this).attr("src", "assets/desktop-desktop.png")
        })
        $("#mobile img").each(function (index) {
            $(this).attr("src", "assets/phone-desctop.png")
        })
        document.querySelector('.desktopMenu').innerHTML = menuItemsList()
        document.querySelector('.mobileMenu').innerHTML = menuItemsList()

    }
    else {
        console.log("resize mobile");
        $("#desktop img").each(function (index) {
            $(this).attr("src", "assets/desktop-mobile.png")
        })
        $("#mobile img").each(function (index) {
            $(this).attr("src", "assets/phone-mobile.png")
        })
        document.querySelector('.desktopMenu').innerHTML = menuItemsSelect()
        document.querySelector('.mobileMenu').innerHTML = menuItemsSelect()

    }
});

