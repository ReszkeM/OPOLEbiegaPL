using System.Web.Http;
using System.Web.Http.Cors;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmailController : ApiController
    {
        public void SendEmail(EmailModel model)
        {
            
        }
    }
}