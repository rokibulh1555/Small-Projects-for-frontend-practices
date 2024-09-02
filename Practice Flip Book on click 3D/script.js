$(document).ready(function () { 
    $('#btnUncheckAll').click(function () { 
        $('input[type=checkbox]').each( 
          function (index, checkbox) { 
            if (index != -1) { 
                checkbox.checked = false; 
            } 
        }); 
    }); 
}); 