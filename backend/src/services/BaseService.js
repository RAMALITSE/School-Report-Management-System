// backend/src/services/BaseService.js
class BaseService {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
        const item = new this.model(data);
        return await item.save();
      } catch (error) {
        throw new Error(`Error creating item: ${error.message}`);
      }
    }
  
    async findById(id) {
      try {
        return await this.model.findById(id);
      } catch (error) {
        throw new Error(`Error finding item: ${error.message}`);
      }
    }
  
    async findAll(query = {}) {
      try {
        return await this.model.find(query);
      } catch (error) {
        throw new Error(`Error finding items: ${error.message}`);
      }
    }
  
    async update(id, data) {
      try {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
      } catch (error) {
        throw new Error(`Error updating item: ${error.message}`);
      }
    }
  
    async delete(id) {
      try {
        return await this.model.findByIdAndDelete(id);
      } catch (error) {
        throw new Error(`Error deleting item: ${error.message}`);
      }
    }
  }
  