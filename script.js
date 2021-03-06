$(document).ready(function () {

    WidthChange();
    showDesktopHTML()
    showMobilepHTML()

    $(window).resize(function () {
        WidthChange();
    });

    $(".clickedDesktop").click(function () {
        console.log("clickedDesktop", $(this).text());
        $(".clickedDesktop").removeClass("active");
        $(this).addClass("active");
    });
    $(".listOfMobile").click(function () {
        $(".listOfMobile").removeClass("active");
        $(this).addClass("active");
    });
});
function WidthChange() {

    if ($(window).width() > 600) {
        $("#desktop #imgDesktop").each(function (index) {
            $(this).attr("src", "assets/desktop-desktop.png")
        })
        $("#imgMobile").each(function (index) {
            $(this).attr("src", "assets/phone-desctop.png")
        })
        $(".desktopMenu").html(menuItemsList())
        $(".mobileMenu").html(menuItemsListOfMobile())

    }
    else {
        $("#desktop #imgDesktop").each(function (index) {
            $(this).attr("src", "assets/desktop-mobile.png")
        })
        $("#mobile #imgMobile").each(function (index) {
            $(this).attr("src", "assets/phone-mobile.png")
        })
        $(".desktopMenu").html(menuItemsSelect())
        $(".mobileMenu").html(menuItemsSelectMobile())
        $("#myselect").change(function () {
            clickedDesktop(this.value)
        });
        $("#myselectMobile").change(function () {
            clickedOfMobile(this.value)
        });

    }
}


const data = [
    { id: 1, name: "דסקטופ", value: "דסקטופ", img: "https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2020/12/16/16081297527953_b.jpeg" },
    { id: 2, name: "מגה פלאזמה וידאו", value: "", img: "https://unfurlmedia.com/wp-content/uploads/2019/03/DIGITAL-MARKETING-TOOLS.jpg" },
    { id: 3, name: "מגה פלאזמה", value: "", img: "https://miro.medium.com/max/2400/1*NLoUfqTzlgN3BDGnD7V1Wg.jpeg" },
    { id: 4, name: "פלאזמה", value: "", img: "https://miro.medium.com/max/875/1*2kIEtclEK9k8wwWbNsZL8Q.jpeg" },
    { id: 5, name: "אינרבוקס", value: "אינרבוקס", img: "https://lh3.googleusercontent.com/proxy/NKcGbgiF-EI5A4WQsWyPLVXv5m-Yq7mbHaLBcvjpiSOJuTnUak55Z__JmkOicWJtgV4Tav9NBZJCktVb_cJ2eVS77EDb4QGnObH6NqP-EujsDkLxY7I" },
    { id: 6, name: "מגה מגדל", value: "", img: "https://miro.medium.com/max/875/1*2kIEtclEK9k8wwWbNsZL8Q.jpeg" },
    { id: 7, name: "אוזן מגדל", value: "", img: "https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2020/12/16/16081297527953_b.jpeg" },
    { id: 8, name: "קוביה בעמוד הבית", value: "", img: "https://lh3.googleusercontent.com/proxy/NKcGbgiF-EI5A4WQsWyPLVXv5m-Yq7mbHaLBcvjpiSOJuTnUak55Z__JmkOicWJtgV4Tav9NBZJCktVb_cJ2eVS77EDb4QGnObH6NqP-EujsDkLxY7I" },
    { id: 9, name: "פרירול", value: "פרירול", img: "https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2020/12/16/16081297527953_b.jpeg" },
]

let itemDesktop = data[0];
let itemMobile = data[0];

function menuItemsList() {
    return data.map(data => {
        return `<div class="list clickedDesktop" value=${data.id} onclick=clickedDesktop(${data.id})>${data.name} </div>`;
    })
}

function menuItemsListOfMobile() {
    return data.map(data => {
        return `<div class="list listOfMobile"  onclick=clickedOfMobile(${data.id})>${data.name} </div>`;
    })
}

function menuItemsSelect() {
    let DesktopHtml = `<select name="menu" class="btn btn-outline-secondary dropdown-toggle" id="myselect">
    <option value="" selected disabled hidden>Choose here Desktop</option>`;
    data.map(data => {
        DesktopHtml += `<option value="${data.id}">${data.name}</option>`;
    })
    return DesktopHtml + "</select>";
}

function menuItemsSelectMobile() {
    let MobileHtml = `<select name="menu" class="btn btn-outline-secondary dropdown-toggle" id="myselectMobile">
    <option value="" selected disabled hidden>Choose here Mobile</option>`;
    data.map(data => {
        MobileHtml += `<option value="${data.id}">${data.name}</option>`;
    })
    return MobileHtml + "</select>";
}


function clickedDesktop(eventId) {
    itemDesktop = data.find(x => x.id == eventId)
    showDesktopHTML()
}

function clickedOfMobile(eventId) {
    itemMobile = data.find(x => x.id == eventId)
    showMobilepHTML()
}


function showDesktopHTML() {
    $(".desktop").html(`<div id="desktop">
     <img id="imgDesktop" src="assets/desktop-desktop.png" class="rounded" alt="">
     <div class="showItems row">
     <div class="col-0 col-sm-4">${itemDesktop.name}</div>
     <div  class="col-8 col-sm-8"> <img class="imageDssktop" src=${itemDesktop.img}  alt="..."></div>
     </div>
     </div>`)
}

function showMobilepHTML() {
    $(".mobile").html(`<div id="mobile"> 
     <img id="imgMobile" src="assets/phone-desctop.png" class="imgRounded" alt="" >
     <div class="showItemsMobile">
     <div >${itemMobile.name}</div>
     <div  ><img src=${itemMobile.img} class="rounded" alt="..."></div>
     <div >${itemMobile.name}</div>
     <div  ><img src=${itemMobile.img} class="rounded" alt="..."></div>
     </div>`)
}
















