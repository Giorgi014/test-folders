const svg = document.querySelector('svg');

const NUM_SEGEMENTS = 20;
const spacing = 10;
const segments = [];

let t = 0;

for (let i = 0; i < NUM_SEGEMENTS; i++) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', 8);
    circle.setAttribute('fill', `hsl(${(i * 15) % 360}, 100%, 50%)`);
    svg.appendChild(circle);
    segments.push({el: circle, x: 300, y: 100});
}

const animate = () => {
    t += 0.05;

    const headX = 100 + t * 40;
    const headY = 100 + Math.sin(t) * 40;
    segments[0].x = headX;
    segments[0].y = headY;

    for(let i = 1; i < segments.length; i++){
        const prev = segments[i -1];
        const curr = segments[i];

        const dx = prev.x - curr.x;
        const dy = prev.y - curr.y;
        const angle = Math.atan2(dy, dx);


        curr.x = prev.x - Math.cos(angle) * spacing;
        curr.y = prev.y - Math.sin(angle) * spacing;

    }

    for(const s of segments){
        s.el.setAttribute('cx', s.x);
        s.el.setAttribute('cy', s.y);
    }

    if (headX > 600) {
        t = 0;
    }

        requestAnimationFrame(animate);
}

animate();