import app from "./app.js";
import { PORT } from "./src/config/env.js";

app.listen(PORT || 3000, () => console.log(`server listening on port ${PORT}`));
