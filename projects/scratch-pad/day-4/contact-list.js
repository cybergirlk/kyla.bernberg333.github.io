// #!/usr/bin/env node

'use strict';

// const { isNull } = require("lodash");

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 

 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
  var contact = {}
    contact['id'] = id
    contact['nameFirst'] = nameFirst
    contact['nameLast'] = nameLast
    return contact

  }


  
// makeContact(){
//     return contact1.id + " " + contact1.nameFirst + " " + contact1.nameLast
// }
//     };


// //factory function
//returns an object


function makeContactList() {
let contactObj = {};
let contacts = [];

 
contactObj['length'] = function contactLength(){
 return contacts.length
}
contactObj['addContact'] = function addContact(contact){
return contacts.push(contact);
}
contactObj['removeContact'] = function removeContact(contact){
  for(let i = 0; i < contacts.length; i++){// loop thru array
    if (contacts[i].id === contact.id){
      contacts.splice(i, 1);//use splice method to remove
    }
  }
}
contactObj['findContact'] = function findContact(fullName){
  for(let i = 0; i <= contacts.length; i++){
    let nameFull = contacts[i].nameFirst + " " + contacts[i].nameLast
    if (nameFull === fullName){
      return contacts[i];
    } else {
      return undefined
    }
  }
  }
  contactObj['printAllContactNames'] = function printAllContactNames(){
  var outputStr = '';
    for (var i = 0; i < contacts.length; i++){
      if (i < contacts.length-1){
        outputStr += (`${contacts[i].nameFirst} ${contacts[i].nameLast}\n`);
      } else {
        outputStr += (`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
      }
    }
    return outputStr;
  }



return contactObj;
}


// function findContact(fullName){
//   //takes a fullname string and returns a contact object
//   let fullName = ''
//   fullName.push('firstName' + ' ' + 'lastName')
//   return fullName
// // }
// function removeContact(contact){
//   //takes a contact object to be removed from the contact list
//  let removedContact = '';
//  removedContact = contact.pop()
//  return removedContact







//   let printAllContactNames = ''
//   function printAllContactNames(){
//     for(var i = 0; i < contacts.length; i++){
//       if(i === contact.length; i = 0; i++){
//           printAllContactNames += contact[i]
//       } else {
//           printAllContactNames += arr[i] + ",\n";
//       }
//   }
// }
// }
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // var contacts = [];//[{nameFirst:'Alex", }]
    
    // return {
    //     // we implemented the length api for you //
    //     length: function() {
    //         return contacts.length;
    //     },
    //     addContact:function(contact){// id:2, nameFirst:'Alex, name;ast
    //         //code for this method
    //         contact.push(contact);
    //     }
    //     function findContact(fullName){
    
    //         //takes a fullname string
    //         //returns contact object if found
    //         //returns undefined if it does not match contact list
    //     }
    //  function removeContact(contact){
    //      //takes a contact object to be removed from contact list

    //     }
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

