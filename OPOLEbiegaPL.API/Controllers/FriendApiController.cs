using OPOLEbiegaPL.Data;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    public class FriendApiController : BaseApiController<FriendRepository, Friend>
    {
        public FriendApiController()
        {
            Repository = new FriendRepository();
        }
    }
}