const loadCounties = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCounties()
const displayCountries = data =>{
    
    // for(const country of data){
    //     console.log(country.name);
    // }
    const countriesDiv = document.getElementById('countries');
    
    data.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('addStyle')
        // div.innerText = country.name;
        // countriesDiv.appendChild(div);
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')"> Details </details>
        
        `;
        countriesDiv.appendChild(div);

    });
}

const loadCountryByName = name =>{
    
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h4> Country Name: ${country.name}</h4>
        <h4> Population: ${country.population}</h4>
        <img width ="200px" src = "${country.flag}">
    
    
    `
}











