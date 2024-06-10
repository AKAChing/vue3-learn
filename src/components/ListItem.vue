<template>
  <div class="container" @click="handleClick">
    <div>{{ book.name }}</div>
    <div>{{ book.price }}</div>
    <div>{{ book.tags }}</div>
    <div>{{ book.is_hot }}</div>
    <div>{{ book.pub_time }}</div>
  </div>
</template>

<script lang="ts" setup>
import { type Book, type Books } from '@/types'
import useBook from './hooks/useBook'
const props = defineProps({
  book: {
    type: Object,
    default: () => ({
      name: {
        type: String,
        default: '书籍默认名称'
      },
      price: {
        type: Number,
        default: 0
      },
      tags: {
        type: Array,
        default: () => []
      },
      is_hot: {
        type: Boolean,
        default: false
      },
      pub_time: {
        type: String,
        default: '2024-06-08'
      }
    })
  }
})
// console.log(props.book);
// const emits = defineEmits('bookClick')
const emits = defineEmits(['bookClick'])
const handleClick = () => {
  // console.log('点击事件');

  emits('bookClick', props.book.name)
}
const fn1 = () => {
  console.log(123)
}
defineExpose({
  fn1
})
const { myfn } = useBook()
myfn()
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
