const friendAPI = 'http://localhost:57174/api/FriendApi/';

module.exports = {
   friendsURLS: {
       getAll: friendAPI + '/GetAll',
       getById: friendAPI + 'GetById/',
       update: friendAPI + 'Update',
       remove: friendAPI + 'Delete/'
   }
}