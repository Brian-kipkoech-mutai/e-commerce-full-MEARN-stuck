import app from "./app";
import { PORT } from "./src/config/env";

app.listen(PORT || 3000, () => console.log(`server listening on port ${PORT}`));
