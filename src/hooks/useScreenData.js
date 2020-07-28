import { ref, onMounted, onUnmounted } from "vue";
export default function() {
  const todayUser = ref(10000);
  const growthLastDay = ref(10);
  const growthLastMonth = ref(15);
  let task;
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10;
      growthLastDay.value = growthLastDay.value + 1;
    }, 1000);
  });
  onUnmounted(() => {
    task && clearInterval(task);
  });
  return {
    todayUser,
    growthLastDay,
    growthLastMonth
  };
}
