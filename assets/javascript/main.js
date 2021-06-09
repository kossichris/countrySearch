
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
                Africa = map.get("Africa");  Asia = map.get("Asia");  Europe = map.get("Europe"); Americas = map.get("Americas");  Oceanie = map.get("Oceania")

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
        el.name.toLowerCase().trim().indexOf(value) !== -1 ? filteredCountries.push({ region: el.region, name: el.name, flag: el.flag }) : null
    });
    if (filteredCountries.length > 0) {
        $('#notFound').hide();
        $('#region1').hide(); $('#region2').hide(); $('#region3').hide(); $('#region4').hide(); $('#region5').hide();
        $('#c1').hide(); $('#c2').hide(); $('#c3').hide(); $('#c4').hide(); $('#c5').hide();

        var africa = filteredCountries.filter(element => { return element.region === "Africa" });
        var asia = filteredCountries.filter(element => { return element.region === "Asia" });
        var europe = filteredCountries.filter(element => { return element.region === "Europe" });
        var americas = filteredCountries.filter(element => { return element.region === "Americas" });
        var oceania = filteredCountries.filter(element => { return element.region === "Oceania" });

        $("#c1").empty(); $("#c2").empty(); $("#c3").empty(); $("#c4").empty(); $("#c5").empty();


        africa.length > 0 ? $("#region1").html('Africa'): null;
        $.each(africa, function (index, value) { $("#c1").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> '); });

        europe.length > 0 ? $("#region2").html('Europe') :null;
        $.each(europe, function (index, value) { $("#c2").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> '); });

        asia.length > 0 ? $("#region3").html('Asia'): null;
        $.each(asia, function (index, value) { $("#c3").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> '); });

        americas.length > 0 ? $("#region4").html('America'): null;
        $.each(americas, function (index, value) { $("#c4").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> '); });

        oceania.length > 0 ? $("#region5").html('Oceania'): null;
        $.each(oceania, function (index, value) {$("#c5").append('<img class="flag" src="' + value.flag + '" />' + '  ' + value.name + ' <br/> ');});

        $('#region1').show();$('#region2').show();$('#region3').show();$('#region4').show();$('#region5').show();
        $('#c1').show();$('#c2').show();$('#c3').show();$('#c4').show();$('#c5').show();

        africa = []; europe = []; americas = []; oceania = [] ;asia = []


    } else if (filteredCountries.length === 0 && value.length > 0) {
        $('#notFound').show();$('#region1').hide();$('#region2').hide();$('#region3').hide();$('#region4').hide();$('#region5').hide();
        $('#c1').hide();$('#c2').hide();$('#c3').hide();$('#c4').hide();$('#c5').hide();
    } else if (value.length === 0) {
        console.log("value is empty")
        $('#notFound').hide();  $("#region1").show();$("#c1").show(); $("#region2").show();$("#c2").show();$("#region3").show();
        $("#c3").show();$("#region4").show();$("#c4").show();$("#region5").show();$("#c5").show();
    }
});
