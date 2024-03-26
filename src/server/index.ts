import path from 'path';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import { SERVER_PORT, STATIC_ASSETS_DIR } from './constants';
import routes from './routes';

const app = express();
const localServerUrl = `http://localhost:${SERVER_PORT}`;
const staticAssetsPath = path.join(process.cwd(), STATIC_ASSETS_DIR);

// Sass middleware setup
app.use(
    sassMiddleware({
        src: path.join(process.cwd(), 'src'),
        debug: true,
    })
);

// Serve static files (HTML, css)
app.use(express.static(staticAssetsPath));

// Routes
app.use('/', routes);

// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server running at ${localServerUrl}`);
});
