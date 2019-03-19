

describe('Crear usuarios', async () => {
  it('Crea un usuario correctamente', async () => {
    await fetch(`${process.env.GATSBY_FUNCTIONS_URL}/createUser`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userCredential.user.uid, email, name }),
    })
  })
})