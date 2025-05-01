<template>
  <!-- 우리가 설정한 라우터 경로에 따라 컴포넌트를 보여줌 -->
  <router-view></router-view>
</template>

<script setup>
// 별도 import는 필요 없어
</script>

<style scoped>
/* 전역 스타일을 추가하고 싶다면 여기에 작성 가능 */
body {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #f9f9f9;
}
</style>
