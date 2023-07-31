

// to parse the query string
const queryString = window.location.search;
// to only extract specific URL Parameter value
const urlParams = new URLSearchParams(queryString);
// extracting name from url
const name = urlParams.get('name')
// console.log(name);

const details = document.getElementById('details');

// to create element
function createNode(ele) {
        return document.createElement(ele);
}

// to append element to parent
function append(parent, el) {
        return parent.appendChild(el);
}

//fetching the details of the super hero
// const searchHero = async name => {
    console.log(name);
    const res = await fetch(`https://www.superheroapi.com/api.php/3071693936250675/search/${name}`);
    const heros = await res.json();
    const results = heros.results[0];
 //     console.log(results);
    
        let nam = createNode('h1'),
        img  = createNode('img'),
        bio = createNode('h3'),
        pow = createNode('h3');
        head = createNode('h2'),

        img.src = results.image.url;
        nam.innerHTML = results.name;

 // bio details
        const entries1 = results.biography;
        for(const [key, value] of Object.entries(entries1)) {
                // console.log(`${key}  :  ${value}`);
                bio.innerHTML += (`${key} &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; ${value}<br><br>`);
        }
 // powerstats
        const entries2 = results.powerstats;
        head.innerHTML =  `Powerstats:`
        for(const [key, value] of Object.entries(entries2)) {
                // console.log(`${key} : ${value}`);
                pow.innerHTML += (`${key} &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; ${value}<br><br>`);
                
                
        }
 //appending the data 
        append(details, nam);
        append(details, img);
        append(details, bio);
        append(details, pow);
  
       
};



searchHero(name);
