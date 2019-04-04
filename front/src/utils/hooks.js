
/**
 * Function that validates current user and redirects to home if the user is not authorized
 * @param {object} user user object with jwt included
 * @param {function} callback function to callback on error
 * @param {string} authType type of user to validate redirection
 * @param {string} link link to validate user existence
 */
export async function getUserOrRedirect(user, callback, authType = 'authenticated', link = 'http://localhost:1337/users/me') {
  // existe usuario
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
      // datos incorrectos
      if (response.status !== 200) {
        throw 'error';
      }
      // usuario no es permitido
      if(user.user.role.type !== authType) {
        throw 'error';
      }
    } catch (error) {
      callback();
    }
  }
  else {
    callback();
  }
}

export async function getUserData(user) {
  try {
    //
    const response = await fetch('http://localhost:1337/userdata?user=' + user.user.username, {
      method: 'GET',
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.jwt}`
      }
    });

    console.log(response);
  }
  catch(error) {

  }
}