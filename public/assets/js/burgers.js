$(function(){
    $(".change-devoured").on("click", event => {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        var newDevourSate = {
            devoured: newDevour
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourSate
        }).then(
            ()=>{
                console.log("changed devour state to ", newDevour);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", event => {
        event.preventDefault();
        var newBurger = {
            name: $("burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(()=>{
            console.log("created new cat");
            location.reload();
        });
    });
});