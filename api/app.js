const input = document.getElementById("search");
const form = document.getElementById("submit");
const country = document.getElementById("country");
const result = document.querySelector(".result");

function searchCountry(e){
    e.preventDefault();
country.innerHTML ="";

 const inputValue = input.value;
    if (inputValue.trim()) {
       fetch(`https://restcountries.com/v3.1/name/${inputValue}`).then(res => res.json())
       .then(data =>{console.log(data);
       
    
     const exatName = data.filter(N => N.name.common.toLowerCase() === inputValue.toLowerCase());
      
       
       result.innerHTML =`<h4 class="textResult"> searching for country: ${inputValue}</h4>`; 

       if (exatName.length === 0) {
        result.innerHTML="<p>There are no search result. Try agin</p>" ;
       }else{
        country.innerHTML = exatName.map(country =>{ return`
        <img src="${country.flags.png}"
         alt="${country.name.common}"/>
         <div class="textbox">
        <p class="textResult">Country name: <small>${country.name.common}</small></p>
        <p class="textResult">Capital: <small>${country.capital}</small></p>
        <p class="textResult">continent: <small>${country.continents}</small></p>
        <p class="textResult">languages: <small>${Object.values(country.languages)}</small></p>
        <p class="textResult">population: <small>${country.population}</small></p>
        <p class="textResult">Area: <small>${country.area}</small></p>
        </div>
       `    
        // <p>currecy: ${Object.values(country.currencies[0].symbol)}</p> 
        });
       }
       
       }) 
       input.value = "";
    }else{
        alert("Enter a name of country");
    }

    
}
form.addEventListener("submit",searchCountry )

