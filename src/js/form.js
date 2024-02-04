import $ from "jquery";
import modal from "./modal";

$(function () {
  const $recipientForm = $(".modal__form");
  const $contactsForm = $(".contacts__form");

  $(".header__btn").on("click", function () {
    modal($(".header-modal"));
  });

  $recipientForm.on("submit", function (e) {
    e.preventDefault();

    const validName = /^[A-Za-zа-яА-ЯёЁ _-]{2,}/.test($(".form__name").val());
    const validMess = /^.{5,}/.test($(".form__message").val());

    const valid = {
      ".form__name": validName,
      ".form__message": validMess,
    };

    let arrValid = [];

    for (const item in valid) {
      arrValid.push(valid[item]);

      if (!valid[item]) {
        $(item).css("backgroundColor", "#fcd2d2");
      } else {
        $(item).css("backgroundColor", "transparent");
      }
    }

    if (!arrValid.some((item) => !item)) {
      const data = $recipientForm.serialize();
      $.get(e.target.action, data, function (res) {
        console.log(res);
        $(".form__submit").replaceWith(
          `<h5 class="success">Столик забронирован</h5>`
        );
      });
    }
  });

  $contactsForm.on("submit", function (e) {
    e.preventDefault();

    const validMess = /^.{5,}/.test($(".contacts__input_message").val());
    const validName = /^[A-Za-zа-яА-ЯёЁ _-]{2,}/.test(
      $(".contacts__input_name").val()
    );
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(
      $(".contacts__input_email").val()
    );

    const valid = {
      ".contacts__input_name": validName,
      ".contacts__input_email": validEmail,
      ".contacts__input_message": validMess,
    };

    let arrValid = [];

    for (const item in valid) {
      arrValid.push(valid[item]);

      if (!valid[item]) {
        $(item).css("backgroundColor", "#fcd2d2");
      } else {
        $(item).css("backgroundColor", "transparent");
      }
    }

    if (!arrValid.some((item) => !item)) {
      const data = $contactsForm.serialize();
      $.get(e.target.action, data, function (res) {
        console.log(res);
        modal($(".contacts-modal"));
      });
    }
  });
});
