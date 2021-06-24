function sendWA(){
    var nama = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("number").value;
    var message = document.getElementById("message").value;
    
    var name = encodeURIComponent(nama);
    var mail = encodeURIComponent(email);
    var nohp = encodeURIComponent(phone);
    var pesan = encodeURIComponent(message);

    if (name == ""){
        return;
    } else if (nohp == ""){
        return;
    } else if (pesan == ""){
        return;
    }
    var walink = "https://wa.me/";
    var notujuan = 6287837732237;

    const wa_link = walink+notujuan+"?text=Saya%20ingin%20bertanya%0A%0ANama%3A%20"+name+"%0ANo%20HP%3A%20"+nohp+"%0AEmail%3A%20"+mail+"%0APesan%3A%20"+pesan+"";
    window.open(wa_link,'_blank');
}