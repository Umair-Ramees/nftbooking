var totalSteps = 4;

    $("#carouselExampleControls").carousel();
    $("#carouselExampleControls").on("slide.bs.carousel", function(e) {
    //update progress
    var step = $(e.relatedTarget).data("step");
    var percent = (parseInt(step) / totalSteps) * 100;

    $(".progress-bar").css({ width: percent + "%" });
    });