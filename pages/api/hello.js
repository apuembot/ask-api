// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Create file...' })
  

  var content = "Hello World?";

  setTimeout(function(){

  fs.appendFile("results.txt", content, function (err, file) {
      if (err) throw err;
      console.log('Saved!');
    });
  }, 3000);
}
