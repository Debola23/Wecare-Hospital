function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


function openPopup() {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("overlay").style.display = "block";
//code to close side bar when login pop's up
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
   
}

function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

$(document).ready(function(){

    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu= $(this).parent().find('.submenu');    
        submenu.fadeIn(200); 
    
        $('.hideOnMobile').on('mouseleave', function(){
            submenu.fadeOut(200);
        })
    })
    
    })

    
   
