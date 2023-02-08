import * as model from "./model.js";
import express from "express";
import cors from "cors";
import * as config from "./config.js";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send(model.getApiInstructions());
});
app.get("/books", (req, res) => {
    res.json(model.getBooks());
});
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).send({
            error: true,
            message: "sent string, should be number",
        });
    }
    else {
        const book = model.getBook(id);
        if (book === undefined) {
            res.status(404).send({
                error: true,
                message: "id did not correspond to an existing item",
            });
        }
        else {
            res.json(book);
        }
    }
});
app.listen(config.port, () => {
    console.log(`listening on port http://localhost:${config.port}`);
});
//# sourceMappingURL=server.js.map