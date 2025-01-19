window.onload = () => {
    const inputText = document.getElementById("input-text");
    const output = document.getElementById("output");
    const generateBtn = document.getElementById("generate-btn");

    generateBtn.onclick = () => {
        const text = inputText.value.trim();
        if (!text) {
            alert("Please enter text to generate a QR code!");
            return;
        }

        // Clear previous QR code
        output.innerHTML = "";

        try {
            const size = Math.min(output.clientWidth, output.clientHeight) - 20;
            QrCreator.render(
                {
                    text,
                    radius: 0,
                    ecLevel: "L",
                    background: "#fff",
                    size,
                },
                output
            );

            // Show the generated QR code
            const canvas = output.querySelector("canvas");
            if (canvas) {
                canvas.style.display = "block";
            }
        } catch (error) {
            alert("Failed to generate QR code. Please try again!");
        }
    };
};