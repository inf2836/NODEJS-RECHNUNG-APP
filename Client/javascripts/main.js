

/**
 * this function Triggered when the user clicks on 'pay money out' button,
 * this function receives the username of the selected user,
 * then sets the value of the input in the dialog
 * 
 * @param {string} username 
 */
function setReceiver(username){
    document.querySelector("input[name='receiver']").value = username
}




/**
 * handler triggered when the button 'pay money out' is clicked 
 * This function collects the value from the form,
 * creates a transaction object, update the view and 
 * sends a POST request to the server via  (AJAX)
 * @param {Event} event 
 */
function submitPayoutForm(event){
    event.preventDefault();

    let transaction = {};
    let form = event.target;

    form.querySelectorAll("input[name], textarea[name], select[name]").forEach( function(input){
        transaction[input.name] = input.value;
    });

    transaction.users = [ 
        transaction.receiver 
    ];
    
    transaction.date = new Date();

    apiRequest('/transactions', 'POST', transaction)
    .then(window.location = "/" );
}



/** 
 * Triggered when user creates a new transaction
 * 
 * @param {Event} event 
 */
function submitTransactionForm(event) {
    event.preventDefault();

    let transaction = {};
    let form = event.target;

    form.querySelectorAll("input[name], textarea[name], select[name]").forEach( function(input){
        transaction[input.name] = input.value;
    })

    transaction.users = [ 
        transaction.creator 
    ];

    form.querySelectorAll("input[type='checkbox']").forEach( function(input){
        if(input.checked){
             transaction.users.push(input.value)
        }
    })
    
    if( transaction.date.length < 2 ) {
        transaction.date = new Date();
    }

    apiRequest('/transactions', 'POST', transaction)
    .then(window.location = "/" );

}



/** 
 * Triggered when the user successfully entrered all fields 
 * of the registration form.
 * This function gets all fields from the form and creates a POST request
 * @param {event} event 
 */
function submitRegistrationForm(event){
    event.preventDefault();

    let form = event.target;
    let user = {};
    let statusAlert = form.querySelector(".status.alert");
    let passwordAlert = form.querySelector(".password.alert");
    let passwordConfirmation = document.getElementById("passwordConfirmation");

    form.querySelectorAll("input[name]").forEach( input =>{
        user[input.name] = input.value;
    });

    if(user.password !== passwordConfirmation.value){
        passwordAlert.hidden = false;
        console.log("passwords do not match", user.password,passwordConfirmation);
    }
    else{
        passwordAlert.hidden = true;

        apiRequest('/sign_up', 'POST', user)
        .then( result => {
            if(result.status === 'ok'){
                window.location = '/sign_in'
            }
            else{
                statusAlert.innerText = result.message;
                statusAlert.hidden = false;
            }
        })

    }
}



/** This function submits the login information
 *  and displays any error or navigates to the home page
 * @param {Event} event 
 */
function submitSignInForm(event){
    event.preventDefault();

    let form = event.target;
    let user = {};
    let alert = form.querySelector(".alert");

    form.querySelectorAll("input[name]").forEach( input =>{
        user[input.name] = input.value;
    });

    apiRequest('/sign_in', 'POST', user)
    .then( result => {
        
        if(result.status === 'ok'){
            window.location = '/'
        }
        else{
            alert.hidden = false;
        }
    })

}



/** 
 * This method sets the value of the #delete-user-form 
 * found in the /admin.jade view
 * So that onsubmit the value can be
 * used to make the AJAX call
 * @param {*} _id 
 */
function markUserToBeDeleted(_id){
    document.getElementById("user-id-to-be-deleted").value = _id;
}



/** Use a function to send the delete request
 *  because HTML Form delete request did not work
 */
function submitDeleteUser(){

    let data = {};

    document.querySelectorAll("#user-deletion-form input[name]").forEach( input => {
        data[input.name] = input.value;
    })

    console.log(data)

    apiRequest(`/users/${data._id}`, "DELETE", data)
    .then(
        console.log("hahaha")
    )
}

/** 
 * A helper method to make http requests n background.
 * This method uses promisses to return 
 * a resolve or reject object
 * @param {string} url url for the API
 * @param {} method GET|PUT|POST|DELETE
 * @param {} data the data object
 */
function apiRequest(url, method, data) {

    return new Promise( (resolve, reject) => {
        fetch(url, {
            body: JSON.stringify(data), 
            credentials: 'same-origin',
            headers: {
              'user-agent': 'Mozilla/4.0 MDN Example',
              'content-type': 'application/json',
            },
            method: method,
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer', 
          })
          .then( response => response.json() )
          .then( response => resolve(response)) 
          .catch( error => reject(error)) 
    });
}

