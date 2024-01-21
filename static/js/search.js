$(document).ready(function () {
    $(".address").suggestions({
        token: "fea21723f29d95684f4a28f1513ff9070b65b03d",
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function (suggestion) {
            console.log(suggestion);
        }
    });
});