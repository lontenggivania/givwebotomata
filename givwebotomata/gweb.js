function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function isScientificNumber(value) {
    // Cek apakah nilai tersebut adalah angka ilmiah (misalnya: hasilnya terlalu besar atau terlalu kecil)
    return Math.abs(value) >= 1e9 || Math.abs(value) <= 1e-9;
}

function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        
        if (isScientificNumber(result)) {
            document.getElementById('display').value = result;
            alert("Good, you're right it's a scientific number!");
        } else {
            document.getElementById('display').value = 'Good!';
            alert("Good, you're right it's a scientific number!");
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
