namespace OPOLEbiegaPL.Model
{
    public class Place : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public string GPX { get; set; }

        public bool IsPersistent()
        {
            return Id > 0;
        }
    }
}
