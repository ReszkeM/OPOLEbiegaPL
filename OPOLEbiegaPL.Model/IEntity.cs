namespace OPOLEbiegaPL.Model
{
    public interface IEntity
    {
        int  Id { get; set; }
        bool IsPersistent();
    }
}
