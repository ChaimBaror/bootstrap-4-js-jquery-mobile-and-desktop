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
    DesktopHtml = '<select name="menu" id="myselect" >';
    data.map(data => {
        DesktopHtml += `<option value="${data.id}">${data.name}</option>`;
    })
    return DesktopHtml + "</select>";
}
function menuItemsSelectMobile() {
    DesktopHtml = '<select name="menu" id="myselectMobile" >';
    data.map(data => {
        DesktopHtml += `<option value="${data.id}">${data.name}</option>`;
    })
    return DesktopHtml + "</select>";
}



function clickedDesktop(eventId) {
    itemDesktop = data.find(x => x.id == eventId)
    showDesktopHTML()
    $(document).ready(function () {
        $(".list").click(function () {
            $(".list").removeClass("active");
            $(this).addClass("active");
        });
    });
}

function clickedOfMobile(eventId) {
    itemMobile = data.find(x => x.id == eventId)
    showMobilepHTML()
    $(document).ready(function () {
        $(".listOfMobile").click(function () {
            $(".listOfMobile").removeClass("active");
            $(this).addClass("active");
        });
    });
}


function showDesktopHTML() {
    $(".desktop").html( `<div id="desktop">
     <img id="imgDesktop" src="assets/desktop-desktop.png" class="rounded" alt="">
     <div class="showItems row">
     <div class="col-4">${itemDesktop.name}</div>
     <div  class="col-8"> <img class="imageDssktop" src=${itemDesktop.img}  alt="..."></div>
     </div>
     </div>`)
}
function showMobilepHTML() {
    $(".mobile").html( `<div id="mobile"> 
     <img id="imgMobile" src="assets/phone-desctop.png" class="rounded" alt="" >
     <div class="showItemsMobile">
     <div >${itemMobile.name}</div>
     <div  ><img src=${itemMobile.img} class="rounded" alt="..."></div>

     </div>`)

}
$(".desktopMenu").html(menuItemsList())
$(".mobileMenu").html(menuItemsListOfMobile())

showDesktopHTML()
showMobilepHTML()

$(window).resize(function () {
    var width = $(window).width();
    if (width > 600) {
        $("#desktop #imgDesktop").each(function (index) {
            $(this).attr("src", "assets/desktop-desktop.png")
        })
        $("#mobile #imgMobile").each(function (index) {
            $(this).attr("src", "assets/phone-desctop.png")
        })
        $(".desktopMenu").html(menuItemsList())
        $(".mobileMenu").html(menuItemsList())
        // document.querySelector('.desktopMenu').innerHTML = menuItemsList()
        // document.querySelector('.desktopMenu').innerHTML = menuItemsList()

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
        // document.querySelector('.desktopMenu').innerHTML = menuItemsSelect()
        $( "#myselect" ).change(function() {
            // alert( this.value );
            clickedDesktop(this.value)
          });
          $( "#myselectMobile" ).change(function() {
            // alert( this.value );
            clickedOfMobile(this.value)
          });

    }
});





