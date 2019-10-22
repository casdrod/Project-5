const search = document.querySelector('#search');
const boxTexts = document.querySelectorAll('a.imgs');

const handleSearch = event => {
  const searchTerm = event.target.value.toLowerCase();
  
  boxTexts.forEach(boxText => {
    const text = boxText.getAttribute('data-title').toLowerCase();
    
    if(text.indexOf(searchTerm) > -1) {
      boxText.style.display = "block";
    } else {
      boxText.style.display = "none";  
    }
  });

};

search.addEventListener('keyup', handleSearch);