select "a"."line1",
"a"."cityId",
"ci"."name"
from "addresses" as "a"
join "cities" as "ci" using ("cityId");
