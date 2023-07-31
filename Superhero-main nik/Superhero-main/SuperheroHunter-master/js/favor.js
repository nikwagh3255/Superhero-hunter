

// getting data from local storage
const localContent = localStorage.getItem('names');
var results = JSON.parse(localContent);
// console.log(results);
const ul = document.getElementById('favour-list');


// to remove favourites from list
const removeFavor = (text) => {
  console.log(text);
  const index = results.indexOf(text);
  // console.log(index);
  results.splice(index,1);
  // console.log(results);
  localStorage.setItem('names', JSON.stringify(results));
  window.location.reload();
  window.alert("Removed from Favorites");
  
}

// list of favourites
const liMaker = (text) => {
   
  const li = document.createElement('li')
  li.innerHTML = text;
  li.innerHTML += `
  <span> <button onclick = "removeFavor('${text}')"> Remove from Favourites </button> </span>`
  ul.appendChild(li)
    
}

// for displaying favourites
results.forEach((item) => {
  liMaker(item)
    
});


