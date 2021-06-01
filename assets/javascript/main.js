
var { Africa, Asia, Europe, Americas, Oceanie } = []

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
                Africa = map.get("Africa")
                Asia = map.get("Asia")
                Europe = map.get("Europe")
                Americas = map.get("Americas")
                Oceanie = map.get("Oceania")
                console.log(map, Oceanie)

                // $('#nights').html();
                $("#region1").html('Africa');
                $.each(Africa, function (index, value) {
                    $("#c1").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> ');

                });
                $("#region2").html('Europe');
                $.each(Europe, function (index, value) {
                    $("#c2").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> ');

                });
                $("#region3").html('Asia');
                $.each(Asia, function (index, value) {
                    $("#c3").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> ');

                });
                $("#region4").html('America');
                $.each(Americas, function (index, value) {
                    $("#c4").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> ');

                });
                $("#region5").html('Oceania');
                $.each(Oceanie, function (index, value) {
                    $("#c5").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> ');

                });
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
    let filteredCountries = []
    var value = this.value.toLowerCase().trim();
    var listCountries = [...Africa, ...Europe, ...Americas, ...Asia, ...Oceanie]
    listCountries.forEach((el) => {
        el.name.toLowerCase().trim() === value ? filteredCountries.push({ region: el.region, name: el.name, flag: el.flag }) : null
    });
    console.log(value)

    if (filteredCountries.length > 0) {
        $('#notFound').hide();

        $('#region1').hide();
        $('#region2').hide();
        $('#region3').hide();
        $('#region4').hide();
        $('#region5').hide();

        $('#c1').hide();
        $('#c2').hide();
        $('#c3').hide();
        $('#c4').hide();
        $('#c5').hide();

        $("#region").html(filteredCountries[0].region);
        $.each(filteredCountries, function (index, value) {
            $("#c").empty();
            $("#c").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> ');
        });
        console.log($("#c"))
        $('#region').show();
        $('#c').show();
        filteredCountries = []

    } else if (filteredCountries.length === 0 && value.length > 0) {
        $('#notFound').show();
        $('#region1').hide();
        $('#region2').hide();
        $('#region3').hide();
        $('#region4').hide();
        $('#region5').hide();

        $('#c1').hide();
        $('#c2').hide();
        $('#c3').hide();
        $('#c4').hide();
        $('#c5').hide();


    } else if (value.length === 0) {
        console.log("value is empty")
        $('#notFound').hide();
        $('#region').hide();
        $('#c').hide();
        $("#region1").show();
        $("#c1").show();
        $("#region2").show();
        $("#c2").show();
        $("#region3").show();
        $("#c3").show();
        $("#region4").show();
        $("#c4").show();
        $("#region5").show();
        $("#c5").show();

    }
});
