// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Hello World!' })
}
