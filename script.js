const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

let offset = 0; // برای چرخش نوشته‌ها

// فرمول قلب
function heartFunction(t) {
    const x = 16 * Math.sin(t) ** 3;
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x, y };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = 15;

    ctx.fillStyle = "rgba(255, 182, 193, 0.7)";
    ctx.font = "18px Arial";
    
  // هاله متن
    ctx.shadowColor = "rgba(255, 100, 150, 0.6)";
    ctx.shadowBlur = 15;

  ;

    const points = 100; // تعداد نوشته‌ها روی مسیر قلب

    for (let i = 0; i < points; i++) {
        let t = (i / points) * Math.PI * 2 + offset;
        const { x, y } = heartFunction(t);

        ctx.fillText("I Love You", centerX + x * scale, centerY + y * scale);
        // بدون rotate، متن صاف میمونه
    }

    offset += 0.003; // سرعت چرخش

    requestAnimationFrame(draw);
}

draw();