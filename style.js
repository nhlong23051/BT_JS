// BT 1
var tinhTien = document.getElementById('tinhTien');
tinhTien.onclick = function (){
    var soNgayLam = +document.getElementById('soNgayLam').value;
    outPut = 100*soNgayLam+'.000'
    var tongTien = document.getElementById('tongTien');
    tongTien.innerHTML = 'Tổng tiền: ' + outPut
}



//BT 2
var tinhToan = document.getElementById('tinhToan');
tinhToan.onclick = function (){
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var number4 = +document.getElementById('number4').value;
    var number5 = +document.getElementById('number5').value;
    outPut2 = (number1 + number2 + number3 + number4 + number5)/5
    var ketQua2 = document.getElementById('ketQua2');
    ketQua2.innerHTML = 'Kết quả: ' + outPut2
}

//BT 3
var quyDoi = document.getElementById('quyDoi');
quyDoi.onclick = function () {
    var soTienHienCo = +document.getElementById('soTienHienCo').value;
    outPut3 = soTienHienCo*23.5;
    var ketQua3 = document.getElementById('ketQua3');
    ketQua3.innerHTML = 'Kết quả: ' + outPut3 + ',000';
}

//BT4
var tinhChuVi = document.getElementById('tinhChuVi');
tinhChuVi.onclick = function(){
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    chuVi = chieuDai+chieuRong
    var ketQua4 = document.getElementById('ketQua4');
    ketQua4.innerHTML = 'Kết quả: ' + chuVi*2
}
var tinhDienTich = document.getElementById('tinhDienTich');
tinhDienTich.onclick = function(){
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    dienTich = chieuDai*chieuRong
    var ketQua4 = document.getElementById('ketQua4');
    ketQua4.innerHTML = 'Kết quả: ' + dienTich
}

//BT 5
var tinhTong = document.getElementById('tinhTong');
tinhTong.onclick = function (){
    var nhapSo = +document.getElementById('nhapSo').value;
    hangChuc = Math.floor(nhapSo/10) 
    hangDonVi = nhapSo%10
    tong2KySo = hangChuc+hangDonVi
    var ketQua5 = document.getElementById('ketQua5').innerHTML = 'Kết quả: ' + tong2KySo;
}