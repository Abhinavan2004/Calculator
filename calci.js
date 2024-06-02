const ans_dhikha = document.querySelector("#ans");

function adddigit(char) {
    ans_dhikha.value += char;
}

function Equalss(){
    try {
        ans_dhikha.value= eval(ans_dhikha.value);
         if (!Number.isInteger(Number(ans_dhikha.value))) {
                    ans_dhikha.value = parseFloat(ans_dhikha.value).toFixed(4);
                }

    } catch (error) {
        ans_dhikha = 'Error';
    }
    
}

function Clearone(){
    ans_dhikha.value = ans_dhikha.value.slice(0,-1);
}

function Clear(){
    ans_dhikha.value = " ";
}