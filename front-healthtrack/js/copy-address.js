//copiei o código daqui: https://actualwizard.com/how-to-copy-text-to-the-clipboard-with-html-and-javascript

function CopyClassText(){
     //select the element with ID = "CopyMeID", can be a div, p, or a span, possibly others
     var textToCopy = document.getElementById("CopyMeID");
 
     //you can target the same element using querySelector() as well
     //example below:
     //var textToCopy = document.querySelector('.CopyMeClass');
 
     //check and see if the user had a text selection range
     var currentRange;
     if(document.getSelection().rangeCount > 0)
     {
          //the user has a text selection range, store it
          currentRange = document.getSelection().getRangeAt(0);
          //remove the current selection
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          //they didn't have anything selected
          currentRange = false;
     }
 
     //create a selection range
     var CopyRange = document.createRange();
     //choose the element we want to select the text of
     CopyRange.selectNode(textToCopy);
     //select the text inside the range
     window.getSelection().addRange(CopyRange);
     //copy the text to the clipboard
     document.execCommand("copy");
 
     //remove our selection range
     window.getSelection().removeRange(CopyRange);
 
     //return the old selection range
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
}