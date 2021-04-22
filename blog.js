let articleLength = document.getElementsByClassName('article-title').length;
console.log(articleLength);
let articleTitles = document.querySelectorAll('.article-title');
let articles = document.querySelectorAll('.article');
for (let i=0; i<articleLength; i++) {
  articleTitles[i].onclick = function(evt) {
    event.preventDefault();
	for (let article of articles) {
	  article.classList.add('invisible');
	}
	articles[i].classList.toggle('invisible');
	
	for (let articleTitle of articleTitles) { 
      articleTitle.classList.remove('active');
    }
	articleTitles[i].classList.add('active');
  }
  
}
