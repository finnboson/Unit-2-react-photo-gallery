/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i ++)
      if (i >= startIndex && i < endIndex ) {
         studentName = `${list[i].name.title} ${list[i].name.first} ${list[i].name.last}`
         emailAddress = list[i].email;
         image = list[i].picture.large;
         registered = list[i].registered.date;
      studentList.insertAdjacentHTML('beforeend', 
      `<li class='student-item'>
         <div class='student-details'>
            <img class='avatar' src=${image} alt='Profile Picture'>
               <h3 class='student-item h3'>${studentName}</h3>
               <span class='email'>${emailAddress}</span>
            </div>
         <div class='joined-details'>
            <span class='date'>Joined ${registered}</span>
         </div>
         </li>` )
 }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numberOfPages = list.length / 9;
   let pagesRounded = Math.round(numberOfPages);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i = 1; i <= pagesRounded; i++) {
      linkList.insertAdjacentHTML ('beforeend',
      `<li>
         <button type="button">${[i]}</button>
      </li>`)
   }
 
   let firstButton = linkList.firstElementChild.firstElementChild;
   firstButton.className = 'active';
   
   linkList.addEventListener('click', (e) => {
      let clickedButton = e.target;
      if (clickedButton.tagName == 'BUTTON') {
         let pageButtons = document.getElementsByTagName('button');
         for (let i = 0; i < pageButtons.length; i++) {
          pageButtons[i].classList.remove('active');
         }
          clickedButton.classList.add('active');
         showPage(list, clickedButton.textContent);
      } 
  });
}


// Call functions 
showPage(data, 1);
addPagination(data);