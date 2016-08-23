using OPOLEbiegaPL.Data.Stores;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public class FriendRepository : RepositoryBase<Friend>, IRepository<Friend>
    {
        public FriendRepository()
        {
            Store = FriendStore.Store;
        }
    }
}
