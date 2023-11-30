import axios from "axios";

const BASE_URL_AUTH = "https://chattonf01/RealmTech/auth/";

const axiosBase = axios.create({
    baseURL: BASE_URL_AUTH,
})

export default {
    register (username: string, email: string, password: string) {
        return axiosBase.post("/registerNewUser.php", {
            username,
            email,
            password,
        })
    },
}
