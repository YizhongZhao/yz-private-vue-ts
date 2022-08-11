import {useRouter} from "vue-router";

const router = useRouter()

export function locationToLogin() {
    setTimeout(() => {
        router.push({name: 'login'})
    }, 100)
}

export function locationToUpPwd(query) {
    router.push({path: '/update-pwd', query: query})
}