namespace OPOLEbiegaPL.Model
{
    public class Friend : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
        public string SiteURL { get; set; }

        public bool IsPersistent()
        {
            return Id > 0;
        }
    }
}
