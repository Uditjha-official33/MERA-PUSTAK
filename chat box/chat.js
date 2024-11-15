// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  // Chat Elements
  const chatBox = document.getElementById('chat-box');
  const messageInput = document.getElementById('message-input');
  
  // Function to add messages to chat box
  function addMessageToChatBox(username, message) {
    const messageElem = document.createElement('div');
    messageElem.classList.add('chat-message');
    messageElem.textContent = `${username}: ${message}`;
    chatBox.appendChild(messageElem);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  }
  
  // Load messages from Firebase
  db.ref("messages").on("child_added", (snapshot) => {
    const messageData = snapshot.val();
    addMessageToChatBox(messageData.username, messageData.message);
  });
  
  // Send message function
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message === "") return;
  
    // Replace "Anonymous" with an actual username if you want user authentication
    db.ref("messages").push({
      username: "Anonymous",
      message: message
    });
  
    messageInput.value = "";
  }
  