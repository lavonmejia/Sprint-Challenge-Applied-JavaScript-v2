// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



function Header() {   

    const headerReal = document.createElement('div');
    headerReal.classList.add('header');

    const headerDate =  document.createElement('span');
    headerDate.classList.add('date');
    headerReal.appendChild(headerDate);

    const headerTitle =  document.createElement('h1');
    headerTitle.textContent = 'Lambda Times';
    headerReal.appendChild(headerTitle);

    const headerTemp =  document.createElement('span');
    headerTemp.classList.add('temp');
    headerTemp.textContent = '98°';
    headerReal.appendChild(headerTemp);

    return headerReal    
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header())

