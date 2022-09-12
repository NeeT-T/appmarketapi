import 'dotenv/config';
import server from './configs/CustomExpress.js';

const port = process.env.PORT || 4008;

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});