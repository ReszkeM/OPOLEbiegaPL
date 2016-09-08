const placeAPI = 'http://localhost:57174/api/PlaceApi/';
const friendAPI = 'http://localhost:57174/api/FriendApi/';
const eventAPI = 'http://localhost:57174/api/EventApi/';
const personAPI = 'http://localhost:57174/api/PersonApi/';
const AnnouncementAPI = 'http://localhost:57174/api/AnnouncementApi/';

module.exports = {
    placesURLs: {
        getAll: placeAPI + 'GetAll',
        getLatest: placeAPI + 'GetAll',
        getById: placeAPI + 'GetById/',
        update: placeAPI + 'Update',
        remove: placeAPI + 'Delete/'
    },
    friendsURLs: {
        getAll: friendAPI + 'GetAll',
        getLatest: friendAPI + 'GetLatest',
        getById: friendAPI + 'GetById/',
        update: friendAPI + 'Update',
        remove: friendAPI + 'Delete/'
    },
    eventsURLs: {
        getAll: eventAPI + 'GetAll',
        getLatest: eventAPI + 'GetLatest',
        getById: eventAPI + 'GetById/',
        update: eventAPI + 'Update',
        remove: eventAPI + 'Delete/'
    },
    personsURLs: {
        getAll: personAPI + 'GetAll',
        getLatest: personAPI + 'GetLatest',
        getById: personAPI + 'GetById/',
        update: personAPI + 'Update',
        remove: personAPI + 'Delete/'
    },
    AnnouncementsURLs: {
        getAll: AnnouncementAPI + 'GetAll',
        getLatest: AnnouncementAPI + 'GetLatest',
        getById: AnnouncementAPI + 'GetById/',
        update: AnnouncementAPI + 'Update',
        remove: AnnouncementAPI + 'Delete/'
    }
}