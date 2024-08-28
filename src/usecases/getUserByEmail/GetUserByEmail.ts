const getUserByEmail = async (userEmail: string) => {
  try {
    const getPlayerByEmail = await fetch(
      `${process.env.ROUTE_URL}/api/get_user_by_email?email=${userEmail}`,
      {
        method: 'GET',
      },
    )

    return getPlayerByEmail.json()
  } catch (error) {
    console.error(error)
  }
}

export default getUserByEmail
