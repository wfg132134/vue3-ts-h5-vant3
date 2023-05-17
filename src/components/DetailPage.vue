<template>
  <div class="grid">

  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// ?计算数组中每个元素出现的次数
// const fruits =  ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const count = fruits.reduce((accumulator, currentValue) => {
  
//   accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
//   return accumulator;
// }, {});
// console.log(count);

// ?拍平嵌套数组
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// ?按条件分组
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 25 },
//   { name: 'Emily', age: 30 }
// ];
// const groupedPeople = people.reduce((accumulator, currentValue) => {
//   const key = currentValue.age;
//   if (!accumulator[key]) {
//     accumulator[key] = [];
//   }
//   accumulator[key].push(currentValue);
//   return accumulator;
// }, {});
// console.log(groupedPeople);

// ?将多个数组合并为一个对象

// const keys = ['name', 'age', 'gender'];
// const values = ['Alice', 25, 'female'];
// const person = keys.reduce((accumulator, currentValue, index) => {
//     accumulator[currentValue] = values[index];
//     return accumulator;
//   }, {});
// console.log(person); // Output: { name: 'Alice', age: 25, gender: 'female' }




</script>

<style scoped lang="scss">

</style>
