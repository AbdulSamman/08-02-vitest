import app from "./app.js";
import * as config from "./config.js";
// TODO find a way placethe Vistest tests in /src, currently results in tsconfig.json errors
app.listen(config.port, () => {
    console.log(`listening on port http://localhost:${config.port}`);
});
//# sourceMappingURL=server.js.map