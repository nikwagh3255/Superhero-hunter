


const search  = document.getElementById('search-bar');
const suggestion = document.getElementById('suggestions');

 // fetch api for searching
const searchHero = async searchName => {
 const res = await fetch(`https://www.superheroapi.com/api.php/3071693936250675/search/${searchName}`);
 const heros = await res.json();
 const results = heros.results;
 //   console.log(results);
 // to get suggestions according to the input
 let matches = results.filter(hero => {
    //  regular expression is a way to search 
    const regex = new RegExp(`^${searchName}`, 'gi');
    return hero.name.match(regex);
 });
 //  console.log(matches);

// if(searchName.length === 0 ) {
//     matches = [];
//     suggestion.innerHTML = '';
// }

displayData(matches);
}; 

// local storage
let names = localStorage.getItem('names')
  ? JSON.parse(localStorage.getItem('names'))
  : []
//favourites  
const favouriteList = fav => {
    // console.log(fav);
    names.push(fav);
    localStorage.setItem("names", JSON.stringify(names));
    window.alert("Added to Favorites");
    
    
}
//  console.log(names);

// to display the results
const displayData = (matches) => {
    // if it's not empty
    if(matches.length > 0) {
        // map returns an array from an array
        const html = matches.map(match => `
         
       <div>
            <h4> <a href="hero.html?name=${match.name}" > ${match.name} </a></h4>
            
            <button onclick = "favouriteList('${match.name}')" > Add to Favorites </button>

        </div>
        `
        // to convert it to string
        ).join('');

        suggestion.innerHTML = html;
    }
};


search.addEventListener('keyup', () => searchHero(search.value));