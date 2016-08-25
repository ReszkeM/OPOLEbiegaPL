using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using OPOLEbiegaPL.Data;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BaseApiController<T1, T2> : ApiController where T1 : RepositoryBase<T2> where T2 : IEntity, new()
    {
        public T1 Repository { get; set; }

        public T2 GetById(int id)
        {
            return Repository.GetById(id);
        }

        public T2 GetLast()
        {
            return Repository.GetLast();
        }

        public IEnumerable<T2> GetAll()
        {
            return Repository.GetAll();
        }

        public void Delete(int id)
        {
            Repository.Delete(id);
        }

        public void Update(T2 model)
        {
            if (model.IsPersistent())
                Repository.Update(model);
            else
                Repository.Add(model);
        }


    }
}