/**
 * REVISION GUIDE: The Fetch API & The Response Object
 */

fetch('https://jsonplaceholder.typicode.com/users')
  // Q1: What is this 'response' argument here?
  // A: It is the "Response Object." It's a built-in JavaScript object that 
  //    represents the entire HTTP response (the envelope). 
  //    It contains the status code, headers, and the raw data stream.
  .then(response => {
    
    // Q2: Why do we check response.ok?
    // A: fetch() only fails (goes to .catch) if the browser can't reach the server.
    //    If the server says "404 Not Found," that is still a successful connection.
    //    We check .ok (which is true if status is 200-299) to catch server errors.
    if (!response.ok) {
      throw new Error('Server returned an error: ' + response.status);
    }

    // Q3: Why can't we just console.log(response) to see the data?
    // A: If you log 'response', you see the metadata (status, ok, url). 
    //    The actual data is hidden in a "Body Stream" which isn't readable yet.
    //    We must call a method like .json() to "read" that stream.
    
    // Q4: Why "return" response.json()?
    // A: .json() is asynchronous (it takes time to parse). By returning it,
    //    we tell JavaScript: "Wait for this to finish, then pass the result 
    //    to the next .then() block."
    return response.json(); 
  })

  // Q5: Why the second .then()?
  // A: This block receives the FINAL RESULT of the .json() promise.
  //    The 'json' variable here is now a plain JavaScript Array or Object.
  .then(json => {
    console.log('Final Usable Data:', json);
  })

  // Q6: What does .catch() do?
  // A: It handles anything that went wrong:
  //    1. Network is down (fetch fails).
  //    2. We manually threw an error (response.ok was false).
  //    3. The data wasn't actually JSON (response.json() fails).
  .catch(error => {
    console.error('Fetch Error:', error.message);
  });