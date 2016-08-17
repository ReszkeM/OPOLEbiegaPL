using System.Collections.Generic;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public class FriendRepository : RepositoryBase<Friend>, IRepository<Friend>
    {
        public FriendRepository()
        {
            Store = new List<Friend>
            {
                FriendFactory(1, "Friend1"),
                FriendFactory(2, "Friend2"),
                FriendFactory(3, "Friend3"),
                FriendFactory(4, "Friend4"),
                FriendFactory(5, "Friend5"),
                FriendFactory(6, "Friend6"),
                FriendFactory(7, "Friend7")
            };
        }

        public Friend FriendFactory(int id, string name)
        {
            return new Friend
            {
                Id = id,
                Name = name,
                ImageURL = "http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png"
            };
        }
    }
}
