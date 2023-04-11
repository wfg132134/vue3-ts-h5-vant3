<template>
  <div>
    home page
    <el-button type="primary" class="aa" @click="addDataHandel"
      ><span>添加</span></el-button>
      <el-button type="primary" class="aa" @click="delDataHandel">删除</el-button>
      <el-button type="primary" class="aa" @click="getAllDataHandel">获取所有</el-button>
      <el-button type="primary" class="aa" @click="getOneDataHandel">查询一条</el-button>
    <el-date-picker type="date" placeholder="Pick a day" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMydata } from "@/api";
import DB from "@/utils/indexedDB";

export default defineComponent({
  setup() {
    const data = getMydata();
    console.log("data", data);
    const db = new DB("mytest");
    db.openStore("room", "id");
    function addDataHandel() {
      // 由于打开 IndexedDB是异步的加个定时器避免 db对象还没获取到值导致 报错
      setTimeout(() => {
        db.updateItem("room", {
          nose: "33",
          eye: "比较大",
        });
      // 传入id就可以进行修改的操作
      //   db.updateItem("room", {
      //     id: 6,
      //     nose: "443",
      //     eye: "比较小",
      //   });
      }, 200);
    }
    function delDataHandel() {
      // 由于打开 IndexedDB是异步的加个定时器避免 db对象还没获取到值导致 报错
      setTimeout(() => {
        db.deleteItem("room", 8);
      }, 200);
    }
    function getAllDataHandel() {
      // 由于打开 IndexedDB是异步的加个定时器避免 db对象还没获取到值导致 报错
      setTimeout(() => {
        db.getItemList("room");
      }, 200);
    }

    function getOneDataHandel() {
      // 由于打开 IndexedDB是异步的加个定时器避免 db对象还没获取到值导致 报错
      setTimeout(() => {
        db.getItemOne("room", 6);
      }, 200);
    }
    return {
      addDataHandel,
      delDataHandel,
      getAllDataHandel,
      getOneDataHandel,
    };
  },
});
</script>

<style lang="scss" scoped>
.aa {
  span {
    color: $red;
  }
}
</style>
