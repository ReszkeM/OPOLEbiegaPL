using OPOLEbiegaPL.Data.Stores;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public class AnnouncementRepository : RepositoryBase<Announcement>, IRepository<Announcement>
    {
        public AnnouncementRepository()
        {
            Store = AnnouncementStore.Store;
        }
    }
}
