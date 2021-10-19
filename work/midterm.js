class Student {
    constructor(sid, name) {
        this._name = name;
        this._sid = sid;
        this._allsemester = [];
        this._GPAX = 0.00;
        this._status = "";
        this._allCredit = 0;
    }

    addSemester(semester) { //เพิ่มภาคการศึกษา
        this._allsemester.push(semester);
        this._allCredit += semester._allCredit;
        this.calGPAX();
        this.calStatus();
    }
    findSemester(termId) { //ค้นหาภาคการศึกษา
        for (let semester of this._allsemester) {
            if (semester._termId == termId) {
                return semester;
            }
        }
    }
    calGPAX() {
        let sumGpa = 0;
        let sumcredit = 0;
        for (let semester of this._allsemester) {
            sumGpa += semester._GPA * semester._allCredit;
            sumcredit += semester._allCredit;
        }
        this._GPAX = sumGpa / sumcredit;
    }
    calStatus() {
        if (this._GPAX >= 2.00) {
            this._status = "Normal";
        }
        if (this._GPAX < 2.00) {
            this._status = "Probation";
        } else if (this._GPAX < 1.5 || (this._GPAX < 1.75 && this._allsemester.length == 2) || (this._GPAX < 2 && this._allsemester.length == 4)) {
            this._status = "Retired";
        }
    }

}
class Semester {
    constructor(termId) {
        this._termId = termId;
        this._subjects = [];
        this._allCredit = 0;
        this._GPA = 0;
        this._sumGrade = 0;
    }
    addSubject(subject) { //เพิ่มวิชาในุภาคเรียน
        this._subjects.push(subject);
        this._allCredit += subject._credit;
        this.calGPA();
    }
    calGPA() {
        let gpa = 0;
        this._subjects.map((subject, index) => {
            gpa += subject._gradexcredit;
        });
        this._sumGrade = gpa;
        this._GPA = gpa / this._allCredit;

    }
}
const gradeSubject = { "A": 4, "B+": 3.5, "B": 3, "C+": 2.5, "C": 2, "D+": 1.5, "D": 1, "F": 0, "Fa": 0, "Fe": 0, "W": "-", "I": "-", "S": "-", "U": "-" }; //เปลี่ยนเกรดเป็นแต้ม
class Subject {
    constructor(subjectId, subjectTitle, credit, grade) {
        this._subjectId = subjectId;
        this._subjectTitle = subjectTitle;
        this._credit = credit;
        this._grade = gradeSubject[grade];
        this._gradexcredit = this._grade * this._credit; //เกรดคูณหน่วยกิต
    }
}
let student = new Student(63130500017, "Chayakorn Ngamoranlerd");
let semester1_63 = new Semester("1/63");
semester1_63.addSubject(new Subject("GEN101", "PHYSICAL EDUCATION", 1, "A"));
semester1_63.addSubject(new Subject("GEN121", "LEARNING AND PROBLEM SOLVING SKILLS", 3, "B+"));
semester1_63.addSubject(new Subject("INT100", "INFORMATION TECHNOLOGY FUNDAMENTALS", 3, "C+"));
semester1_63.addSubject(new Subject("INT101", "PROGRAMMING FUNDAMETALS", 3, "A"));
semester1_63.addSubject(new Subject("INT102", "WEB TECHNOLOGY", 1, "B+"));
semester1_63.addSubject(new Subject("INT114", "DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY", 3, "B+"));
semester1_63.addSubject(new Subject("LNG220", "ACADEMIC ENGLISH", 3, "A"));
student.addSemester(semester1_63);
let semester2_63 = new Semester("2/63");
semester2_63.addSubject(new Subject("GEN111", "MAN AND ETHICS OF LIVING", 3, "A"));
semester2_63.addSubject(new Subject("INT103", "ADVANCED PROGRAMMING", 3, "B+"));
semester2_63.addSubject(new Subject("INT104", "USER EXPERIENCE DESIGN", 3, "A"));
semester2_63.addSubject(new Subject("INT105", "BASIC SQL", 1, "B+"));
semester2_63.addSubject(new Subject("INT107", "COMPUTING PLATFORMS TECHNOLOGY", 3, "B+"));
semester2_63.addSubject(new Subject("INT200", "DATA STRUCTURE & ALGORITHM", 1, "A"));
semester2_63.addSubject(new Subject("LNG332", "BUSINESS ENGLISH", 3, "B+"));
student.addSemester(semester2_63);
// console.log("หน่วยกิตเทอม1 " + student.findSemester("1/63")._allCredit)
// console.log("หน่วยกิตเทอม1 " + student.findSemester("2/63")._allCredit)
// console.log("หน่วยกิตรวม " + student._allCredit);
// console.log("GPA 1/63 " + student.findSemester("1/63")._GPA);
// console.log("GPA 2/63 " + student.findSemester("1/63")._GPA);
// console.log("GPAX " + student._GPAX);
// console.log("หน่วยกิตที่ได้ " + student._allCredit);
// console.log("สถานะ " + student._status);
console.log("แต้มระดับคะแนน " + student.findSemester("1/63")._sumGrade);
console.log("แต้มระดับคะแนน " + student.findSemester("2/63")._sumGrade);