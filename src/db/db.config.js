const { MongoClient, ServerApiVersion } = require('mongodb')
const mongoose = require('mongoose')
const { mongoURI } = require('../config/config')

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function runDB () {
  try {
    // Connect the client to the server
    await client.connect()
    await mongoose.connect(mongoURI)
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log('Successfully connected to MongoDB')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

module.exports = runDB
