const friendAPI = 'http://localhost:57174/api/FriendApi/';
const eventAPI = 'http://localhost:57174/api/EventApi';
const personAPI = 'http://localhost:57174/api/PersonApi';
const AnnouncementAPI = 'http://localhost:57174/api/AnnouncementApi';

module.exports = {
    friendsURLs: {
        getAll: friendAPI + '/GetAll',
        getById: friendAPI + 'GetById/',
        update: friendAPI + 'Update',
        remove: friendAPI + 'Delete/'
    },
    eventsURLs: {
        getAll: eventAPI + '/GetAll',
        getById: eventAPI + 'GetById/',
        update: eventAPI + 'Update',
        remove: eventAPI + 'Delete/'
    },
    personsURLs: {
        getAll: personAPI + '/GetAll',
        getById: personAPI + 'GetById/',
        update: personAPI + 'Update',
        remove: personAPI + 'Delete/'
    },
    AnnouncementsURLs: {
        getAll: AnnouncementAPI + '/GetAll',
        getById: AnnouncementAPI + 'GetById/',
        update: AnnouncementAPI + 'Update',
        remove: AnnouncementAPI + 'Delete/'
    }
}