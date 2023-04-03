import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (filename: string) => {
  return filename.split(".")[0];
};

const registerRoutes = async () => {
  const filenames = readdirSync(PATH_ROUTER);
  for (const filename of filenames) {
    const cleanName = cleanFileName(filename);
    if (cleanName !== "index") {
      const route = require(`./${cleanName}`);
      router.use(`/${cleanName}`, route.router);
    }
  }
};

registerRoutes()
  .then(() => {
    console.log("All routes loaded successfully.");
  })
  .catch((err) => {
    console.error("Error loading routes:", err);
  });

export { router };
