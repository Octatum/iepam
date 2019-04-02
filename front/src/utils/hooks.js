export async function getUserOrRedirect(user, callback, authType = 'authenticated', link = 'http://localhost:1337/users/me') {
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
      // no existe usuario
      if (response.status !== 200) {
        console.log('not 200');
        throw 'error';
      }
      // usuario no es cliente
      if(user.user.role.type !== authType) {
        console.log('not client');
        throw 'error';
      }
    } catch (error) {
      callback();
    }
  }
  else {
    console.log('no user');
    callback();
  }
}