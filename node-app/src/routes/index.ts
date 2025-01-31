import express from 'express';
import { pdfRoutes } from './pdf.route';
export const routes = express.Router();

routes.use(pdfRoutes);