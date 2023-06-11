const express = require('express');
const app = express();
const ejs = require('ejs');


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get("/", (req, res)=>{
  res.render('mainPage.ejs')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
