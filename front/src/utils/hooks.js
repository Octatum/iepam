
/**
 * Function that validates current user and redirects to home if the user is not authorized
 * @param {object} user user object with jwt included
 * @param {function} callback function to callback on error
 * @param {string} authType type of user to validate redirection
 * @param {string} link link to validate user existence
 */
export async function getUserOrRedirect(user, callback) {
  const link = 'http://localhost:1337/users/me';

  if (user) {
    try {
      const response = await fetch(link, {
        method: 'GET',
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.jwt}`
        },
      })
      
      // usuario no es permitido
      if(response.status === 401) {
        throw new Error('unauthorized user');
      }

      // datos incorrectos
      if (response.status !== 200) {
        throw new Error('internal error');
      }
      
    } catch (error) {
      callback();
    }
  }
  else {
    callback();
  }
}

/**
 * function that get the information from a user
 * @param {user} user user object to to get information from
 */
export async function getUserData(user) {
  try {
    //
    const response = await fetch('http://localhost:1337/userdata/user/' + user.user._id, {
      method: 'GET',
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.jwt}`
      }
    });

    const jsonResponse = await response.json();
    return jsonResponse;
  }
  catch(error) {
    
  }
}