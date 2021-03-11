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
This function accepts two parameters as arguments: 1) an array of objects; 2) a page number.
The startIndex and endIndex calculate how many list items I want to display on the page.
Then I select the ul element I want to place the list items into and first set it's html value to 
an empty string. Then looping through the list items for the given number of items I want to 
display on the page, I declare the values of each element I want to display with each list item.
Then using the insertAdjacent method and beforeend option I insert each list item inside the
empty html string, one after the other.   
*/


function showPage (list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i ++)
      if (i >= startIndex && i < endIndex ) {
         studentName = `${list[i].name.title} ${list[i].name.first} ${list[i].name.last}`;
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
This function accepts one parameter: the list of students in data.js. First I calculate the 
number of pages there will be by dividing the student items by 9. Then using the Match.round
method I round up to the nearest whole number. I then select the ul element where the pagination 
buttons will be inserted into and set it's innerHTML to an empty string. I then loop over the 
rounded number of pages variable and insert the page number buttons using the insertAdjacentHTM
method. 
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
 
   /*Here I select the first page number button and set it's class name to active since it
   will be active by default
   */
   let firstButton = linkList.firstElementChild.firstElementChild;
   firstButton.className = 'active';
   /* 
   Here I create an event listener to listen for clicks on buttons within the link-list ul
   element. I then loop over the page number buttons removing the class of active from all 
   buttons except the one being clicked. I then call the showPage function and pass in the
   list of students and the page number of the clicked button as arguments. This displays only
   the students on the page number that is selected.
   */
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


// Finally, I call the two functions.
showPage(data, 1);
addPagination(data);



