import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { ERR_MESSAGE } from "@/constants";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullName) {
    isPending.value = true;
    error.value = null;
    try {
        const response = await auth.createUserWithEmailAndPassword(email, password);

        if (!response) throw new Error("Couldn't create a new user!");

        await response.user.updateProfile({displayName: fullName});
        
        return response;
    } catch (err) {
        error.value = ERR_MESSAGE[err.code];
    } finally {
        isPending.value = false;
    }

}

export function useSignUp() {
    return { error, isPending, signUp }
}