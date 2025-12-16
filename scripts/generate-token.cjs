const { getToken } = require('@gr4vy/sdk')
const path = require('node:path')

require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env'),
  quiet: true,
})

async function run() {
  return await getToken({
    privateKey: Buffer.from(process.env.GR4VY_PRIVATE_KEY, 'base64').toString(),
    expiresIn: '1d',
    scopes: ['checkout-sessions.write', 'transactions.write'],
  })
}

run().then(console.log)
