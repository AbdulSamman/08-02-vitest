import * as model from "./model.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).send(model.getApiInstructions());
});
app.get("/books", (req, res) => {
    //test
    //   if (cors === null) {
    //     res.json(model.getBooks());
    //   }
    res.status(200).json(model.getBooks());
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
export default app;
//# sourceMappingURL=app.js.map