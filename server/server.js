const morgan = require('morgan');
app.use(morgan('dev')); // Logs HTTP requests to console


// 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('🔥 Server error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
