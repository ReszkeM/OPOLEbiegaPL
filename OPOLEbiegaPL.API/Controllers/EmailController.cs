using System;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmailController : ApiController
    {
        // TODO zrobić jakiś template
        public string Email => "marek.reszke09@gmail.com";

        public ActionResult SendEmail(EmailModel model)
        {
            var mail = new MailMessage(model.Email, Email)
            {
                Subject = model.Title,
                Body = model.Message,
                IsBodyHtml = false
            };

            var smtpClient = new SmtpClient("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                Credentials = new System.Net.NetworkCredential("************", "*********")
            };

            try
            {
                smtpClient.Send(mail);
                return new JsonResult { ContentType = "Ok", Data = "Ok"};
            }
            catch (Exception e)
            {
                return new JsonResult { ContentType = "Error", Data = "Coś poszło nie tak" };
            }
            
        }
    }
}