// import $ from 'jquery';

var skins = ["ffdbb4","edb98a","fd9841","fcee93","d08b5b","ae5d29","614335"];
var eyes = ["default","dizzy","eyeroll","happy","close","hearts","side","wink","squint","surprised","winkwacky","cry"];
var eyebrows = ["default","default2","raised","sad","sad2","unibrow","updown","updown2","angry","angry2"];
var mouths = ["default","twinkle","tongue","smile","serious","scream","sad","grimace","eating","disbelief","concerned","vomit"];
var hairstyles = ["bold","longhair","longhairbob","hairbun","longhaircurly","longhaircurvy","longhairdread","nottoolong","miawallace","longhairstraight","longhairstraight2","shorthairdreads","shorthairdreads2","shorthairfrizzle","shorthairshaggy","shorthaircurly","shorthairflat","shorthairround","shorthairwaved","shorthairsides"];
var haircolors = ["bb7748_9a4f2b_6f2912","404040_262626_101010","c79d63_ab733e_844713","e1c68e_d0a964_b88339","906253_663d32_3b1d16","f8afaf_f48a8a_ed5e5e","f1e6cf_e9d8b6_dec393","d75324_c13215_a31608","59a0ff_3777ff_194bff"];
var facialhairs = ["none","magnum","fancy","magestic","light"];
var clothes = ["vneck","sweater","hoodie","overall","blazer"];
var fabriccolors = ["545454","65c9ff","5199e4","25557c","e6e6e6","929598","a7ffc4","ffdeb5","ffafb9","ffffb1","ff5c5c","e3adff"];
var backgroundcolors = ["ffffff","f5f6eb","e5fde2","d5effd","d1d0fc","f7d0fc","d0d0d0"];
var glasses = ["none","rambo","fancy","old","nerd","fancy2","harry"];
var glassopacities = ["10","25","50","75","100"];
var tattoos = ["non","harry","airbender","krilin","front","tribal","tribal2","throat"];
var accesories = ["none","earphones","earring1","earring2","earring3"];
var current_skincolor = "edb98a";
var current_hairstyle = "longhair";
var current_haircolor = "bb7748_9a4f2b_6f2912";
var current_fabriccolors = "545454";
var current_backgroundcolors = "ffffff";
var current_glassopacity = 0.5;
$(document).ready(function() {
    $("body").delegate("#menu_list button","click",function() {
        var id = $(this).attr("id");
        if (id==="download") {
            var current_eyes;
            $("#eyes g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_eyes = id.substr(2);
                }
            });
            var current_eyebrows;
            $("#eyebrows g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_eyebrows = id.substr(3);
                }
            });
            var current_mouth;
            $("#mouths g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_mouth = id.substr(2);
                }
            });
            var current_facialhair = "none";
            $("#facialhair g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_facialhair = id.substr(2);
                }
            });
            var current_clothe;
            $("#clothes g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_clothe = id.substr(2);
                }
            });
            var current_glasses = "none";
            $("#glasses g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_glasses = id.substr(2);
                }
            });
            var current_tattoos = "none";
            $("#tattoos g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_tattoos = id.substr(2);
                }
            });
            var current_accesories = "none";
            $("#accesories g").each(function() {
                if ($(this).css("display")=="inline") {
                    id = $(this).attr("id");
                    current_accesories = id.substr(2);
                }
            });
            var url = "https://vitruvianman.000webhostapp.com/avatarmaker/avatar.php?skincolor="+current_skincolor;
            url += "&hairstyle="+current_hairstyle;
            url += "&haircolor="+current_haircolor;
            url += "&fabriccolors="+current_fabriccolors;
            url += "&eyes="+current_eyes;
            url += "&eyebrows="+current_eyebrows;
            url += "&mouth="+current_mouth;
            url += "&facialhair="+current_facialhair;
            url += "&clothe="+current_clothe;
            url += "&backgroundcolor="+current_backgroundcolors;
            url += "&glasses="+current_glasses;
            url += "&glassopacity="+current_glassopacity;
            url += "&tattoos="+current_tattoos;
            url += "&accesories="+current_accesories;
            window.open(url);
        } else {
            var selected = $(this).html();
            $("#options_title").html("SELECT "+selected);
            $("#options_div").html("");
            var html = "";
            switch (id) {
                case "skincolor":
                    for (var i=0;i<skins.length; i++) {
                        let skin = skins[i];
                        html += "<div class='skins' id='s_"+skin+"' style='background-color:#"+skin+";'></div>";
                    }
                    break;
                case "eyes":
                    for (i=0;i<eyes.length; i++) {
                        let eye = eyes[i];
                        html += "<div class='eyes' id='e_"+eye+"' style='background-color:#"+current_skincolor+";background-position:"+(i*-53)+"px 0px;'></div>";
                    }
                    break;
                case "eyebrows":
                    for (i=0;i<eyebrows.length; i++) {
                        let eyebrows = eyebrows[i];
                        html += "<div class='eyebrows' id='eb_"+eyebrows+"' style='background-color:#"+current_skincolor+";background-position:"+(i*-53)+"px -53px;'></div>";
                    }
                    break;
                case "mouths":
                    for (i=0;i<mouths.length; i++) {
                        let mouths = mouths[i];
                        html += "<div class='mouths' id='m_"+mouths+"' style='background-color:#"+current_skincolor+";background-position:"+(i*-53)+"px -106px;'></div>";
                    }
                    break;
                case "hairstyles":
                    for (i=0;i<hairstyles.length; i++) {
                        let hairstyles = hairstyles[i];
                        html += "<div class='hairstyles' id='h_"+hairstyles+"' style='background-color:#ffffff;background-position:"+(i*-53)+"px -159px;'></div>";
                    }
                    break;
                case "haircolors":
                    for (i=0;i<haircolors.length; i++) {
                        let haircolor = haircolors[i];
                        let haircolor_front = haircolor.split("_");
                        html += "<div class='haircolors' id='hc_"+haircolor+"' style='background-color:#"+haircolor_front[0]+";'></div>";
                    }
                    break;
                case "facialhairs":
                    for (i=0;i<facialhairs.length; i++) {
                        let facialhair = facialhairs[i];
                        let haircolor_front = facialhair.split("_");
                        html += "<div class='facialhairs' id='f_"+facialhair+"' style='background-color:#ffffff;background-position:"+(i*-53)+"px -212px;'></div>";
                    }
                    break;
                case "clothes":
                    for (var i=0;i<clothes.length; i++) {
                        let clothe = clothes[i];
                        html += "<div class='clothes' id='c_"+clothe+"' style='background-color:#ffffff;background-position:"+(i*-53)+"px -265px;'></div>";
                    }
                    break;
                case "fabriccolors":
                    for (var i=0;i<fabriccolors.length; i++) {
                        let fabriccolor = fabriccolors[i];
                        html += "<div class='fabriccolors' id='f_"+fabriccolor+"' style='background-color:#"+fabriccolor+";'></div>";
                    }
                    break;
                case "backgroundcolors":
                    for (var i=0;i<backgroundcolors.length; i++) {
                        let backgroundcolor = backgroundcolors[i];
                        html += "<div class='backgroundcolors' id='g_"+backgroundcolor+"' style='background-color:#"+backgroundcolor+";'></div>";
                    }
                    break;
                case "glasses":
                    for (var i=0;i<glasses.length; i++) {
                        let glass = glasses[i];
                        html += "<div class='glasses' id='g_"+glass+"' style='background-color:#ffffff;background-position:"+(i*-53)+"px -313px;'></div>";
                    }
                    break;
                case "glassopacity":
                    for (var i=0;i<glassopacities.length; i++) {
                        let glassopacity = glassopacities[i];
                        html += "<div class='glassopacity' id='o_"+glassopacity+"' style='background-color:#ffffff;'>"+glassopacity+"%</div>";
                    }
                    break;
                case "tattoos":
                    for (var i=0;i<tattoos.length; i++) {
                        let tattoo = tattoos[i];
                        html += "<div class='tattoos' id='t_"+tattoo+"' style='background-color:#ffffff;background-position:"+(i*-53)+"px -419px;'></div>";
                    }
                    break;
                case "accesories":
                    for (var i=0;i<accesories.length; i++) {
                        let accesory = accesories[i];
                        html += "<div class='accesories' id='a_"+accesory+"' style='background-color:#ffffff;background-position:"+(i*-53)+"px -369px;'></div>";
                    }
                    break;
            }
            $("#options_div").html(html);
            $("#menu_lines").click();
        }
    });
    $("body").delegate("#random","click",function() {
        random();
    });
    $("body").delegate("#menu_lines","click",function() {
        let menu_class = $("#menu").attr("class");
        if (menu_class==="") {
            $("#menu").addClass("active");
            $("#menu").css({
                "border":"0px"
            });
            $("#menu").stop().animate({
                "width":"360px"
            },{
                duration:300,
                complete: function() {
                    $(this).stop().animate({
                        "height":"460px"
                    },{
                        duration:300,
                    });
                }
            });
        } else {
            $("#menu").removeClass("active");
            $("#menu").css({
                "border-right":"1px solid #707070"
            });
            $("#menu").stop().animate({
                "height":"99px"
            },{
                duration:300,
                complete: function() {
                    $(this).stop().animate({
                        "width":"60px"
                    },{
                        duration:300,
                    });
                }
            });
        }
    });
    $("body").delegate(".skins","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        current_skincolor = id;
        $("#skin #body").attr("fill","#"+id);
    });
    $("body").delegate(".eyes","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#eyes g").hide();
        $("#eyes #e_"+id).show();
    });
    $("body").delegate(".eyebrows","click",function() {
        var id = $(this).attr("id");
        id = id.substr(3);
        $("#eyebrows g").hide();
        $("#eyebrows #eb_"+id).show();
    });
    $("body").delegate(".mouths","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#mouths g").hide();
        $("#mouths #m_"+id).show();
    });
    $("body").delegate(".hairstyles","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        current_hairstyle = id;
        $("#hair_front g").hide();
        $("#hair_back g").hide();
        $("#hair_front .h_"+id).show();
        $("#hair_back .h_"+id).show();
        var color = current_haircolor;
        color = color.split("_");
        $("#hair_front .h_"+current_hairstyle+" .tinted").attr("fill","#"+color[0]);
        $("#hair_back .h_"+current_hairstyle+" .tinted").attr("fill","#"+color[1]);
        $("#facialhair g .tinted").attr("fill","#"+color[2]);
    });
    $("body").delegate(".haircolors","click",function() {
        var id = $(this).attr("id");
        id = id.substr(3);
        current_haircolor = id;
        id = id.split("_");
        $("#hair_front .h_"+current_hairstyle+" .tinted").attr("fill","#"+id[0]);
        $("#hair_back .h_"+current_hairstyle+" .tinted").attr("fill","#"+id[1]);
        $("#facialhair g .tinted").attr("fill","#"+id[2]);
    });
    $("body").delegate(".facialhairs","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#facialhair g").hide();
        $("#facialhair #f_"+id).show();
    });
    $("body").delegate(".clothes","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#clothes g").hide();
        $("#clothes #c_"+id).show();
    });
    $("body").delegate(".fabriccolors","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        current_fabriccolors = id;
        $("#clothes g .tinted").attr("fill","#"+id);
    });
    $("body").delegate(".backgroundcolors","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        current_backgroundcolors = id;
        $("#background").attr("fill","#"+id);
    });
    $("body").delegate(".glasses","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#glasses g").hide();
        $("#glasses #g_"+id).show();
    });
    $("body").delegate(".glassopacity","click",function() {
        var id = $(this).attr("id");
        id = parseInt(id.substr(2));
        current_glassopacity = id/100;
        $(".glass").attr("fill-opacity",current_glassopacity);
    });
    $("body").delegate(".tattoos","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#tattoos g").hide();
        $("#tattoos #t_"+id).show();
    });
    $("body").delegate(".accesories","click",function() {
        var id = $(this).attr("id");
        id = id.substr(2);
        $("#accesories g").hide();
        $("#accesories #a_"+id).show();
    });
    random();
})
function random() {
    var rand_skins = skins[Math.floor(Math.random()*skins.length)];
    var rand_eyes = eyes[Math.floor(Math.random()*eyes.length)];
    var rand_eyebrows = eyebrows[Math.floor(Math.random()*eyebrows.length)];
    var rand_mouths = mouths[Math.floor(Math.random()*mouths.length)];
    var rand_hairstyles = hairstyles[Math.floor(Math.random()*hairstyles.length)];
    var rand_haircolors = haircolors[Math.floor(Math.random()*haircolors.length)];
    var rand_facialhairs = facialhairs[Math.floor(Math.random()*facialhairs.length)];
    var rand_clothes = clothes[Math.floor(Math.random()*clothes.length)];
    var rand_fabriccolors = fabriccolors[Math.floor(Math.random()*fabriccolors.length)];
    var rand_backgroundcolors = backgroundcolors[Math.floor(Math.random()*backgroundcolors.length)];
    var rand_glasses = glasses[Math.floor(Math.random()*glasses.length)];
    var rand_glassopacities = parseInt(glassopacities[Math.floor(Math.random()*glassopacities.length)])/100;
    var rand_tattoos = tattoos[Math.floor(Math.random()*tattoos.length)];
    var rand_accesories = accesories[Math.floor(Math.random()*accesories.length)];
    current_skincolor = rand_skins;
    current_fabriccolors = rand_fabriccolors;
    current_backgroundcolors = rand_backgroundcolors;
    current_glassopacity = rand_glassopacities;
    $("#skin #body").attr("fill","#"+rand_skins);
    $("#eyes g").hide();
    $("#eyes #e_"+rand_eyes).show();
    $("#eyebrows g").hide();
    $("#eyebrows #eb_"+rand_eyebrows).show();
    $("#mouths g").hide();
    $("#mouths #m_"+rand_mouths).show();
    current_hairstyle = rand_hairstyles;
    $("#hair_front g").hide();
    $("#hair_back g").hide();
    $("#hair_front .h_"+rand_hairstyles).show();
    $("#hair_back .h_"+rand_hairstyles).show();
    current_haircolor = rand_haircolors;
    var color = current_haircolor;
    color = color.split("_");
    $("#hair_front .h_"+current_hairstyle+" .tinted").attr("fill","#"+color[0]);
    $("#hair_back .h_"+current_hairstyle+" .tinted").attr("fill","#"+color[1]);
    $("#facialhair g .tinted").attr("fill","#"+color[2]);
    $("#facialhair g").hide();
    $("#facialhair #f_"+rand_facialhairs).show();
    $("#clothes g").hide();
    $("#clothes #c_"+rand_clothes).show();
    $("#glasses g").hide();
    $("#glasses #g_"+rand_glasses).show();
    $(".glass").attr("fill-opacity",rand_glassopacities);
    $("#clothes g .tinted").attr("fill","#"+rand_fabriccolors);
    $("#background").attr("fill","#"+rand_backgroundcolors);
    $("#tattoos g").hide();
    $("#tattoos #t_"+rand_tattoos).show();
    $("#accesories g").hide();
    $("#accesories #a_"+rand_accesories).show();
}
