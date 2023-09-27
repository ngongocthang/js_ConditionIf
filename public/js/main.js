document.writeln("cau 9.1  <br>")

var a = parseFloat(prompt(" cau 9.1 nhap vao mot so nguyen :"));
if (a < 0)
    document.writeln("a la so nguyen am ! <br>")
else
    document.writeln("a la so nguyen duong ! <br>")


document.writeln("cau 9.2 <br>")
var n = parseFloat(prompt("cau 9.2 nhap vao mot so nguyen n:"));
if (n % 3 == 0 || n % 5 == 0 || n % 3 == 0 & n % 5 == 0)
    document.writeln("n chia het cho 5 hoac 3 !<br>");
else
    document.writeln("n khong chia het cho 3 hoac 5 !<br>");


document.writeln("cau 9.3 <br>");
var month = prompt("cau 9.3 nhap vao mot thang trong nam !")
if (month == 0)
    document.writeln("khong phai thang trong nam !<br>");
else {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
        document.writeln("thang co 31 ngay ! <br>")
    else {
        if (month == 2)
            document.writeln("thang nay co 28-29 ngay !<br>")
        else {
            if (month == 4 || month == 6 || month == 9 || month == 11)
                document.writeln("thang nay co 30 ngay !<br>")
        }
    }

}

document.writeln("cau 9.4 <br>");
var a1 = prompt("nhap gia tri so A : ")
var b1 = prompt("nhap gia tri so B : ")
var c1 = prompt("nhap gia tri so C : ")
var denta = b1 * b1 - 4 * a1 * c1
if (a1 == 0) {
    document.writeln(" đây là phương trình bặc 1")
}
else {
    if (denta < 0) {
        document.writeln('phương trình vô nghiệm' + '<br>')
    }
    else {
        if (denta == 0) {
            var kq = -(b1 / 2 * a1)
            document.writeln('phương trình có 1  nghiệm :' + kq + '<br>')
        }
        else {
            var kq1 = (-b1 + Math.sqrt(denta)) / (2 * a1)
            var kq2 = (-b1 - Math.sqrt(denta)) / (2 * a1)
            document.writeln('phương trình có 2  nghiệm :' + kq1 + '<br>' + kq2)

        }
    }
}

document.writeln("cau 9.5 <br>");
var A = parseFloat(prompt("Nhập số thứ nhất:"));
var B = parseFloat(prompt("Nhập số thứ hai:"));
var C = parseFloat(prompt("Nhập số thứ ba:"));
if (A <= 0 || B <= 0 || C <= 0)
    document.writeln("khong dam bao yeu cau !<br>")
else {
    if ((A + B) > C && (A + C) > B && (B + C) > A)
        document.writeln("ba so A,B,C la ba canh cua mot tam giac !<br>")
    else
        document.writeln("ba so A,B,C khong phai la ba canh cua mot tam giac !<br>")
}




