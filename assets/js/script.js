$(document).ready(function(){
    $("#button").click(function(){
        var campListItem = $("input[name=campItem]").val();
        $("ol").append("<li>" + campListItem + "</li>");
        $("input[name=campItem]").val("");
    });
    $("ol").on("dblclick", "li", function(){
        $(this).toggleClass("strike");
    });
    $("ol").sortable();
    $("#datepicker").datepicker({
        onSelect: function(dateText, inst){
            // var formattedDate = moment(dateText).format("MMM Do YY")
            $("#date-text").text(dateText);
        }
    });
});