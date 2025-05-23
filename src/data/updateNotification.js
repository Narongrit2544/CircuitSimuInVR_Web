import axios from 'axios';

export const updateNotificationAPI = async (report_id) => {
    if (!report_id) {
        console.error("Error: Missing required parameters (report_id)");
        return { error: "Missing required parameters" };
    }

    try {
         // ส่งคำขออัพเดตไปที่ API
      const response = await axios.put('https://smith11.ce.kmitl.ac.th/api/update-notification', {    
        report_id: report_id,
      });

        // console.log("API Response:", response.data.message);
        return response.data; // ส่งค่ากลับไปให้ใช้งาน
    } catch (error) {
        console.error(
            "Error updating notification:",
            error.response?.data?.error || error.message
        );
        return { error: error.response?.data?.error || "Failed to update notification" };
    }
};