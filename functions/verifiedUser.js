exports.handler = async (event, context) => {
  console.log('verified')
  if (context.clientContext.user) {
    const data = {auth: 'verified'}
    // fetch data & then return
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

  // return error status
  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: 'you must be logged in to see this' })
  }
}