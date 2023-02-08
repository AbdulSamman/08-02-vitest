import app from "./app.js";
import * as config from "./config.js";
app.listen(config.port, () => {
    console.log(`listening on port http://localhost:${config.port}`);
});
//# sourceMappingURL=server.js.map