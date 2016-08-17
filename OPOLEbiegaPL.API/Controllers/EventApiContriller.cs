using OPOLEbiegaPL.Data;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    public class EventApiController : BaseApiController<EventRepository, Event>
    {
        public EventApiController()
        {
            Repository = new EventRepository();
        }
    }
}