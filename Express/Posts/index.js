import app from "./src/app.js";
import config from "./src/config/index.js";

(async () => {
  try {
    const onListening = () => {
      console.log(`Listening on port ${config.PORT}`);
    };

    app.listen(config.PORT, onListening);
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
