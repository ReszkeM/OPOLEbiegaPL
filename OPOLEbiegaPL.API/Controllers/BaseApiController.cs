using System.Collections.Generic;
using System.Web.Http;
using OPOLEbiegaPL.Data;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.API.Controllers
{
    public class BaseApiController<T1, T2> : ApiController where T1 : RepositoryBase<T2> where T2 : IEntity, new()
    {
        public T1 Repository { get; set; }

        public T2 GetById(int id)
        {
            return Repository.GetById(id);
        }

        public T2 GetByLast()
        {
            return Repository.GetLast();
        }

        public IEnumerable<T2> GetAll()
        {
            return Repository.GetAll();
        }

        public void Add(T2 model)
        {
            Repository.Add(model);
        }

        public void PUpdateut(T2 model)
        {
            Repository.Update(model);
        }

        public void Delete(int id)
        {
            Repository.Delete(id);
        }
    }
}