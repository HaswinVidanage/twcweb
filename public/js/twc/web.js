var servicesGroup = $(".menu-group");
var navnMenuMobile = $("nav.menu .menu-mobile");
var  iconMenu = navnMenuMobile.find(".icon-menu");

// $(window).click(function() {
//   if(servicesGroup.hasClass("open" )){
//     servicesGroup.removeClass("open");
//   }
//
//   if(navnMenuMobile.hasClass("open" )){
//     navnMenuMobile.removeClass("open");
//     console.log('had class removed ');
//   }
//
// });
//

$(document).mouseup(function(e)
{
    var container = servicesGroup;

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass("open");
        event.stopPropagation();
    }

    container = navnMenuMobile;
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass("open");
        event.stopPropagation();
    }

});

servicesGroup.click(() => {
  if(!servicesGroup.hasClass("open" )){
    servicesGroup.addClass("open");
    event.stopPropagation();
  }
});



iconMenu.on("click touch", function(e) {
        navnMenuMobile.addClass("open");
        e.stopPropagation();
    });


mobileContainer = navnMenuMobile.find(".menu-mobile-container");
iconClose = mobileContainer.find(".icon-close");

iconClose.on("click touch", function(e) {
        navnMenuMobile.removeClass("open");
        e.stopPropagation();
        console.log('all');
    });

    //     var n = $("nav.menu .menu-mobile"),
    //         e = n.find(".icon-menu"),
    //         r = n.find(".menu-mobile-container"),
    //         i = r.find(".icon-close"),
    //         u = function() {
    //             return n.removeClass("open")
    //         };
    //     e.on("click touch", function(t) {
    //         t.stopPropagation(), n.addClass("open")
    //     }), r.on("click touch", function(t) {
    //         t.stopPropagation()
    //     }), i.on("click", u), o["default"].clickOutside(u)

// function i() {
//     var t = $("nav.menu .menu-desktop .menu-group");
//     o["default"].clickOutside(function() {
//         return t.removeClass("open")
//     }), t.on("click", function(t) {
//         t.stopPropagation(), $(this).addClass("open")
//     });
//     var n = $("nav.menu .menu-mobile"),
//         e = n.find(".icon-menu"),
//         r = n.find(".menu-mobile-container"),
//         i = r.find(".icon-close"),
//         u = function() {
//             return n.removeClass("open")
//         };
//     e.on("click touch", function(t) {
//         t.stopPropagation(), n.addClass("open")
//     }), r.on("click touch", function(t) {
//         t.stopPropagation()
//     }), i.on("click", u), o["default"].clickOutside(u)
// }
