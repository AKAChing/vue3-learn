<template>
  <div>
    <NavBar title="标题" />
    <ListItem ref="listItemRef" :bookClick="handleClick"></ListItem>
    <!-- <List
      v-model:loading="listLoading"
      :finished="listFinished"
      finished-text="没有更多了"
      @load="onListLoad"
    >
      <ListItem
        v-for="item in listData"
        :key="item._id"
        :book="item"
        @bookClick="handleClick"
      ></ListItem>
    </List> -->
    <Form>
      <Cell-Group>
        <Field v-model="formData.name" name="name" label="name" placeholder="name" />
        <Field v-model="formData.age" name="age" label="age" placeholder="age" />
      </Cell-Group>
      <div style="margin: 16px">
        <Button round block type="primary" native-type="submit"> 提交 </Button>
      </div>
    </Form>
    <div>
      {{ computedName }}
    </div>
    <div>
      {{ watchEffectName }}
    </div>
    <div>
      {{ store.count }}
      {{ store.doubleCount }}
    </div>
    <Button @click="handleJia">+</Button>
    <!-- <router-view></router-view> -->
    <Tabbar v-model="tabBarActive">
      <Tabbar-item icon="home-o">标签</Tabbar-item>
      <Tabbar-item icon="search" dot>标签</Tabbar-item>
      <Tabbar-item icon="friends-o">标签</Tabbar-item>
      <Tabbar-item icon="setting-o">标签</Tabbar-item>
    </Tabbar>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  isRef,
  reactive,
  computed,
  watch,
  watchEffect,
  onMounted,
  onBeforeMount,
  onUnmounted,
  onBeforeUnmount,
  onUpdated,
  onBeforeUpdate
} from 'vue'
import { Button, Form, Field, CellGroup, NavBar, Tabbar, TabbarItem, List, Cell } from 'vant'
import { apiGetBooks } from '@/api/user'
import ListItem from '@/components/ListItem.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = useCounterStore()
const handleJia = () => {
  increment()
}
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
  // console.log('list loading');
}
const getBooks = async () => {
  listLoading.value = true
  const res = await apiGetBooks()
  listData.value = res.data.data
  // console.log(listData.value[0].name);
  listLoading.value = false
}
let listItemRef = ref()

const handleClick = (e: string) => {
  console.log('bookClick', e)
}
watch(
  formData,
  (n, o) => {
    console.log(n, o)
  },
  { deep: true }
)
// watch (() => formData.value.name, (n, o) => {
//   console.log(n, o);
// })

// watchEffect(() => {
//   watchEffectName.value = formData.value.age + 'watchEffect'
//   console.log(watchEffectName.value);
// })

const computedName = computed(() => {
  return formData.value.name + 'computed'
})

// onBeforeMount(() => {
//   // listItemRef.value.fn1()
//   console.log('onBeforeMount');
// })
onMounted(() => {
  // listItemRef.value.fn1()
  // console.log('onMounted');
})
// onBeforeUnmount(() => {
//   console.log('onBeforeUnmount');
// })
// onUnmounted(() => {
//   console.log('onUnmounted');
// })
// onBeforeUpdate(() => {
//   console.log('onBeforeUpdate');
// })
// onUpdated(() => {
//   console.log('onUpdated');
// })
getBooks()
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
