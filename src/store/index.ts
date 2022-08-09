import {defineStore} from 'pinia'
import {Names} from '@/store/store-name'

export const useTestStore = defineStore(Names.USER, {
    state: () => {
        return {
            name: 'admin',
            phoneNumber: 17775208909,
        }
    },
    getters: {},
    actions: {
        setPhoneNumber(val: number) {
            this.phoneNumber = val
        }
    },
})
