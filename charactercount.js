define(function (require) {
    
    return {              
        characterCount: function (element,maxLength) {
            var remainingChar = 0;
            var parent = $(element).parent();
            
            var ctrlValue = $(element)[0].textContent || $(element)[0].value
            remainingChar = parseInt(maxLength) - (parseInt(ctrlValue.length));

            var ctrlElement = $(element).attr({
                title: '<span title=\'charLength\'>' + remainingChar + '</span> Remaining'
            });

            ctrlElement.tooltip({
                html: true,                
                show: true,
                trigger: 'focus',               
            });

            $(ctrlElement).tooltip('show');
            
            $(element).bind("focus change keyup input keypress", function (event) {
                if (event.keyCode == 10 || event.keyCode == 13) {                    
                    event.preventDefault();
                    return false;
                }
             
                if (parseInt(remainingChar) <= 0)
                    event.preventDefault();
                                
                ctrlValue =  $(element)[0].textContent || $(element)[0].value
                remainingChar = parseInt(maxLength) - (parseInt(ctrlValue.length));
                if(parent)
                    $(parent).find('span[title="charLength"]').html(
                        remainingChar
                );                
            });                           
        }       
    };
});
