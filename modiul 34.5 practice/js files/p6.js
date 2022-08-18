const dataLoad = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayData(data))
}
dataLoad()
const displayData = data =>{
    const result = data.results;
    console.log(result);
    const detailsShow = document.getElementById('detailsShow')
    for(details of result){
        const p = document.createElement('p')
        // const pic =`${ details.picture}`
        p.classList.add('addStyle')
        p.innerText =
        `<img src="${details.picture.large}"
        Name: ${details.name.title} ${details.name.first} ${details.name.last} 
        Email: ${details.email}
        Phone: ${details.phone}
        Location: ${details.location.city}
        State: ${details.location.state}
        `
        detailsShow.appendChild(p)
        // console.log(details);
    }
    
}