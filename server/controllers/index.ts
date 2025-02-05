export {
  signup,
  login,
  logout,
  getUser,
  verifyAccount,
} from './auth';
export {
  sendEmail,
  getQuestions,
  getQuiz,
  addPrivateQuizScore,
  checkUserAttendQuiz,
  leaderboard,
  updateLeaderboard,
  getStudentProfile,
  editStudentProfile,
} from './student';

export {
  createQuiz,
  deleteQuiz,
  getQuizzes,
  getEnrolledStudents,
  getProfile,
  editProfile,
} from './teacher';
