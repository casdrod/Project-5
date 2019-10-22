const search = document.querySelector('#search');
const boxTexts = document.querySelectorAll('a.getAttribute('data-title')');

const handleSearch = event => {
  const searchTerm = event.target.value.toLowerCase();
  
  boxTexts.forEach(boxText => {
    const text = boxText.textContent.toLowerCase();
    const box = $('.thumbnail');
    
    if(text.indexOf(searchTerm) > -1) {
      box.style.display = "block";
    } else {
      box.style.display = "none";  
    }
  });

};

search.addEventListener('keyup', handleSearch);