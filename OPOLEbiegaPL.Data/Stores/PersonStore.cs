using System;
using System.Collections.Generic;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data.Stores
{
    public static class PersonStore
    {
        public static List<Person> Store = new List<Person>
        {
            PresonFactory(1, "Marek", "Reszke"),
            PresonFactory(2, "Imie", "Nazwisko"),
            PresonFactory(3, "Jan", "Kowalski"),
            PresonFactory(4, "Adam", "Nowak"),
            PresonFactory(5, "Dawid", "Kwiatkowski"),
            PresonFactory(6, "Łukasz", "Gil"),
            PresonFactory(7, "Marcin", "K"),
            PresonFactory(8, "Marek", "Marek"),
            PresonFactory(9, "Dawid", "Łukasz")
        };

        public static Person PresonFactory(int id, string firstName, string lastName)
        {
            return new Person
            {
                Id = id,
                FirstName = firstName,
                LastName = lastName,
                Age = 18,
                Description = "Jakiś opis",
                ImageURL = "http://opalenica24.info/wp-content/uploads/2014/10/logo-biegacz.gif",
                Achievements = new List<Achievement>
                {
                    new Achievement
                    {
                        EventName = "Event",
                        Distance = 21.1,
                        Time = new TimeSpan(1, 45, 00)
                    }
                }
            };
        }
    }
}
