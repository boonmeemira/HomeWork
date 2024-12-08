function calculateExpenses() {
    // รับค่าจาก input fields
    var rent = parseFloat(document.getElementById('rent').value) || 0;
    var utilities = parseFloat(document.getElementById('utilities').value) || 0;
    var food = parseFloat(document.getElementById('food').value) || 0;
    var transport = parseFloat(document.getElementById('transport').value) || 0;

    // คำนวณค่าใช้จ่ายรวม
    var totalExpenses = rent + utilities + food + transport;

    // แสดงผลลัพธ์
    document.getElementById('result').innerHTML = 'ค่าใช้จ่ายรวมรายเดือน: ' + totalExpenses.toFixed(2) + ' บาท';
}