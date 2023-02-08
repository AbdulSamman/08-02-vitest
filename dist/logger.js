import fs from 'fs';
import * as config from './config.js';
const logger = (req, res, next) => {
    const date = new Date();
    const logLine = `${date.toISOString()} - ${req.originalUrl}`;
    fs.appendFileSync(config.logPathAndFileName, logLine + '\n');
    next();
};
export default logger;
//# sourceMappingURL=logger.js.map