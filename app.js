const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
        <h1>POC 32: CI/CD Pipeline Success</h1>
        <p>Deployment to <strong>Azure App Service</strong> is complete.</p>
        <p>Status: <span style="color: green;">Online</span></p>
      </body>
    </html>
  `);
});
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
