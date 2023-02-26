$(document).ready(function(){

    $(document).on("click",".arccodion_btn",function(){
        $(this).parent().next('.arccodion_area').toggleClass('arccodion_show')
    }) 
    
})