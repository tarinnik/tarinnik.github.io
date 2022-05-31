document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
})

function loadSettings() {
    document.getElementById('keyboard_input').checked = localStorage.getItem('keyboard_input') === 'true';
    document.getElementById('keyboard_notes').checked = localStorage.getItem('keyboard_notes') === 'true';
    document.getElementById('arrow_nav').checked = localStorage.getItem('arrow_nav') === 'true';
    document.getElementById('quick_nav').checked = localStorage.getItem('quick_nav') === 'true';
    document.getElementById('show_errors').checked = localStorage.getItem('show_errors') === 'true';
    document.getElementById('auto_remove_notes').checked = localStorage.getItem('auto_remove_notes') === 'true';
}

function saveSettings() {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== "checkbox") continue;
        localStorage.setItem(inputs[i].id, inputs[i].checked);
    }
    alert('Your settings have been saved');
}