const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');
const { sequelize } = require('./models'); // Import Sequelize instance

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes for authentication and data
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Authenticate with the database and start the server
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

