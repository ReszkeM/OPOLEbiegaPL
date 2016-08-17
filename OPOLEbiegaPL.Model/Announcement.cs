using System;

namespace OPOLEbiegaPL.Model
{
    public class Announcement : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Place { get; set; }
        public string Distance { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
    }
}
