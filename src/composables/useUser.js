import { ref } from "vue";
import { auth } from "@/configs/firebase";

const user = ref(null);

auth.onAuthStateChanged(function (_user) {
    if (_user) user.value = _user;
});

function getUser() {
    return { user };
}

export function useUser() {
    return { getUser };
}