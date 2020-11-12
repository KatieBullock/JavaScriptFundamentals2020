/**
 * As a teacher, I would like to be able to be see which of my students are passing or failing,
 * so I can have a better understanding on how my students are preforming.
 *
 * Complete the Teacher Gradebook by using the module pattern. Use the studentGrades data that I have imported for you.
 *
 * 1) Create third method is used to debug and will return a list of all the students.Useful for debugging purposes
 * @example
 * TeachersGradeBook.debug(); // returns all students
 *
 * 2) Create a method TeacherGradeBook.getFailingStudents() which returns an array of objects of all the students that have failing the course.
 * @example
 * TeacherGradeBook.getFailingStudents();
 * // [ {firstName:'Billy',lastName:'Joel',grades:[20,30,40,50]}, {firstName:'Luke',lastName:'Skywalker', grades:[0,0,0,100]} ]
 *
 * 3) Create a method TeachersGradeBook.getPassingStudents(), which will return an array of objects of all the students that have passed.
 * @example
 * TeachersGradeBook.getPassingStudents();
 * // [ {firstName:'jane',lastName:'doe',grades:[100,100,100,100]}, {firstName:'James',lastName:'Bond', grades:[90,90,90,90]} ]
 */

const { studentGrades } = require("./students");

const TeacherGradeBook = (() => {
  return {};
})();

module.exports = {
  TeacherGradeBook,
};
