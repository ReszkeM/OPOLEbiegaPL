using System;
using System.Collections.Generic;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data
{
    public class EventRepository : RepositoryBase<Event>, IRepository<Event>
    {
        public EventRepository()
        {
            Store = new List<Event>
            {
                EventFactory(1, "Wyjazd1", "Bieszczady", new DateTime(2016, 2, 24, 6, 0, 0)),
                EventFactory(2, "Wyjazd2", "Radków", new DateTime(2016, 3, 17, 6, 0, 0)),
                EventFactory(3, "Wyjazd3", "Tatry", new DateTime(2016, 4, 24, 6, 0, 0)),
                EventFactory(4, "Wyjazd4", "Beskidy", new DateTime(2016, 5, 12, 6, 0, 0)),
                EventFactory(5, "Wyjazd5", "Tatry", new DateTime(2016, 5, 22, 6, 0, 0)),
                EventFactory(6, "Wyjazd6", "Tatry", new DateTime(2016, 6, 11, 6, 0, 0)),
                EventFactory(7, "Wyjazd7", "Góry stołowe", new DateTime(2016, 7, 24, 6, 0, 0)),
            };
        }

        public Event EventFactory(int id, string name, string place, DateTime date)
        {
            return new Event
            {
                Id = id,
                Name = name,
                Date = date,
                Distance = "35km",
                Place = place,
                Description = "Jakiś opis",
                ImagesURLs = new List<string>
                { 
                    "http://opalenica24.info/wp-content/uploads/2014/10/logo-biegacz.gif",
                    "http://interaktywnie.cba.pl/wp-content/uploads/2013/05/biegacz-300x244.jpg"
                }
            };
        }
    }
}
