export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

async function getAllEvents(params) {
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
