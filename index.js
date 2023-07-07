// search input
const searchInput = document.querySelector('#phoneInput');
// add contact
const addContactButton = document.querySelector('#addButton');
// search button
const searchContactButton = document.querySelector('#searchButton');
// bottom section
const contactsContainer = document.querySelector('.bottom-section');
// edit button
// delete button

// contacts store
let contactsArray = [
  {
    name: 'Kizz',
    phone: '0704353301',
  },
  {
    name: 'Kellen',
    phone: '0754599523',
  },
  {
    name: 'Shalom',
    phone: '0759436776',
  },
];

// temporarily make the contacts array empty
// contactsArray = [];

// function to display the contacts in html
function displayContacts() {
  if (contactsArray.length === 0) {
    contactsContainer.innerHTML =
      '<h3 class="alert">No Contacts, Please Add Contact!</h3>';
  } else {
    contactsContainer.innerHTML = '';
    contactsArray.forEach(function (contact) {
      let newContactElement = document.createElement('div');
      newContactElement.innerHTML = `<div class="contact-row">
          <div class="user-info">
            <h3 id="userName" class="username">${contact.name}</h3>
            <h3 id="phoneNumber" class="phone-number">${contact.phone}</h3>
          </div>
          <div class="buttons-group">
            <button id="callButton" class="call-button contact-buttons buttons">Call</button>
            <button id="editButton" class="edit-button contact-buttons buttons">Edit</button>
            <button id="deleteButton" onClick="deleteContact(${contact.phone})" class="delete-button contact-buttons buttons">Delete</button>
          </div>
        </div>`;
      contactsContainer.appendChild(newContactElement);
    });
  }
}

// function that deletes a contact based on phone numer
function deleteContact(phoneNumber) {
  console.log(phoneNumber);
  let newContacts = contactsArray.filter(function (contact) {
    return contact.phone !== phoneNumber;
  });
  // update contacts
  contactsArray = newContacts;
  displayContacts();
}

// load contacts on page load
displayContacts();
