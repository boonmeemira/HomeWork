function convert() {
    var inputValue = document.getElementById('inputValue').value;
    var conversionType = document.getElementById('conversionType').value;
    var resultText = '';

    if (inputValue === '') {
        resultText = 'กรุณากรอกค่าหมายเลขที่ต้องการแปลง';
    } else {
        switch (conversionType) {
            case 'binToDec':
                if (/^[01]+$/.test(inputValue)) {
                    resultText = 'ฐานสิบ: ' + parseInt(inputValue, 2);
                } else {
                    resultText = 'กรุณากรอกหมายเลขฐานสองที่ถูกต้อง';
                }
                break;
            case 'decToOct':
                if (/^\d+$/.test(inputValue)) {
                    resultText = 'ฐานแปด: ' + parseInt(inputValue, 10).toString(8);
                } else {
                    resultText = 'กรุณากรอกหมายเลขฐานสิบที่ถูกต้อง';
                }
                break;
            case 'decToHex':
                if (/^\d+$/.test(inputValue)) {
                    resultText = 'ฐานสิบหก: ' + parseInt(inputValue, 10).toString(16).toUpperCase();
                } else {
                    resultText = 'กรุณากรอกหมายเลขฐานสิบที่ถูกต้อง';
                }
                break;
            case 'hexToDec':
                if (/^[0-9A-Fa-f]+$/.test(inputValue)) {
                    resultText = 'ฐานสิบ: ' + parseInt(inputValue, 16);
                } else {
                    resultText = 'กรุณากรอกหมายเลขฐานสิบหกที่ถูกต้อง';
                }
                break;
            default:
                resultText = 'กรุณาเลือกการแปลงที่ถูกต้อง';
        }
    }

    document.getElementById('result').innerHTML = resultText;
}