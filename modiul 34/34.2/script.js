const loadBuddes = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then (data => displaBuddies(data))
}
    loadBuddes()
const displaBuddies = data =>{
    const data2 = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const result of data2){
        console.log(result);
        const p = document.createElement('p');
        p.classList.add('addStyle')
        p.innerText = `Name: ${result.name.first} ${result.name.last}
        Email : ${result.email}
        `;
        buddiesDiv.appendChild(p);
    }
}




