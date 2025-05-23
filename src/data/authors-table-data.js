import axios from 'axios';
export const authorsTableData = async () => {
  try{
    const response = await axios.get('https://smith11.ce.kmitl.ac.th/api/student');
    return response.data;
  }
  catch(error){
    console.error('Error fetching user', error);
    return [];
  }
};
export default authorsTableData;
