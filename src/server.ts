import express from 'express';
import userRoute from './routers/userRoute'
import emailRouter from './routers/emailRouter'
import passwordRouter from './routers/passwordRouter'
import dotenv from 'dotenv';
import { allowedOrigins } from './config/allowedOrigins';
import cors from 'cors';
const path = require('path');
dotenv.config();
 // Ensure the path is correct
// import k from 
const PORT = process.env.PORT ||10010;
const app = express();
// app.use(cors());
app.use(cors({ origin: allowedOrigins}));
app.use(express.json());
app.post(process.env.TYPE_APP_SING_PATH || '/api.signup',userRoute );
app.post(process.env.TYPE_APP_LOG_PATH|| '/api.login',userRoute );
app.post(process.env.TYPE_APP_EMAIL_PATH|| '/api.login',emailRouter );
app.post('/api.password',passwordRouter );
app.post('/api.change.password',passwordRouter );

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
