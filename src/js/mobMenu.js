import $ from "jquery";

$(function () {
  {
    const $modalWindow = $(".mob-menu__container ");
    const $menu = $(".mob-menu ");
    const $btn = $(".menu__btn");

    $(document).on("click", function (e) {
      console.log(e.target);
      if (
        !$modalWindow.is(e.target) &&
        $modalWindow.has(e.target).length === 0 &&
        !$btn.is(e.target) &&
        $btn.has(e.target).length === 0
      ) {
        $menu.hide(500);
        $(".menu__burger").removeClass("burger-position");
        $(".menu__burger:eq(0)").removeClass("burger-top");
        $(".menu__burger:eq(1)").removeClass("burger-middle");
        $(".menu__burger:eq(2)").removeClass("burger-bottom");
      }
    });

    $(".menu__btn, .mob-menu__close").on("click", function () {
      $menu.toggle(500);
      $(".menu__burger").toggleClass("burger-position");
      $(".menu__burger:eq(0)").toggleClass("burger-top");
      $(".menu__burger:eq(1)").toggleClass("burger-middle");
      $(".menu__burger:eq(2)").toggleClass("burger-bottom");
    });
  }
});
