
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        userInfo: {
            name: '홍길동',
            type: '생산자',
            businessNo: '123-45-67890',
            gln: '8801234567890'
        }
    }),
    actions: {
        login(user) {
            this.isLoggedIn = true
            this.userInfo = user
        },
        logout() {
            this.isLoggedIn = false
            this.userInfo = {}
        }
    }
})
