function convertSpeed() {
    var speed = parseFloat(document.getElementById('speed').value);
    var unit = document.getElementById('unit').value;
    var resultText = '';

    if (isNaN(speed) || speed <= 0) {
        resultText = 'กรุณากรอกค่าความเร็วที่ถูกต้อง';
    } else {
        switch (unit) {
            case 'kmh':
                var mps = speed / 3.6; // km/h to m/s
                var mph = speed / 1.609; // km/h to mph
                resultText = `ความเร็วในหน่วยต่าง ๆ: 
                    <br>เมตรต่อวินาที: ${mps.toFixed(2)} m/s
                    <br>ไมล์ต่อชั่วโมง: ${mph.toFixed(2)} mph`;
                break;
            case 'ms':
                var kmh = speed * 3.6; // m/s to km/h
                var mph = speed * 2.237; // m/s to mph
                resultText = `ความเร็วในหน่วยต่าง ๆ: 
                    <br>กิโลเมตรต่อชั่วโมง: ${kmh.toFixed(2)} km/h
                    <br>ไมล์ต่อชั่วโมง: ${mph.toFixed(2)} mph`;
                break;
            case 'mph':
                var kmh = speed * 1.609; // mph to km/h
                var mps = speed / 2.237; // mph to m/s
                resultText = `ความเร็วในหน่วยต่าง ๆ: 
                    <br>กิโลเมตรต่อชั่วโมง: ${kmh.toFixed(2)} km/h
                    <br>เมตรต่อวินาที: ${mps.toFixed(2)} m/s`;
                break;
            default:
                resultText = 'เลือกหน่วยที่ถูกต้อง';
        }
    }

    document.getElementById('result').innerHTML = resultText;
}