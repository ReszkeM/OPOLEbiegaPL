using System;

namespace OPOLEbiegaPL.Model
{
    public class Event : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Place { get; set; }
        public string Details { get; set; }
        public string EventReport { get; set; }
        public string ImageURL { get; set; }
        public string GalleryURL { get; set; }

        public bool IsPersistent()
        {
            return Id > 0;
        }
    }
}
