select "countries"."name",
count("cities")
from "countries"
join "cities" using ("countryId")
group by"countries"."name";
