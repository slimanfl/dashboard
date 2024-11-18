<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { VForm } from 'vuetify/components/VForm';
import { useCalendarStore } from './useCalendarStore';

// 👉 store
const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  event: {
    type: null,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'addEvent',
  'updateEvent',
  'removeEvent',
])

const store = useCalendarStore()
const refForm = ref()
const recivers = ref([])
const reciverId = ref(null)
const token = useCookie('accessToken').value;

// 👉 Event
const event = ref(JSON.parse(JSON.stringify(props.event)))

const resetEvent = () => {
  event.value = JSON.parse(JSON.stringify(props.event))
  nextTick(() => {
    refForm.value?.resetValidation()
  })
}

const fetchRecivers = async () => {
  try {
    const response = await fetch('https://booking-back-sand.vercel.app/users?role=resturant', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }

    });
    const data = await response.json();

    data.data.forEach(item => {
      recivers.value.push({
        title: item.username,
        value: item._id
      })
    });
  } catch (error) {

    console.error('Error fetching service types:', error);
  }
};
fetchRecivers()
watch(() => props.isDrawerOpen, resetEvent)

const removeEvent = () => {
  emit('removeEvent', String(event.value.id))

  // Close drawer
  emit('update:isDrawerOpen', false)
}

const handleSubmit = () => {
  console.log('handleSubmit', event.value);
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {

      // If id exist on id => Update event
      if ('id' in event.value)
        emit('updateEvent', event.value)

      // Else => add new event
      else
        emit('addEvent', event.value)

      // Close drawer
      emit('update:isDrawerOpen', false)
    }
  })
}


// 👉 Form
const onCancel = () => {

  // Close drawer
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    resetEvent()
    refForm.value?.resetValidation()
  })
}

const startDateTimePickerConfig = computed(() => {
  const config = {
    enableTime: !event.value.allDay,
    dateFormat: `Y-m-d${event.value.allDay ? '' : ' H:i'}`,
  }

  if (event.value.end)
    config.maxDate = event.value.end

  return config
})

const endDateTimePickerConfig = computed(() => {
  const config = {
    enableTime: !event.value.allDay,
    dateFormat: `Y-m-d${event.value.allDay ? '' : ' H:i'}`,
  }

  if (event.value.start)
    config.minDate = event.value.start

  return config
})

const dialogModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer temporary location="end" :model-value="props.isDrawerOpen" width="370" :border="0"
    class="scrollable-content" @update:model-value="dialogModelValueUpdate">
    <!-- 👉 Header -->
    <AppDrawerHeaderSection :title="event.id ? 'Update Event' : 'Add Event'"
      @cancel="$emit('update:isDrawerOpen', false)">
      <template #beforeClose>
        <IconBtn v-show="event.id" @click="removeEvent">
          <VIcon size="18" icon="tabler-trash" />
        </IconBtn>
      </template>
    </AppDrawerHeaderSection>

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- SECTION Form -->
          <VForm ref="refForm" @submit.prevent="handleSubmit">
            <VRow>
              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField v-model="event.title" label="Title" placeholder="Meeting with Jane" />
              </VCol>

              <!-- 👉 section -->
              <VCol cols="12">
                <AppSelect v-model="event.section" label="Section" placeholder="Select Event Label"
                  :items="store.availableCalendars" :item-title="item => item.label" :item-value="item => item.label">
                  <template #selection="{ item }">
                    <div v-show="event.section" class="align-center" :class="event.section ? 'd-flex' : ''">
                      <VIcon :color="item.raw.color" icon="tabler-circle-filled" size="8" class="me-2" />
                      <span>{{ item.raw.label }}</span>
                    </div>
                  </template>

                  <template #item="{ item, props: itemProps }">
                    <VListItem v-bind="itemProps">
                      <template #prepend>
                        <VIcon size="8" icon="tabler-circle-filled" :color="item.raw.color" />
                      </template>
                    </VListItem>
                  </template>
                </AppSelect>
              </VCol>

              <!-- 👉 Start date -->
              <VCol cols="12">
                <AppDateTimePicker :key="JSON.stringify(startDateTimePickerConfig)" v-model="event.start"
                  label="Start date" placeholder="Select Date" :config="startDateTimePickerConfig" />
              </VCol>

              <!-- 👉 End date -->
              <VCol cols="12">
                <AppDateTimePicker :key="JSON.stringify(endDateTimePickerConfig)" v-model="event.end" label="End date"
                  placeholder="Select End Date" :config="endDateTimePickerConfig" />
              </VCol>

              <VCol cols="12">


                <AppSelect :items="recivers" label="Recivers" :placeholder="$t('Select Item')"
                  v-model="event.reciver_id" clearable clear-icon="tabler-x" />
              </VCol>




              <!-- 👉 Location -->
              <VCol cols="12">
                <AppTextField v-model="event.phone" label="Phone" placeholder="Phone" />
              </VCol>
              <!-- 👉 Location -->
              <VCol cols="12">
                <AppTextField v-model="event.countPerson" label="Count Person" placeholder="Count Person"
                  type="number" />
              </VCol>

              <!-- 👉 Description -->
              <VCol cols="12">
                <AppTextarea v-model="event.description" label="Description" placeholder="Meeting description" />
              </VCol>

              <!-- 👉 Form buttons -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">
                  Submit
                </VBtn>
                <VBtn variant="outlined" color="secondary" @click="onCancel">
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
          <!-- !SECTION -->
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
