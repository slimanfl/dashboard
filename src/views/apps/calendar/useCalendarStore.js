import { useCookie } from "@/@core/composable/useCookie";
import axios from "axios";

export const useCalendarStore = defineStore('calendar', {
  // arrow function recommended for full type inference
  state: () => ({
    availableCalendars: [
      {
        color: 'error',
        label: 'HerosStation',
      },
      {
        color: 'primary',
        label: 'EventStation',
      },
      {
        color: 'warning',
        label: 'SpacePlanet',
      },
      {
        color: 'success',
        label: 'IdolLand',
      },
      {
        color: 'info',
        label: 'Diesny',
      },
    ],
    selectedCalendars: ['HerosStation', 'EventStation', 'SpacePlanet', 'IdolLand', 'Diesny'],
  }),
  actions: {
    async fetchEvents() {
      const { data, error } = await useApi(createUrl('/events', {
      }))

      if (error.value)
        return error.value
      return data.value
    },

    async addEvent(event) {
      const temp = {

        title:event.title,
        phone:event.phone,
        countPerson: Number(event.countPerson),
        description: event.description,
        start: event.start,
        end: event.end ,
        section: event.section,
        user_id: useCookie('userData').value._id

      }
     return await axios.post('https://booking-back-sand.vercel.app/events', 
      temp,
        {
          headers: { 'Authorization': `Bearer ${useCookie('accessToken').value}` }
      }
      )
    },
    async updateEvent(event) {
      console.log('eventevent',event);
      const temp = {
        title:event.title,
        phone:event.phone,
        countPerson: Number(event.countPerson),
        description: event.description,
        start: event.start,
        end: event.end ,
        _id : event.id,
        section: event.section,
        user_id: useCookie('userData').value._id
      }
    
     return await axios.patch(`https://booking-back-sand.vercel.app/events/${temp._id}`, temp,
        {
          headers: { 'Authorization': `Bearer ${useCookie('accessToken').value}` }
      }
      )
    },
    async removeEvent(eventId) {
      return await axios.delete(`https://booking-back-sand.vercel.app/events/${eventId}`,
        {
          headers: { 'Authorization': `Bearer ${useCookie('accessToken').value}` }
      }
      )
    },
  },
})
