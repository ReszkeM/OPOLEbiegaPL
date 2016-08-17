using System;
using System.Collections.Generic;

namespace OPOLEbiegaPL.Model
{
    public class Event : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Place { get; set; }
        public string Distance { get; set; }
        public string Description { get; set; }
        public List<string> ImagesURLs { get; set; }
    }
}
