using OPOLEbiegaPL.Data.Stores;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public class PlaceRepository : RepositoryBase<Place>, IRepository<Place>
    {
        public PlaceRepository()
        {
            Store = PlaceStore.Store;
        }
    }
}
