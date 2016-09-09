using System.Collections.Generic;
using OPOLEbiegaPL.Model;

namespace OPOLEbiegaPL.Data.Stores
{
    public static class PlaceStore
    {
        public static List<Place> Store = new List<Place>
            {
                EventFactory(1, "Trasa1"),
                EventFactory(2, "Trasa2"),
                EventFactory(3, "Trasa3")
            };

        public static Place EventFactory(int id, string name)
        {
            return new Place
            {
                Id = id,
                Name = name,
                Address = "Adres",
                Date = "każdy wtorek o 19",
                GPX = "https://lh4.googleusercontent.com/inJ7mAPCkNVH5LwKS7A1TDg87dIjCai_KlljhHESSUQ7Z7-qOOlL8cc7w4nJUtOFpmNOwv2jQEBp3A=w1366-h643",
                Description =   "Serwujemy Wam ciekawą pętlę, której dystans wynosi ~5 km.\n" +
                                "Pętla prowadzi przez główne aleje wyspy dzięki czemu jest łatwa do zapamiętania " +
                                "oraz w miarę możliwości pozbawiona zbędnych zakrętów i lawirowań między alejkami." +
                                "3 różne dystanse do wyboru:\n" +
                                "- amatorskie 5 km\n" +
                                "- zaawansowane 10 km\n" +
                                "- \"harpagańskie\" 15 km:)" 
            };
        }
    }
   
}
