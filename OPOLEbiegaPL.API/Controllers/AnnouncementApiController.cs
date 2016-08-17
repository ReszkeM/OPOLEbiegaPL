using OPOLEbiegaPL.Data;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    public class AnnouncementApiController : BaseApiController<AnnouncementRepository, Announcement>
    {
        public AnnouncementApiController()
        {
            Repository = new AnnouncementRepository();
        }
    }
}