// To get our Username from the HTML
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

//required for front end communication between client and server

const socket = io();

const inboxPeople = document.querySelector(".inbox__people");



socket.emit('joinRoom', {username, room});

let userName = "";
let id;
const newUserConnected = function (data) {
    

    //give the user a random unique id
  //  id = Math.floor(Math.random() * 1000000);
   // userName = 'user-' +id;
    //console.log(typeof(userName));   
    

    //emit an event with the user id
    socket.emit("new user", username);
    //call
   // addToUsersBox(username);
};

const addToUsersBox = function (username) {
    //This if statement checks whether an element of the user-userlist
    //exists and then inverts the result of the expression in the condition
    //to true, while also casting from an object to boolean
    if (!!document.querySelector(`.${username}-userlist`)) {
        return;
    
    }
    
    //setup the divs for displaying the connected users
    //id is set to a string including the username
    const userBox = `
    <div class="chat_id ${username}-userlist">
      <h5>${username}</h5>
    </div>
  `;
    //set the inboxPeople div with the value of userbox
    inboxPeople.innerHTML += userBox;
};

//call 
newUserConnected();

//when a new user event is detected
socket.on("new user", function (data) {
  data.map(function (user) {
          return addToUsersBox(user);
      });
});

//when a user leaves
socket.on("user disconnected", function (userName) {
  document.querySelector(`.${userName}-userlist`).remove();
});


const inputField = document.querySelector(".message_form__input");
const messageForm = document.querySelector(".message_form");
const messageBox = document.querySelector(".messages__history");

const addNewMessage = ({ user, message }) => {
  const time = new Date();
  const formattedTime = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });

  const receivedMsg = `
  <div class="incoming__message">
    <div class="received__message">
      <p>${message} </p>
      <div class="message__info">
 <span class="message__author">${user}</span>
        <span class="time_date">${formattedTime}</span>
      </div>
    </div>
  </div>`;

  const myMsg = `
  <div class="outgoing__message">
    <div class="sent__message">
      <p>${message}</p>
      <div class="message__info">
  <span class="message__author">${username}</span>
        <span class="time_date">${formattedTime}</span>
      </div>
    </div>
  </div>`;

  //is the message sent or received
  messageBox.innerHTML += user === userName ? myMsg : receivedMsg;
};




messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputField.value) {
    return;
  }

  socket.emit("chat message", {
    message: inputField.value,
    nick: userName,
  });

  inputField.value = "";
});

socket.on("chat message", function (data) {
  addNewMessage({ user: data.nick, message: data.message });
});

//Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the Live Chat?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});

