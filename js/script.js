let notesArray = [ 
    {title: "note one", body: "some text 1"},
    {title: "note two", body: "some text 2"}
]

let save_button = () => {
    let textInput = document.getElementById("user_notes").value.split("\n");
    //console.log(textInput);
    if (textInput == [""]){
        //pass, don't do anything if there's no input in textarea
    } else {
        let titleText = textInput[0];  // titleText will be the 1st line
        let bodyText = "";
        for (let i = 1; i < textInput.length; i++){    // Concatenate to bodyText
            bodyText = bodyText + textInput[i];
        notesArray.push({title: titleText, body: bodyText});
        }
    
        // debug notesArray
        /*
        for (let i = 0; i < notesArray.length; i++){
            console.log(notesArray[i]);
        }
        */
        
        let newListElement = document.createElement("li");
        newListElement.textContent = titleText;
        notes_list.appendChild(newListElement);
    }

}
