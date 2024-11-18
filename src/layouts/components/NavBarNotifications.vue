<script setup>
import axios from "axios";

const notifications =ref([])
const token = useCookie('accessToken').value;

const fetchNotifications = async () => {
  try {
    const response = await fetch('https://booking-back-sand.vercel.app/notifications', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }

    });
    const data = await response.json();
    notifications.value = data.data;
    
  } catch (error) {

    console.error('Error fetching service types:', error);
  }
};

fetchNotifications();

// const notifications = ref([
//   {
//     id: 1,
//     title: 'Congratulation Flora! 🎉',
//     message: 'Won the monthly best seller badge',
//     createdAt: 'Today',
//     status: "read",
//   },
 
// ])

const removeNotification = notificationId => {
  notifications.value.forEach((item, index) => {
    if (notificationId === item.id)
      notifications.value.splice(index, 1)
  })
}

const markRead = notificationId => {
  notifications.value.forEach(item => {
    notificationId.forEach(id => {
      if (id === item.id)
        item.status = 'read'
    })
  })
}

const markUnRead = notificationId => {
  notifications.value.forEach(item => {
    notificationId.forEach(id => {
      if (id === item.id)
        item.status = 'unread'
    })
  })
}

const handleNotificationClick = (notification) => {
  console.log(notification);

  axios.patch(`https://booking-back-sand.vercel.app/notifications/${notification._id}`,
    {},
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }
  )
}
</script>

<template>
  <Notifications
    :notifications="notifications"
    @remove="removeNotification"
    @read="markRead"
    @unread="markUnRead"
    @click:notification="handleNotificationClick"
  />
</template>
