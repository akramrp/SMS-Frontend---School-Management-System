import { academicYears, attendance, bookIssues, books, classes, exams, fees, results, sections, staff, students, subjects, users, roles } from '@/mocks/data/core';
import type { PageResult, QueryParams } from '@/types/api';import type { Attendance, Fee, Staff, Student } from '@/types/domain';import { delay, pageData } from './query';
const paginate=<T extends {id:string}>(rows:T[],q?:QueryParams)=>pageData(rows as T[] & Record<string,unknown>[],q) as PageResult<T>;
export const studentService={getStudents:(q?:QueryParams)=>delay(paginate<Student>(students,q)),getStudentById:(id:string)=>delay(students.find(s=>s.id===id)),createStudent:(input:Student)=>delay(input),updateStudent:(id:string,input:Partial<Student>)=>delay({...students.find(s=>s.id===id),...input}),deleteStudent:(id:string)=>delay({id})};
export const staffService={getStaff:(q?:QueryParams)=>delay(paginate<Staff>(staff,q)),getStaffById:(id:string)=>delay(staff.find(s=>s.id===id))};
export const referenceService={getAll:()=>delay({academicYears,classes,sections,subjects,users,roles})};
export const attendanceService={getAttendance:(q?:QueryParams)=>delay(paginate<Attendance>(attendance,q)),mark:(id:string,status:string)=>delay({id,status})};
export const feeService={getFees:(q?:QueryParams)=>delay(paginate<Fee>(fees,q))};
export const examService={getExams:()=>delay({exams,results})};export const libraryService={getLibrary:()=>delay({books,bookIssues})};
