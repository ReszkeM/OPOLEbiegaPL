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
                ShortDescription = 
                    "OPOLEbiega.pl to społeczność, która zrzesza pasjonatów biegania zamieszkujących Opole i okolice Opola. " +
                    "OPOLEbiega.pl to także nieformalna grupa biegowa, która na celu ma promowanie Opola i Opolszczyzny na biegowej mapie Polski i Europy." +
                    "Dołączyć do nas może każdy - bez względu na zaawansowanie, płeć, wygląd czy przekonania polityczne i religijne ;) ",
                Description =
                    "OPOLEbiega.pl to społeczność, która zrzesza pasjonatów biegania zamieszkujących Opole i okolice Opola. " +
                    "OPOLEbiega.pl to także nieformalna grupa biegowa, która na celu ma promowanie Opola i Opolszczyzny na biegowej mapie Polski i Europy." +
                    "Dołączyć do nas może każdy - bez względu na zaawansowanie, płeć, wygląd czy przekonania polityczne i religijne ;) " +
                    "OPOLEbiega.pl to społeczność, która zrzesza pasjonatów biegania zamieszkujących Opole i okolice Opola. " +
                    "OPOLEbiega.pl to także nieformalna grupa biegowa, która na celu ma promowanie Opola i Opolszczyzny na biegowej mapie Polski i Europy." +
                    "Dołączyć do nas może każdy - bez względu na zaawansowanie, płeć, wygląd czy przekonania polityczne i religijne ;) " +
                    "OPOLEbiega.pl to społeczność, która zrzesza pasjonatów biegania zamieszkujących Opole i okolice Opola. " +
                    "OPOLEbiega.pl to także nieformalna grupa biegowa, która na celu ma promowanie Opola i Opolszczyzny na biegowej mapie Polski i Europy." +
                    "Dołączyć do nas może każdy - bez względu na zaawansowanie, płeć, wygląd czy przekonania polityczne i religijne ;) " +
                     "OPOLEbiega.pl to społeczność, która zrzesza pasjonatów biegania zamieszkujących Opole i okolice Opola. " +
                    "OPOLEbiega.pl to także nieformalna grupa biegowa, która na celu ma promowanie Opola i Opolszczyzny na biegowej mapie Polski i Europy." +
                    "Dołączyć do nas może każdy - bez względu na zaawansowanie, płeć, wygląd czy przekonania polityczne i religijne ;) ",
                ImageURL = "http://opalenica24.info/wp-content/uploads/2014/10/logo-biegacz.gif",
                Achievements = new List<Achievement>
                {
                    new Achievement
                    {
                        Id = 1,
                        EventName = "Maraton",
                        Distance = 42.2,
                        Time = new TimeSpan(3, 30, 00)
                    },

                    new Achievement
                    {
                        Id = 2,
                        EventName = "Półmaraton",
                        Distance = 21.1,
                        Time = new TimeSpan(1, 45, 00)
                    },
                    new Achievement
                    {
                        Id = 3,
                        EventName = "10km",
                        Distance = 10,
                        Time = new TimeSpan(0, 45, 00)
                    }
                }
            };
        }
    }
}
