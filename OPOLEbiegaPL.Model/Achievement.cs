using System;

namespace OPOLEbiegaPL.Model
{
    public class Achievement : IEntity
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public double Distance { get; set; }
        public TimeSpan Time { get; set; }

        public bool IsPersistent()
        {
            return Id > 0;
        }
    }
}
