$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    $( "#sidebar" ).load( "sidebar.html" );

   
});
