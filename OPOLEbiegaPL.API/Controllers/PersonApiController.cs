using OPOLEbiegaPL.Data;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    public class PersonApiController : BaseApiController<PersonRepository, Person>
    {
        public PersonApiController()
        {
            Repository = new PersonRepository();
        }
    }
}