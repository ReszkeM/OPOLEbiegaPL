using System.Collections.Generic;

namespace OPOLEbiegaPL.Model
{
    public class Person : IEntity
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
        public List<Achievement> Achievements { get; set; }

        public bool IsPersistent()
        {
            return Id > 0;
        }
    }
}
