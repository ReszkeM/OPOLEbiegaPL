using System.Collections.Generic;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public interface IRepository<T> where T : IEntity 
    {
        T GetById(int id);
        T GetLast();
        List<T> GetAll();
        T Add(T entity);
        void Update(T entity);
        void Delete(int id);
    }
}
