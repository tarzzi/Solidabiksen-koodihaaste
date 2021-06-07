$(document).ready(function () {
    $("input").on("keyup change", function () {
      //animations
      if ($("#time").hasClass("hidden")) {
        $("#time").removeClass("hidden");
        $("#fuel").removeClass("hidden");
      }
      $(".fade-in").addClass("animate__animated, animate__fadeIn");
      //calculations
      Laske();
    });
    $("#footer").on("mouseenter", function () {
      $("#madeby").addClass("animate__animated animate__tada");
    });
    $("#footer").on("mouseleave", function () {
      $("#madeby").removeClass("animate__animated animate__tada");
    });
  
    function Laske() {
      // init values
      let matka = $("#matka").val();
      matka = Number(matka);
      let nopeus1 = $("#nopeus1").val();
      nopeus1 = Number(nopeus1);
      let nopeus2 = $("#nopeus2").val();
      nopeus2 = Number(nopeus2);
  
      // calculate elapsed time
      matka_aika1 = matka / nopeus1;
      matka_aika2 = matka / nopeus2;
      let ajat1 = KulunutAika(matka_aika1);
      let ajat2 = KulunutAika(matka_aika2);
      let yksiH = ajat1[0];
      let yksiMin = ajat1[1];
      let kaksiH = ajat2[0];
      let kaksiMin = ajat2[1];
      yksiMin = Number(yksiMin.toFixed(0));
      kaksiMin = Number(kaksiMin.toFixed(0));
  
      // display time
      if (Number(nopeus1)) {
        $("#speed1").text(nopeus1 + " km/h");
        $("#aika1").text(yksiH + "h " + yksiMin + "min");
      } else if (nopeus1 == 0) {
        $("#aika1").text("Pysyt paikallasi");
      }
      if (Number(nopeus2)) {
        $("#speed2").text(nopeus2 + " km/h");
        $("#aika2").text(kaksiH + "h " + kaksiMin + "min");
      } else if (nopeus2 == 0) {
        $("#aika2").text("Pysyt paikallasi");
      }
  
      if (yksiH < kaksiH && yksiMin > kaksiMin) {
        difmin = 60 - yksiMin + kaksiMin;
        difh = kaksiH - yksiH - 1;
      } else if (yksiH > kaksiH && yksiMin < kaksiMin) {
        difmin = 60 - yksiMin + kaksiMin;
        difh = yksiH - kaksiH - 1;
      } else {
        difh = yksiH - kaksiH;
        difmin = yksiMin - kaksiMin;
      }
      difh = Math.abs(difh);
      difmin = Math.abs(difmin);
      if (Number(difmin)) {
        $("#infoAika").html(difh + " h " + difmin + " minuuttia");
      } else if (difmin == 0 && difh == 0) {
        $("#infoAika").html("Nopeudet ovat samat");
      }
  
      // calculate consumption
      let kulutusA = Kulutus(nopeus1, nopeus2, "a");
      let kulutusB = Kulutus(nopeus1, nopeus2, "b");
      let kulutusC = Kulutus(nopeus1, nopeus2, "c");
  
      //display consumption
      if (Number(kulutusA[0])) {
        $("#kulutusA1").html(nopeus1 + "km/h <br>" + kulutusA[0] + "L/100km");
      }
      if (Number(kulutusA[0])) {
        $("#kulutusA2").html(nopeus2 + "km/h <br>" + kulutusA[1] + "L/100km");
      }
      if (Number(kulutusB[0])) {
        $("#kulutusB1").html(nopeus1 + "km/h <br>" + kulutusB[0] + "L/100km");
      }
      if (Number(kulutusB[0])) {
        $("#kulutusB2").html(nopeus2 + "km/h <br>" + kulutusB[1] + "L/100km");
      }
      if (Number(kulutusC[0])) {
        $("#kulutusC1").html(nopeus1 + "km/h <br>" + kulutusC[0] + "L/100km");
      }
      if (Number(kulutusC[0])) {
        $("#kulutusC2").html(nopeus2 + "km/h <br>" + kulutusC[1] + "L/100km");
      }
  
      // elaborate results
      let litraeroA = Kulutusero(kulutusA[0], kulutusA[1], matka);
      let litraeroB = Kulutusero(kulutusB[0], kulutusB[1], matka);
      let litraeroC = Kulutusero(kulutusC[0], kulutusC[1], matka);
  
      if (Number(litraeroA)) {
        $("#infoAk").html("Polttoainetta kului " + litraeroA + " litraa enemmän");
      }
      if (Number(litraeroB)) {
        $("#infoBk").html("Polttoainetta kului " + litraeroB + " litraa enemmän");
      }
      if (Number(litraeroC)) {
        $("#infoCk").html("Polttoainetta kului " + litraeroC + " litraa enemmän");
      }
  
      /*
      Jarrtusmatkan laskenta
      (Nopeus / 10 * nopeus / 10)/ 2
      Reaktioajan laskenta
      (Nopeus / 10) * 3
      */
      let jarrutus1 = Jarrutusmatka(nopeus1);
      let jarrutus2 = Jarrutusmatka(nopeus2);
      let jarrutusero = Math.abs(jarrutus1 - jarrutus2);
      jarrutusero = jarrutusero.toFixed(0);
      if (Number(jarrutusero)) {
        $("#infoJarru").text(jarrutusero + " metriä");
      }
    }
  
    function Jarrutusmatka(nopeus) {
      let jarrutus = ((nopeus / 10) * (nopeus / 10)) / 2;
      let reaktio = (nopeus / 10) * 3;
      jarrutus += reaktio;
      return jarrutus;
    }
  
    function KulunutAika(matka_aika) {
      let tunnit = Math.trunc(matka_aika);
      let minuutit = (matka_aika - tunnit) * 60;
      minuutit = minuutit.toFixed(0);
      minuutit = Math.abs(minuutit);
      tunnit = Math.abs(tunnit);
      return [tunnit, minuutit];
    }
  
    function Kulutus(nopeus1, nopeus2, auto) {
      const autoA = 3;
      const autoB = 3.5;
      const autoC = 4;
      const kulmakerroin = 1.009;
      let kulutus;
      switch (auto) {
        case "a":
          kulutus = autoA;
          break;
        case "b":
          kulutus = autoB;
          break;
        case "c":
          kulutus = autoC;
          break;
      }
      let kulutus1 = kulutus * kulmakerroin ** nopeus1;
      kulutus1 = kulutus1.toFixed(2);
      let kulutus2 = kulutus * kulmakerroin ** nopeus2;
      kulutus2 = kulutus2.toFixed(2);
      return [kulutus1, kulutus2];
    }
  
    function Kulutusero(kulutus1, kulutus2, matka) {
      let litraero = kulutus1 - kulutus2;
      litraero = (litraero * matka) / 100;
      litraero = Math.abs(litraero);
      litraero = Number(litraero.toFixed(2));
      return litraero;
    }
  });
  