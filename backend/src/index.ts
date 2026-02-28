// backend/src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import {
  personalInfo,
  techStack,
  projects,
  experiences,
  certificates,
  otherCertificates,
} from "./data";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/info", (req: Request, res: Response) => {
  res.json(personalInfo);
});

app.get("/api/skills", (req: Request, res: Response) => {
  res.json(techStack);
});

app.get("/api/projects", (req: Request, res: Response) => {
  res.json(projects);
});

app.get("/api/experiences", (req: Request, res: Response) => {
  res.json(experiences);
});

app.get("/api/certificates", (req: Request, res: Response) => {
  res.json({
    main: certificates,
    others: otherCertificates,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Backend Portfolio menyala di http://localhost:${PORT}`);
});
