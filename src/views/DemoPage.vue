<template>
  <div>
    <NavBar title="标题" />
    <!-- <List
      v-model:loading="listLoading"
      :finished="listFinished"
      finished-text="没有更多了"
      @load="onListLoad"
    >
      <Cell v-for="item in listData" :key="item._id" :title="item.name" />
    </List> -->
    <Form>
      <Cell-Group>
        <Field v-model="formData.name" name="name" label="name" placeholder="name" />
        <Field v-model="formData.age" name="age" label="age" placeholder="age" />
      </Cell-Group>
      <div style="margin: 16px;">
        <Button round block type="primary" native-type="submit">
          提交
        </Button>
      </div>
    </Form>
    <div>
      {{ computedName }}
    </div>
    <div>
      {{ watchEffectName }}
    </div>
    
    <Tabbar v-model="tabBarActive">
      <Tabbar-item icon="home-o">标签</Tabbar-item>
      <Tabbar-item icon="search" dot>标签</Tabbar-item>
      <Tabbar-item icon="friends-o">标签</Tabbar-item>
      <Tabbar-item icon="setting-o">标签</Tabbar-item>
    </Tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineOptions, computed, watch, watchEffect } from 'vue'
import { Button, Form, Field, CellGroup, NavBar, Tabbar, TabbarItem, List, Cell } from 'vant';
import { apiGetBooks } from '@/api/user';
defineOptions({
  name: 'DemoA'
})
let tabBarActive = ref(0)
let listLoading = ref(false)
let listFinished = ref(false)
let listData = ref([])
let formData = ref({
  name: '',
  age: '',
  sex: '',
  address: '',
  phone: '',
  hobby: ''
})
let watchEffectName = ref('')
const onListLoad = async () => {
  console.log('list loading');
}
const getBooks = async () => {
  listLoading.value = true
  const res = await apiGetBooks()
  listData.value = res.data.data
  // console.log(listData.value);
  listLoading.value = false
}

// watch (() => formData.name, (n, o) => {
//   console.log(n, o);
// })

watchEffect(() => {
  watchEffectName.value = formData.value.age + 'watchEffect'
  console.log(watchEffectName);
  
  // console.log(formData.name);

})

const computedName = computed(() => {
  return formData.value.name + 'computed'
})

getBooks()
const flatFn = (arr) => {
  if (!Array.isArray(arr)) {
    return
  }
  let flatArr = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatFn(item))
    } else {
      flatArr.push(item)
    }
  })
  return flatArr
}
let arr = [[1,2,3], [4,5,6], [[7,8,9], 10], 11, {}]
console.log(flatFn(arr));

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
