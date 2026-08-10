// HTTP status code = tells the client what happened.
// HTTP logger = tells you what happened.
import { pinoHttp } from "pino-http";
import { logger } from "./logger";

export const httpLogger = pinoHttp({
  logger,
});
