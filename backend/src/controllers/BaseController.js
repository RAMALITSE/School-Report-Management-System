// backend/src/controllers/BaseController.js
class BaseController {
    constructor(service) {
      this.service = service;
    }
  
    async create(req, res) {
      try {
        const item = await this.service.create(req.body);
        res.status(201).json(item);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async getAll(req, res) {
      try {
        const items = await this.service.findAll(req.query);
        res.status(200).json(items);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async getById(req, res) {
      try {
        const item = await this.service.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async update(req, res) {
      try {
        const item = await this.service.update(req.params.id, req.body);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async delete(req, res) {
      try {
        const item = await this.service.delete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(204).send();
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = {
    BaseService,
    MarksService,
    ReportService,
    BaseController
  };