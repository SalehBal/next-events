export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getAllEvents(params) {
    const res = await fetch('https://next-events-5ea51-default-rtdb.firebaseio.com/events.json');
    const data = await res.json();
    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key],
        });
    }
    return events;
}

export async function getEventById(id) {
    const events = await getAllEvents();
    return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const events = await getAllEvents();
    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
