
const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then (data => updateData(data))
}


const updateData = data =>{
    const quote = document.getElementById('quote');
    quote.innerText = data.quote;
}