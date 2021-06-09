
var { Africa, Asia, Europe, Americas, Oceanie } = {}

$(document).ready(function () {
    $('#notFound').hide();
    $(".open").on("click", function () {
        let endpoint = 'https://restcountries.eu/rest/v2/all'

        $.ajax({
            url: endpoint,
            dataType: 'json',
            success: function (result) {
                // function groupBy(list, keyGetter) {
                const map = new Map();
                result.forEach((item) => {
                    const key = item.region;
                    const collection = map.get(key);
                    if (!collection) {
                        map.set(key, [item]);
                    } else {
                        collection.push(item);
                    }
                });

                const africa = map.get("Africa")
                Africa = { region: "Africa", countries: africa }


                const asia = map.get("Asia")
                Asia = { region: "Asia", countries: asia }


                const europe = map.get("Europe")
                Europe = { region: "Europe", countries: europe }


                const america = map.get("Americas")
                Americas = { region: "Americas", countries: america }


                const oceanie = map.get("Oceania")
                Oceanie = { region: "Oceania", countries: oceanie }

                var l = []
                l[0] = Africa; l[1] = Asia; l[2] = Europe; l[3] = Americas; l[4] = Oceanie
                console.log(l)
                // $('#nights').html();

                $("#region").html(l[0].region + ' <br/> ');
                for (const vc of Africa.countries) {
                    $("#c").append(' <span class="over"> <img class="flag" src="' + vc.flag + '" /> <span>' + '  ' + vc.name + '  </span> </span> <br/> ');
                }
                $("#region1").html(l[1].region + ' <br/> ');
                for (const vc of Asia.countries) {
                    $("#c1").append(' <span class="over"> <img class="flag" src="' + vc.flag + '" /> <span>' + '  ' + vc.name + '  </span> </span> <br/> ');
                }
                $("#region2").html(l[2].region + ' <br/> ');
                for (const vc of Europe.countries) {
                    $("#c2").append(' <span class="over"> <img class="flag" src="' + vc.flag + '" /> <span>' + '  ' + vc.name + '  </span> </span> <br/> ');
                }
                $("#region3").html(l[3].region + ' <br/> ');
                for (const vc of Americas.countries) {
                    $("#c3").append(' <span class="over"> <img class="flag" src="' + vc.flag + '" /> <span>' + '  ' + vc.name + '  </span> </span> <br/> ');
                }
                $("#region4").html(l[4].region + ' <br/> ');
                for (const vc of Oceanie.countries) {
                    $("#c4").append(' <span class="over"> <img class="flag" src="' + vc.flag + '" /> <span>' + '  ' + vc.name + '  </span> </span> <br/> ');
                }
                return map;
            },
            error: function (res) {
                console.log(res)
            }
        })
        $(".popup-overlay, .popup-content").addClass("active");
    });
});

$("#myInput").on("keyup", function () {
    var value = this.value.toLowerCase().trim();
        $("#wrap-region a span").css({"display":"contents"}).filter(function (res) {
            return $(this).text().toLowerCase().trim().indexOf(value) == -1;
        }).css({"display":"none"})
        $(".flag").width(15)
});

