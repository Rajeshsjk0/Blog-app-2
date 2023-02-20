declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PAGE_LIMIT?: number;
      NEXT_PUBLIC_PAGE_LIMIT: number;
      NEXT_PUBLIC_BASE_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
