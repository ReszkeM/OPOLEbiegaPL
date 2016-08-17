using System.Collections.Generic;
using System.Linq;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public abstract class RepositoryBase<T> where T : IEntity, new()
    {
        public List<T> Store { get; set; }

        public T GetById(int id)
        {
            return Store.SingleOrDefault(x => x.Id == id);
        }

        public T GetLast()
        {
            return Store.Last();
        }

        public List<T> GetAll()
        {
            return Store;
        }

        public virtual T Add(T entity)
        {
            Store.Add(entity);
            return entity;
        }

        public virtual void Update(T entity)
        {
            var oldEntity = Store.SingleOrDefault(x => x.Id == entity.Id);
            oldEntity = entity;
        }

        public virtual void Delete(int id)
        {
            Store.Remove(Store.SingleOrDefault(x => x.Id == id));
        }
    }
}
