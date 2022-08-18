function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayUsrs(data))
}
// loadData()
function displayUsrs(data){
    console.log(data);
    const ul = document.getElementById('users');
    for(const name of data){
       
        // console.log(name.email);
        const li = document.createElement('li');
        li.innerText = `
            Name: ${name.name}
            Email: ${name.email}
            Id: ${name.id}
        `
        ul.appendChild(li)
        
        // console.log(name.name);
    }
}