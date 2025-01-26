function submit() {
    let text = document.getElementById("text").value;
    fetch("https://ntfy.sh/8e7f86260c88346052cadd7d68514184", {
        method: 'POST',
        body: text
    }); 
}
