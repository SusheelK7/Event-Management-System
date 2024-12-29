using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClassLibraryModel;

namespace ClassLibraryDal
{
    public class EventService
    {
        // Thread-safe collection to hold events
        private static readonly List<Event> events = new List<Event>();
       

        // Simulating async data fetching
        public async Task<List<Event>> GetEvents()
        {
            await Task.Delay(100);  // Simulate a delay (e.g., from a database)
            return events;
        }

        
        // Simulating async event creation
        public async Task CreateEvent(Event newEvent)
        {
            await Task.Delay(100);  // Simulate a delay (e.g., from a database)

            if (newEvent == null) throw new ArgumentNullException(nameof(newEvent));

            newEvent.Id = events.Count > 0 ? events.Max(e => e.Id) + 1 : 1; // Assign a new ID based on the max ID
            events.Add(newEvent);
        }

        // Simulating async event update
        public async Task UpdateEvent(Event updatedEvent)
        {
            await Task.Delay(100);  // Simulate a delay (e.g., from a database)

            if (updatedEvent == null) throw new ArgumentNullException(nameof(updatedEvent));

            var eventToUpdate = events.FirstOrDefault(e => e.Id == updatedEvent.Id);
            if (eventToUpdate == null)
            {
                throw new InvalidOperationException($"Event with ID {updatedEvent.Id} not found.");
            }

            // Update event details
            eventToUpdate.Name = updatedEvent.Name;
            eventToUpdate.Date = updatedEvent.Date;
            eventToUpdate.Time = updatedEvent.Time;
            eventToUpdate.Description = updatedEvent.Description;
            eventToUpdate.TimeZone = updatedEvent.TimeZone;   // Updated property
            eventToUpdate.StartTime = updatedEvent.StartTime; // Updated property
            eventToUpdate.EndTime = updatedEvent.EndTime;     // Updated property
            eventToUpdate.Location = updatedEvent.Location;   // Updated property
            eventToUpdate.MultipleDates = updatedEvent.MultipleDates; // Updated property
            eventToUpdate.Price = updatedEvent.Price;
        }

        // Simulating async event deletion
        public async Task DeleteEvent(int eventId)
        {
            await Task.Delay(100);  // Simulate a delay (e.g., from a database)

            var eventToDelete = events.FirstOrDefault(e => e.Id == eventId);
            if (eventToDelete == null)
            {
                throw new InvalidOperationException($"Event with ID {eventId} not found.");
            }

            events.Remove(eventToDelete);
        }

        // Simulating async bulk event deletion
        public async Task DeleteMultipleEvents(List<int> eventIds)
        {
            foreach (var id in eventIds)
            {
                await DeleteEvent(id);
            }
        }
    }
}
