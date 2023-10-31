import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { ERR_MESSAGE } from "@/constants";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
    error.value = null;
    isPending.value = true;
    try {
        const response = await auth.signInWithEmailAndPassword(email, password);
        return response;
    } catch (err) {
        console.log(err);
        error.value = ERR_MESSAGE[err.code];
    } finally {
        isPending.value = false;
    }
}

export function useSignIn() {
    return { error, isPending, signIn };
}