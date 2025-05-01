<template>
  <div class="home">
    <!-- 네비게이션 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-success" href="#">EcoFarm</a>
        <div>
          <button class="btn btn-outline-success me-2" @click="goToLogin">로그인</button>
          <button class="btn btn-success" @click="goToRegister">회원가입</button>
        </div>
      </div>
    </nav>

    <!-- 메인 배너 -->
    <section class="hero text-center py-5">
      <div class="container">
        <h1 class="display-5 fw-bold">친환경 농산물 전산 시스템</h1>
        <p class="lead text-muted">인증부터 유통까지, 안전하고 투명하게</p>
        <button class="btn btn-outline-success mt-3" @click="goToCertification">인증 등록 바로가기</button>
      </div>
    </section>

    <!-- 바로가기 메뉴 -->
    <section class="quick-menu py-4 bg-white">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-4" v-for="menu in menus" :key="menu.title">
            <div class="card shadow-sm h-100 border-0">
              <div class="card-body">
                <div class="mb-3">
                  <i :class="menu.icon" style="font-size: 2rem;"></i>
                </div>
                <img v-if="menu.image" :src="menu.image" class="mb-3" style="height: 40px;" />
                <h5 class="card-title">{{ menu.title }}</h5>
                <p class="card-text text-muted">{{ menu.description }}</p>
                <button class="btn btn-sm btn-outline-success" @click="navigate(menu.link)">이동</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 공지사항 미리보기 -->
    <section class="notice-preview py-4 bg-light">
      <div class="container">
        <h4 class="fw-bold mb-3">공지사항</h4>
        <ul class="list-group">
          <li class="list-group-item" v-for="notice in notices" :key="notice.id">
            {{ notice.title }}
            <span class="text-muted float-end">{{ notice.date }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- 푸터 -->
    <footer class="bg-light text-muted py-4 mt-5 border-top">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 mb-2 fw-bold text-success">친환경 농산물 전산 시스템</div>
          <div class="col-md-3 mb-2">ⓒ 2025 EcoFarm</div>
          <div class="col-md-3 mb-2">
            <a href="#" class="text-muted text-decoration-none me-2">이용약관</a> |
            <a href="#" class="text-muted text-decoration-none ms-2">개인정보처리방침</a>
          </div>
        <div class="col-md-3 mb-2">고객센터 1234-5678
        </div>
      </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => router.push('/login')
const goToRegister = () => router.push('/register')
const goToCertification = () => router.push('/certification')
const navigate = (link) => router.push(link)

const menus = [
  {
    title: '공지사항',
    description: '시스템 업데이트 및 알림 확인',
    icon: 'bi bi-megaphone',
    link: '/notice'
  },
  {
    title: '1:1 문의',
    description: '궁금한 점을 빠르게 해결해보세요',
    icon: 'bi bi-question-circle',
    link: '/qna'
  },
  {
    title: '인증등록',
    description: '친환경 인증 정보를 등록하고 관리',
    icon: 'bi bi-pencil-square',
    link: '/certification'
  }
]

const notices = [
  { id: 1, title: '[공지] 시스템 점검 안내', date: '2025-05-01' },
  { id: 2, title: '신규 인증 등록 방법 안내', date: '2025-04-28' },
  { id: 3, title: '1:1 문의 서비스 오픈', date: '2025-04-20' }
]
</script>

<style scoped>
.hero {
  background-image: url('@/assets/mainban.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 80px 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
