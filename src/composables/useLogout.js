import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { ERR_MESSAGE } from "@/constants";

const error = ref(null);

async function logout(email, password) {
    error.value = null;
    try {
        const response = await auth.signOut();
        return response;
    } catch (err) {
        console.log(err);
        error.value = ERR_MESSAGE[err.code];
    }
}

export function useLogout() {
    return { error, logout };
}