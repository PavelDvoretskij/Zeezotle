import $ from "jquery";

export default function modal($modalWindow) {
  $modalWindow.fadeIn(500);
  $("body").addClass("background");

  $(".modal__close").on("click", function () {
    $modalWindow.fadeOut(500);
    $("body").removeClass("background");
  });

  $(document).mouseup(function (e) {
    if (!$modalWindow.is(e.target) && $modalWindow.has(e.target).length === 0) {
      $modalWindow.fadeOut(500);
      $("body").removeClass("background");
    }
  });
}
