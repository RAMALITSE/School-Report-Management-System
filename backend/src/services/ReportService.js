// backend/src/services/ReportService.js
class ReportService extends BaseService {
    constructor(reportModel, marksService) {
      super(reportModel);
      this.marksService = marksService;
    }
  
    async generateReport(studentId, classId, quarter) {
      try {
        const marks = await this.marksService.findAll({ studentId, classId, quarter });
        const positions = await this.marksService.calculatePositions(classId, quarter);
        const studentPosition = positions.find(pos => pos.studentId.toString() === studentId.toString());
  
        const report = {
          studentId,
          classId,
          quarter,
          subjects: marks.map(mark => ({
            name: mark.subject,
            mark: mark.mark,
            highestInClass: mark.highestInClass,
            grade: mark.grade,
            teacherRemarks: mark.teacherRemarks
          })),
          average: studentPosition.average,
          position: studentPosition.position,
          result: studentPosition.average >= 50 ? 'Pass' : 'Fail'
        };
  
        return await this.create(report);
      } catch (error) {
        throw new Error(`Error generating report: ${error.message}`);
      }
    }
  }