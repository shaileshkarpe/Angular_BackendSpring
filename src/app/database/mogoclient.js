const uri = 'mongodb://localhost:27017/mydatabase';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // Connection successful, you can now interact with your database here
});
