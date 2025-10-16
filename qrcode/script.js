document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const generateButton = document.getElementById('generate-button');
    const canvas = document.getElementById('canvas');

    generateButton.addEventListener('click', () => {
        const text = textInput.value;
        if (text) {
            QRCode.toCanvas(canvas, text, function (error) {
                if (error) console.error(error)
                console.log('success!');
            })
        }
    });
});