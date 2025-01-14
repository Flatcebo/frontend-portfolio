"use client";

import React, {useRef, useEffect} from "react";

export default function Bubble({skillData, categories}: SkillProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Canvas 크기 설정
    const canvasWidth = 900;
    const canvasHeight = 600;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 랜덤 버블 생성 함수
    const bubbles: any[] = [];
    const centerX = canvasWidth - 900; // 캔버스 중앙 X 좌표
    const centerY = canvasHeight / 2; // 캔버스 중앙 Y 좌표
    const radiusStep = 60; // 각 원형의 반경 증가값
    const maxBubblesPerCircle = 1; // 한 원형에 배치할 최대 버블 수
    let currentRadius = radiusStep; // 현재 반경 초기값

    let bubbleCount = 0;

    categories.forEach((category) => {
      skillData.forEach((skill) => {
        skill[category]?.forEach((item, index) => {
          // 각 버블의 원형 위치 계산
          const bubblesInCurrentCircle = Math.min(
            maxBubblesPerCircle,
            bubbleCount + 1
          );
          const angle =
            (bubbleCount % bubblesInCurrentCircle) *
            ((2 * Math.PI) / bubblesInCurrentCircle);
          const x = centerX + currentRadius * Math.cos(angle);
          const y = centerY + currentRadius * Math.sin(angle);

          // 새로운 반경으로 넘어갈 조건
          if (bubbleCount % maxBubblesPerCircle === 0 && bubbleCount > 0) {
            currentRadius += radiusStep;
          }

          // 버블 생성
          const bubble = {
            x,
            y,
            radius: 30, // 버블 크기: 20~50
            img: new Image(),
            speed: 0, // 움직이지 않음
          };
          bubble.img.src = item.imgUrl;

          bubbles.push(bubble);
          bubbleCount++;
        });
      });
    });
    // 애니메이션 함수
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        // 버블 그리기
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        // 이미지 그리기
        ctx.save();
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(
          bubble.img,
          bubble.x - bubble.radius,
          bubble.y - bubble.radius,
          bubble.radius * 2,
          bubble.radius * 2
        );
        ctx.restore();

        // 버블 이동
        bubble.y -= bubble.speed;
        if (bubble.y + bubble.radius < 0) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [skillData, categories]);

  return <canvas ref={canvasRef} className="border border-gray-300"></canvas>;
}
