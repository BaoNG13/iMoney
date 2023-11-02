import { ref } from "vue";
import { db } from "@/configs/firebase";
import { ERR_MESSAGE } from "@/constants";

const useCollection = (name) => {
    const error = ref(null)

    async function addRecord(record) {
        error.value = null;
        try {
            const response = await db.collection(name).add(record);
            return response;
        } catch (err) {
            console.log(err);
            error.value = ERR_MESSAGE[err.code];
        }
    }
    return {  error, addRecord };
};

export default useCollection;