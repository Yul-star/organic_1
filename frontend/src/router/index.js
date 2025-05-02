// ✅ src/router/index.js 파일 전체 코드 예시

import { createRouter, createWebHistory } from 'vue-router'

// 페이지 컴포넌트 import
import HomeView from '@/views/HomeView.vue'
import CertificationView from '@/views/CertificationView.vue'
import BarcodeView from '@/views/BarcodeView.vue'
import RegisterCertView from '@/views/RegisterCertView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MyPageView from '@/views/MyPageView.vue'
import IntroView from '@/views/IntroView.vue'
import FaqView from '@/views/FaqView.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/certification',
        name: 'Certification',
        component: CertificationView
    },
    {
        path: '/barcode',
        name: 'Barcode',
        component: BarcodeView
    },
    {
        path: '/register-cert',
        name: 'RegisterCert',
        component: RegisterCertView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/mypage',
        name: 'MyPage',
        component: MyPageView
    },
    {
        path: '/intro',
        name: 'Intro',
        component: IntroView
    },
    {
        path: '/faq',
        name: 'faq',
        component: FaqView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router