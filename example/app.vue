<template>
  <div>
    <label for="dueDate">Due Date:</label>
    <Calendar showIcon dateFormat="yy/mm/dd" id="dueDate" v-model="dueDate" />
    <br />
    <label for="deadline">Deadline (in days):</label>
    <InputNumber
      inputId="integerOnly"
      suffix=" days"
      type="number"
      id="deadline"
      v-model.number="deadline"
    />
    <div :style="{ opacity: notPaidOptions.opacity }">
      <p class="vanish">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch } from "vue";

import Calendar from "primevue/calendar";
import InputNumber from "primevue/inputnumber";

interface NotPaidOptions {
  dueDate: string;
  deadline: number;
  opacity?: number;
}

const dueDate = ref("");
const deadline = ref(1);

watch([dueDate, deadline], ([newDueDate, newDeadline]) => {
  notPaidOptions.dueDate = newDueDate;
  notPaidOptions.deadline = newDeadline;
});

const notPaidOptions = inject<NotPaidOptions>("notPaidOptions", {
  dueDate: "",
  deadline: 1,
  opacity: 1,
});
</script>

<style>
.vanish {
  transition: opacity 0.3 ease;
}
</style>
