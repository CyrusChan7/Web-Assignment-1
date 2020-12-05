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

let hide_elements = () => {
    document.getElementById("button_save").style.display= "none";
    document.getElementById("button_cancel").style.display = "none";
    document.getElementById("user_notes").style.display = "none";
}

let reveal_elements = () => {
    document.getElementById("button_save").style.display= "inline-block";
    document.getElementById("button_cancel").style.display = "inline-block";
    document.getElementById("user_notes").style.display = "inline-block";
}

let clearUserTextArea = () => {
    document.getElementById("user_notes").value = "";
}

let changeToNightTheme = () => {
    // decrease all RGB values by 50, making it darker

    let checkChangeThemeText = document.getElementById("change_theme_button");
    if (checkChangeThemeText.innerHTML == "Dark Theme"){
        checkChangeThemeText.innerHTML = "Light Theme";
        document.getElementById("top_header").style.backgroundColor = 'rgb(99, 75, 76)';
        document.getElementById("bottom_footer").style.backgroundColor = 'rgb(172, 138, 135)';
        document.getElementById("sidebar").style.backgroundColor = 'rgb(142, 142, 142)';
        document.getElementById("user_input_text_area").style.backgroundColor = 'rgb(185, 181, 181)';
    
        document.getElementById("button_save").style.backgroundColor = 'rgb(45, 102, 75)';
        document.getElementById("button_cancel").style.backgroundColor = 'rgb(159, 9, 0)';
        document.getElementById("new_note_button").style.backgroundColor = 'rgb(44, 101, 74)';
        document.getElementById("change_theme_button").style.backgroundColor = 'rgb(55, 55, 55)';
    } else if (checkChangeThemeText.innerHTML == "Light Theme"){
        checkChangeThemeText.innerHTML = "Dark Theme";
        document.getElementById("top_header").style.backgroundColor = 'rgb(149, 125, 126)';
        document.getElementById("bottom_footer").style.backgroundColor = 'rgb(222, 188, 185)';
        document.getElementById("sidebar").style.backgroundColor = 'rgb(192, 192, 192)';
        document.getElementById("user_input_text_area").style.backgroundColor = 'rgb(235, 231, 231)';
    
        document.getElementById("button_save").style.backgroundColor = 'rgb(95, 152, 125)';
        document.getElementById("button_cancel").style.backgroundColor = 'rgb(209, 59, 33)';
        document.getElementById("new_note_button").style.backgroundColor = 'rgb(94, 151, 124)';
        document.getElementById("change_theme_button").style.backgroundColor = 'rgb(105, 105, 105)';
    }
}
