import axios from "axios";
export const ClassroomPracticeAssign = async (class_id) => {
  try {
    const response = await axios.get(`https://smith11.ce.kmitl.ac.th/api/practice/classroom/${class_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching practice for classroom', error);
    return [];
  }
};
export default ClassroomPracticeAssign;
  