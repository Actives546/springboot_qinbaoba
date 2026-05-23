<template>
  <div class="home">
    <van-nav-bar title="亲宝吧" fixed placeholder />

    <div class="home-content">
      <van-notice-bar left-icon="volume-o" text="欢迎来到亲宝吧，为宝宝的成长保驾护航！" />

      <div class="hello-card">
        <van-loading v-if="loading" size="24px" vertical>加载中...</van-loading>
        <div v-else class="hello-msg">
          <van-icon name="smile-o" size="48" color="#ff976a" />
          <p>{{ message }}</p>
        </div>
      </div>

      <van-grid :column-num="4" :border="false" class="nav-grid">
        <van-grid-item icon="notes-o" text="育儿知识" />
        <van-grid-item icon="video-o" text="亲子视频" />
        <van-grid-item icon="music-o" text="儿歌故事" />
        <van-grid-item icon="photo-o" text="成长相册" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getHello } from '@/api'

export default {
  name: 'Home',
  data() {
    return {
      message: '',
      loading: true
    }
  },
  created() {
    this.fetchHello()
  },
  methods: {
    async fetchHello() {
      try {
        const res = await getHello()
        this.message = res.data.message
      } catch (e) {
        this.message = '服务连接失败，请检查后端服务'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.home-content {
  padding: 12px;
}

.hello-card {
  margin: 16px 0;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.hello-msg p {
  margin-top: 12px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.nav-grid {
  margin-top: 16px;
  background: #fff;
  border-radius: 8px;
  padding: 12px 0;
}
</style>
