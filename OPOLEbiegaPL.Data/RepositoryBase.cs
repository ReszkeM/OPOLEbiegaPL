using System.Collections.Generic;
using System.Linq;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public abstract class RepositoryBase<T> where T : IEntity, new()
    {
        public static List<T> Store { get; set; }

        public T GetById(int id)
        {
            return Store.SingleOrDefault(x => x.Id == id);
        }

        public List<T> GetLatest()
        {
            return Store
                .GetRange(Store.Count - 5, 5)
                .OrderByDescending(x => x.Id)
                .ToList();
        }

        public T GetLast()
        {
            return Store.Last();
        }

        public List<T> GetAll()
        {
            return Store
                .OrderByDescending(x => x.Id)
                .ToList();
        }

        public virtual T Add(T entity)
        {
            entity.Id = Store.Count + 1;
            Store.Add(entity);
            return entity;
        }

        public virtual void Update(T entity)
        {
            var oldEntity = Store.SingleOrDefault(x => x.Id == entity.Id);
            Store.Remove(oldEntity);
            Store.Add(entity);
        }

        public virtual void Delete(int id)
        {
            Store.Remove(Store.SingleOrDefault(x => x.Id == id));
        }
    }
}
