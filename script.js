const data = [
    { id: 1, name: "דסקטופ", value: "דסקטופ", img: "https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2020/12/16/16081297527953_b.jpeg" },
    { id: 2, name: "מגה פלאזמה וידאו", value: "",img:"https://unfurlmedia.com/wp-content/uploads/2019/03/DIGITAL-MARKETING-TOOLS.jpg" },
    { id: 3, name: "מגה פלאזמה", value: "" ,img:"https://miro.medium.com/max/2400/1*NLoUfqTzlgN3BDGnD7V1Wg.jpeg"},
    { id: 4, name: "פלאזמה", value: "" ,img:"https://miro.medium.com/max/875/1*2kIEtclEK9k8wwWbNsZL8Q.jpeg"},
    { id: 5, name: "אינרבוקס", value: "אינרבוקס" ,img:".com/images?q=tbn:ANd9GcTwu30hF_Pa44a1r_sIka6CNk73PajBlipUWVO1RTDQYYqmj22um2SZwp3mvfGJg26Fo8k" },
    { id: 6, name: "מגה מגדל", value: "" ,img:"https://miro.medium.com/max/875/1*2kIEtclEK9k8wwWbNsZL8Q.jpeg" },
    { id: 7, name: "אוזן מגדל", value: "" , img: "https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2020/12/16/16081297527953_b.jpeg"  },
    { id: 8, name: "קוביה בעמוד הבית", value: "" },
    { id: 9, name: "פרירול", value: "פרירול", img: "https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2020/12/16/16081297527953_b.jpeg"  },
]

let itemDesktop = { name: "", img: "", value: "" };
let itemMobile = { name: "", img: "", value: "" };



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
    itemDesktop = data.find(x => x.id === eventId)
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
    itemMobile = data.find(x => x.id === eventId)
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


function showDesktopHTML() {
    document.querySelector('.desktop').innerHTML = `<div id="desktop">
     <img src="assets/desktop-desktop.png" class="rounded" alt="">
     <div class="showItems row">
     <div class="col-4">${itemDesktop.name}</div>
     <div  class="col-8"> <img src=${itemDesktop.img} class="rounded" alt="..."></div>
    
     </div>

     </div>`
}
function showMobilepHTML() {
    document.querySelector('.mobile').innerHTML = `<div id="mobile"> 
     <img src="assets/phone-desctop.png" class="rounded" alt="" >
     <div class="showItemsMobile">
     <div >${itemMobile.name}</div>
     <div  ><img src=${itemMobile.img} class="rounded" alt="..."></div>

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

