const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname));
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Tabla Max live on port', PORT));
