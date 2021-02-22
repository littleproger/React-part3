const chatRoutes = require('./chatRoutes');
const adminRoutes = require('./adminRoutes');
const authRoutes = require('./authRoutes');

module.exports = (app) => {
    app.use('/chat', chatRoutes);
    app.use('/adminpage', adminRoutes);
    app.use('/auth', authRoutes);
  };