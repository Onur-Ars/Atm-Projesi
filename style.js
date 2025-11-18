let bakiye = 1000;
let yeniSatir = "\r\n";
let metin =
    "1-Bakiye Görüntüleme" + yeniSatir
    + "2-Para Çekme" + yeniSatir
    + "3-Para Yatırma" + yeniSatir
    + "4-Çıkış" + yeniSatir
    + "Lütfen bir değer seçiniz.";
let kullanici = prompt(metin);

switch (kullanici) {
    case "1":
        alert("Bakiyeniz:" + " " + bakiye)
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz."));

        if (isNaN(cekilecekTutar)) {
            alert("Geçerli bir miktar seçiniz!");
        }

        else {
            if (cekilecekTutar <= bakiye) {
                bakiye = bakiye - cekilecekTutar;
                alert("Kalan bakiye :" + " " + bakiye);
            } else {
                alert("Bakiyenizden fazla para çekemezsiniz!" + yeniSatir
                    + "Bakiyeniz:" + " " + bakiye + " " +
                    "Çekilecek tutar :" + " " + cekilecekTutar);
            }
        }
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz."));

        if (isNaN(yatirilacakTutar)) {
            alert("Geçerli bir miktar seçiniz!");
        }

        else {
            bakiye = bakiye + yatirilacakTutar;
            alert("Güncel bakiyeniz:" + " " + bakiye);
        }

        break;

    case "4":
        alert("Sistemden çıkış yapılmıştır.");
        break;

    default:
        alert("Lütfen 1 - 4 arasında bir değer giriniz");
        break;
}