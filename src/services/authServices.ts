import axios from "axios";

const BASE_URL_AUTH = process.env.NODE_ENV == "development"
    ? "http://localhost/RealmTech/auth/"
    : "https://chattonf01.emf-informatique.ch/RealmTech/auth/";

const axiosBase = axios.create({
    baseURL: BASE_URL_AUTH,
})

export default {
    register (username: string, email: string, password: string) {
        return axiosBase.post("/registerNewUser.php", {
            username,
            email,
            password,
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    },
}