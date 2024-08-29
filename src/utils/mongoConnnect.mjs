import { MongoClient, ServerApiVersion } from 'mongodb'

const uri =
  'mongodb+srv://felipebignoto:19E3n0DFygsQwf5u@desafiobrand.i62la.mongodb.net/?retryWrites=true&w=majority&appName=desafioBrand'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

let db

export async function connectToDatabase() {
  if (!db) {
    await client.connect()
    db = client.db('desafioBrand')
  }
  return db
}

async function run() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('Conexão bem-sucedida ao MongoDB!')
  } finally {
    console.log('finally')
  }
}

run().catch(console.dir)
