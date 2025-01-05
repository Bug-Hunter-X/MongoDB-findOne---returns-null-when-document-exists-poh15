```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, (err, doc) => {
  if (err) {
    console.error('Error:', err);
  } else if (doc === null) {
    console.log('No document found.');
  } else {
    // Process the found document
    console.log('Found document:', doc);
  }
});
```