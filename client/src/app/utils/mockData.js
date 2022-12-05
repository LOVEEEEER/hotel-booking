import rooms from "../mockData/rooms.json";
import httpService from "../services/http.service";

const useMockData = () => {
    async function initialize() {
        try {
            for (const room of rooms) {
                await httpService.put("room/" + room.id, room);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return { initialize };
};

export default useMockData;
