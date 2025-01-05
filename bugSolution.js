```javascript
const { MongoClient } = require('mongodb');

async function findUser(name) {
  const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('yourDatabaseName'); // Replace with your database name
    const collection = db.collection('users');

    const query = { name: name };
    const user = await collection.findOne(query);

    if (user) {
      console.log('Found user:', user);
      return user; // Return the found document
    } else {
      console.log('No user found.');
      return null;
    }
  } catch (err) {
    console.error('Error:', err);
    return null;
  } finally {
    await client.close();
  }
}

findUser('John Doe');
```