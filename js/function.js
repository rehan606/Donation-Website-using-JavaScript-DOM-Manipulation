// hide section and show section when click button 

function showSectionById (id){
    document.getElementById('donation-content').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

// All input value get by ID 
function inputFieldGetById(id){
    const inputValue = Number(document.getElementById(id).value);
    return inputValue
}


