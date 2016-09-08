using OPOLEbiegaPL.Data;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    public class PlaceApiController : BaseApiController<PlaceRepository, Place>
    {
        public PlaceApiController()
        {
            Repository = new PlaceRepository();
        }
    }
}