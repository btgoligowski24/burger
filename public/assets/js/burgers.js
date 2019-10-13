// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    $("#availBurgers .updateBurger").on("click", function (event) {
        const id = $(this).data("id");
        const newDevouredVal = $(this).data("newdevouredstate");
        const newDevouredObj = {
            devoured: newDevouredVal
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredObj
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    // Creates another burger when the button in this card is clicked
    $("#eatenBurgers .updateBurger").on("click", function (event) {
        const newBurger = {
            burger_name: $(this).data("burgername"),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});