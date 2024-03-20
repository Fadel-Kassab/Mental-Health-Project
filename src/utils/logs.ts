import { logger } from "react-native-logs";

interface CustomLogger  {
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    debug: (...args: any[]) => void;
  }

export  const log:CustomLogger = logger.createLogger({
    transportOptions: {
      colors: {
        info: 'blueBright',
        warn: 'yellowBright',
        error: 'redBright',
        debug: 'white',
      },
    },
  });