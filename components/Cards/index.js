// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



function createCard(cardObject) {
     const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
       <div class="headline">${cardObject.headline}</div>
       <div class="author">
         <div class="img-container">
           <img src=${cardObject.authorPhoto} />
         </div>
         <span>By ${cardObject.authorName}</span>
       </div>`
       return card 
}
  

const cards = document.querySelector('.cards-container');
 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
    console.log(data)
    console.log(data.data.articles.javascript)
    data.data.articles.javascript.forEach(topic => cards.appendChild(createCard(topic)))
    data.data.articles.bootstrap.forEach(topic => cards.appendChild(createCard(topic)))
    data.data.articles.technology.forEach(topic => cards.appendChild(createCard(topic)))
    data.data.articles.jquery.forEach(topic => cards.appendChild(createCard(topic)))
    data.data.articles.node.forEach(topic => cards.appendChild(createCard(topic)))
  })

.catch(error => {
console.log('No worky', error)});