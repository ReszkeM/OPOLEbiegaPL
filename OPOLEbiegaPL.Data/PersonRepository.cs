using OPOLEbiegaPL.Data.Stores;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public class PersonRepository : RepositoryBase<Person>, IRepository<Person>
    {
        public PersonRepository()
        {
            Store = PersonStore.Store;
        }
    }
}
