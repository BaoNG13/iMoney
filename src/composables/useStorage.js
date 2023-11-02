import { ref } from "vue"
import { storage } from "@/configs/firebase";
import { useUser } from "./useUser";
import { ERR_MESSAGE } from "@/constants";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
    const error = ref(null);
    const filePath = ref(null);
    const url = ref(null);

    async function uploadFile(file) {
        filePath.value = `${name}/${user.value.uid}/${file.name}`;
        const fileRef = storage.ref(filePath.value);

        try {
            const response = await fileRef.put(file);
            url.value = await response.ref.getDownloadURL();
            return url.value;
        } catch (err) {
            console.log(err);
            error.value = ERR_MESSAGE[err.code];
        }
    }
    return { error, filePath, url, uploadFile };
};

export default useStorage;