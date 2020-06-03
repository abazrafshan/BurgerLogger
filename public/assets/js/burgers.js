$(function(){
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        newDevour = !newDevour;
        var newDevourSate = {
            devoured: newDevour
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourSate
        }).then(
            function() {
                console.log("changed devour state to ", newDevour);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
    });
});