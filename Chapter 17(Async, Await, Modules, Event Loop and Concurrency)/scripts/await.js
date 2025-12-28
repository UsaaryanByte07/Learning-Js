
function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/Users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
}

async function getUsers() {
  console.log('Inside getUsers');
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/Users');
    let json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

getUsers();