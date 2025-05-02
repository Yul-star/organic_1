<template>
  <div class="home">
    <!-- 상단 네비게이션 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-success" href="#">EcoFarm</a>
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/intro">사업소개</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/certification">인증조회</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/barcode">바코드조회</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq">FAQ</router-link>
          </li>
        </ul>
        <div>
          <template v-if="userStore.isLoggedIn">
            <button class="btn btn-outline-success me-2" @click="goToMyPage">마이페이지</button>
            <button class="btn btn-danger" @click="userStore.logout()">로그아웃</button>
          </template>
          <template v-else>
            <button class="btn btn-outline-success me-2" @click="goToLogin">로그인</button>
            <button class="btn btn-success" @click="goToRegister">회원가입</button>
          </template>
        </div>
      </div>
    </nav>

    <!-- 메인 배너 -->
    <section class="hero text-center py-5 bg-light">
      <div class="container">
        <h2 class="fw-bold">친환경농산물 전산 시스템</h2>
        <p class="text-muted">인증부터 유통까지, 안전하고 투명하게 관리하세요</p>

        <!-- ✅ 인증번호 검색 입력창 및 버튼 (추가된 부분) -->
        <div class="input-group mt-4 justify-content-center">
          <input v-model="certificationNumber" class="form-control w-50" placeholder="인증번호를 입력하세요" />
          <button class="btn btn-success" @click="handleSearch">조회</button>
        </div>

        <div v-if="certificationResult" class="mt-3 text-center">
          <p
              v-if="certificationResult.error"
              class="text-danger bg-white border rounded px-3 py-2 d-inline-block fw-normal"

          >
            {{ certificationResult.error }}
          </p>
          <div v-else class="bg-white border rounded px-3 py-2 d-inline-block">
            <p><strong>제품명:</strong> {{ certificationResult.productName }}</p>
            <p><strong>인증기관:</strong> {{ certificationResult.authority }}</p>
          </div>
        </div>
      </div>

    </section>

    <!-- 회원정보 박스 -->
    <section class="container my-4">
      <div class="p-4 bg-white border rounded">
        <h5 class="fw-bold mb-3">회원 정보</h5>
        <div v-if="userStore.isLoggedIn">
          <p><strong>회원명:</strong> {{ userStore.userInfo.name }}</p>
          <p><strong>회원유형:</strong> {{ userStore.userInfo.type }}</p>
          <p><strong>사업자번호:</strong> {{ userStore.userInfo.businessNo }}</p>
          <p><strong>GLN:</strong> {{ userStore.userInfo.gln }}</p>
        </div>
        <div v-else>
          <p class="text-muted">로그인 후 회원 정보를 확인할 수 있습니다.</p>
          <button class="btn btn-outline-success" @click="goToLogin">로그인</button>
        </div>
      </div>
    </section>

    <!-- 주요 서비스 박스 -->
    <section class="container mb-5">
      <div class="row g-3">
        <div class="col-md-4">
          <div class="p-4 bg-success text-white rounded text-center h-100">
            <h5 class="fw-bold">인증번호 조회</h5>
            <p>등록된 인증번호로 정보를 확인해보세요</p>
            <button class="btn btn-outline-light mt-2" @click="navigate('/certification')">바로가기</button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-primary text-white rounded text-center h-100">
            <h5 class="fw-bold">바코드 조회</h5>
            <p>QR 또는 바코드로 농산물 이력을 추적하세요</p>
            <button class="btn btn-outline-light mt-2" @click="navigate('/barcode')">바로가기</button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-warning text-dark rounded text-center h-100">
            <h5 class="fw-bold">친환경 인증 등록</h5>
            <p>새로운 인증을 손쉽게 등록할 수 있습니다</p>
            <button class="btn btn-outline-dark mt-2" @click="navigate('/register-cert')">바로가기</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { fetchCertification } from '@/api/certification' // ✅ 새로 추가한 API 함수 import

const router = useRouter()
const userStore = useUserStore()

const goToLogin = () => router.push('/login')
const goToRegister = () => router.push('/register')
const goToMyPage = () => router.push('/mypage')
const navigate = (link) => router.push(link)


// ✅ 인증번호 검색 상태 및 함수 추가
const certificationNumber = ref('')
const certificationResult = ref(null)

const handleSearch = async () => {
  try {
    certificationResult.value = await fetchCertification(certificationNumber.value)
  } catch (e) {
    certificationResult.value = { error: '조회 실패' }
  }
}
</script>

<style scoped>
.hero {
  background-image: url('@/assets/mainban.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
</style>
