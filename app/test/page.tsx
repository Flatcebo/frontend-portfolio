"use client";

import React, {useState, useEffect, useRef} from "react";

export default function Page() {
  const canvasRef = useRef(null);
  const [hoveredBubble, setHoveredBubble] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Canvas 크기 설정
    const canvasWidth = 900;
    const canvasHeight = 600;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 버블 데이터 생성
    const bubbles = [];
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const radiusStep = 80; // 버블 간 거리
    const maxBubblesPerCircle = 8; // 원형으로 배치할 버블 수
    let currentRadius = radiusStep;

    categories.forEach((category) => {
      skillData.forEach((skill) => {
        skill[category]?.forEach((item, index) => {
          const angle =
            (index % maxBubblesPerCircle) *
            ((2 * Math.PI) / maxBubblesPerCircle);
          const x = centerX + currentRadius * Math.cos(angle);
          const y = centerY + currentRadius * Math.sin(angle);
          if ((index + 1) % maxBubblesPerCircle === 0) {
            currentRadius += radiusStep;
          }
          bubbles.push({
            x,
            y,
            radius: 40,
            img: new Image(),
            title: item.title,
          });
          bubbles[bubbles.length - 1].img.src = item.imgUrl;
        });
      });
    });

    // 버블 그리기
    const drawBubbles = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      bubbles.forEach((bubble, index) => {
        const isHovered = index === hoveredBubble;

        // 버블 배경
        ctx.beginPath();
        ctx.arc(
          bubble.x,
          bubble.y,
          bubble.radius * (isHovered ? 1.2 : 1),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = isHovered
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.6)";
        ctx.fill();

        // 이미지 그리기
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          bubble.x,
          bubble.y,
          bubble.radius * (isHovered ? 1.2 : 1),
          0,
          Math.PI * 2
        );
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(
          bubble.img,
          bubble.x - bubble.radius * (isHovered ? 1.2 : 1),
          bubble.y - bubble.radius * (isHovered ? 1.2 : 1),
          bubble.radius * 2 * (isHovered ? 1.2 : 1),
          bubble.radius * 2 * (isHovered ? 1.2 : 1)
        );
        ctx.restore();

        // 텍스트
        if (isHovered) {
          ctx.fillStyle = "#000";
          ctx.font = "16px Arial";
          ctx.textAlign = "center";
          ctx.fillText(bubble.title, bubble.x, bubble.y + bubble.radius + 20);
        }
      });
    };

    // 마우스 이벤트 처리
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found = false;
      bubbles.forEach((bubble, index) => {
        const dx = mouseX - bubble.x;
        const dy = mouseY - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < bubble.radius) {
          setHoveredBubble(index);
          found = true;
        }
      });

      if (!found) {
        setHoveredBubble(null);
      }
    };

    // 이벤트 리스너 등록
    canvas.addEventListener("mousemove", handleMouseMove);

    // 초기화 및 애니메이션
    const animate = () => {
      drawBubbles();
      requestAnimationFrame(animate);
    };

    animate();

    // 정리
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [skillData, categories, hoveredBubble]);

  return <canvas ref={canvasRef} className="border border-gray-300"></canvas>;
}
