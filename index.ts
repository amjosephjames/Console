console.log("hello world");
import { Console } from "console";

const logger = new Console(process.stdout, process.stderr);

logger.log("hello world");

// logger.error(new Error("hello world"));
