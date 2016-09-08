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
                GPX = "https://lh4.googleusercontent.com/inJ7mAPCkNVH5LwKS7A1TDg87dIjCai_KlljhHESSUQ7Z7-qOOlL8cc7w4nJUtOFpmNOwv2jQEBp3A=w1366-h643",
                ShortDescription = "krótki opis trasy krótki opis trasy krótki opis trasy krótki opis trasy krótki opis trasy krótki opis trasy",
                Description = "Garmin Ultra Race to zupełnie nowa impreza na biegowej mapie Polski, która ma szanse na dobre wpisać się w pejzaż górskich szuraczy.\n" +
                               "Biegi Garmin Ultra Race odbędą się w Górach Stołowych w Radkowie w dniach 17 - 18 września 2016 roku.\n" +
                                "Swoich sił w tej imprezie próbować będą także nasi - Marek i Mariusz \"Hardy Marian\" zmierzą się z trasą na dystansie ultra.\n" +
                                "Na pokonanie trudnej technicznie trasy, liczącej 53 kilometrów, będą mieli 10 godzin.Trasa wiedzie przez główne szlaki Gór Stołowych, " +
                                "które znane są z kamiennych, stromych i \"mocnych technicznie\" ścieżek co dodatkowo utrudni nie mała suma podbiegów, licząca 1840 metrów.\n" +
                                "Start i meta zlokalizowane będą w okolicy Zalewu Radkowskiego, co sprawi, że nie będzie to tylko impreza dla zawodników, ale także dla ich rodzin i kibiców.\n" +
                                "Zapraszamy Was do kibicowania naszym! :) Dodajcie im energii i ducha do walki:) \n Możecie także kibicować na miejscu - do Radkowa jedzie się bardzo przyjemnie;)"
            };
        }
    }
   
}
