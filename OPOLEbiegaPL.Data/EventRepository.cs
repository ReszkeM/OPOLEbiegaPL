using OPOLEbiegaPL.Data.Stores;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public class EventRepository : RepositoryBase<Event>, IRepository<Event>
    {
        public EventRepository()
        {
            Store = EventStore.Store;
        }
    }
}
