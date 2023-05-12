<template>
  <div class="progress-bar">
    <div class="bg"></div>
    <div class="bar" :style="{ width: progress + '%' }"></div>
    <div class="label">已加载 {{ progress.toFixed(0) }}%</div>

    <el-button type="primary" @click="load" style="margin-top: 40px;">开始加载</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

let progress = ref<any>(0);

let isPlaying = ref<boolean>(false);

let isCompleted = ref<boolean>(false);

onMounted(() => {
  start();
});

const load = ()=> {
  finish();
}

 const start = () => {
  isPlaying.value = true;
  animateProgress(90,50000)
    .then((res) => {
      if (isCompleted.value) {
        animateProgress(100,1000);
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const finish = ()=> {
    isCompleted.value = true;
    progress.value = 100;
}

const animateProgress = (target, duration) => {
  return new Promise((resolve, reject) => {
    let start = progress.value;
    let end = target;

    const doAnimation = () => {
      const elapsed = Date.now() - startTime;
      
      let currentProgress = Math.min(elapsed / duration, 1);

      progress.value = start + (end - start) * currentProgress;

      if (currentProgress === 1) {
        resolve(true);
      } else if (isCompleted.value) {
        resolve(true);
      } else {
        requestAnimationFrame(doAnimation);
      }
    };
    let startTime = Date.now();
    
    requestAnimationFrame(doAnimation);
  });
};
</script>

<style scoped>
.progress-bar {
  position: relative;
  height: 8px;
  width: 90%;
  margin: 10px auto;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 5px;
}
.bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 5px;
  background-color: #409eff;
  transition: width 0.5s;
}
.label {
  position: absolute;
  top: 20px;
  color: #333;
  font-size: 12px;
}
</style>
