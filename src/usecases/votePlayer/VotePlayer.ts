const votePlayer = async (): Promise<string> => {
  const res = await fetch(`${process.env.ROUTE_URL}/api/get_players`, {
    method: 'GET',
  })

  return res.json()
}

export default votePlayer
