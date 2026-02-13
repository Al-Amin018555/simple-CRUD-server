const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

// simpleDBuser
// sEcI2TarqjzZ3xZb
const uri = "mongodb+srv://simpleDBuser:sEcI2TarqjzZ3xZb@cluster0.q3bebek.mongodb.net/?appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Simple Crud server is running");
})

app.listen(port, () => {
    console.log(`simple crud server is running on port: ${port}`);
})

