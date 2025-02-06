// backend/src/services/MarksService.js
class MarksService extends BaseService {
    constructor(markModel) {
      super(markModel);
    }
  
    async calculateHighestInClass(classId, subject, quarter) {
      try {
        const marks = await this.model.find({ classId, subject, quarter });
        return Math.max(...marks.map(mark => mark.mark));
      } catch (error) {
        throw new Error(`Error calculating highest mark: ${error.message}`);
      }
    }
  
    async calculatePositions(classId, quarter) {
      try {
        const marks = await this.model.find({ classId, quarter });
        const studentAverages = {};
  
        // Calculate averages
        marks.forEach(mark => {
          if (!studentAverages[mark.studentId]) {
            studentAverages[mark.studentId] = {
              total: mark.mark,
              count: 1
            };
          } else {
            studentAverages[mark.studentId].total += mark.mark;
            studentAverages[mark.studentId].count += 1;
          }
        });
  
        // Calculate final averages and sort
        const averages = Object.entries(studentAverages).map(([studentId, data]) => ({
          studentId,
          average: data.total / data.count
        }));
  
        averages.sort((a, b) => b.average - a.average);
  
        // Assign positions
        return averages.map((item, index) => ({
          studentId: item.studentId,
          position: index + 1,
          average: item.average
        }));
      } catch (error) {
        throw new Error(`Error calculating positions: ${error.message}`);
      }
    }
  }
  