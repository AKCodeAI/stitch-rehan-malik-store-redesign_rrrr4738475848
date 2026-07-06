"use client";

import { useEffect, useRef } from "react";

export default function GoldShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = (canvas?.getContext("webgl") || canvas?.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!canvas || !gl) return;

    const c = canvas;
    const g = gl;

    function syncSize() {
      c.width = c.clientWidth || 1280;
      c.height = c.clientHeight || 720;
    }
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        float t = u_time * 0.2;
        vec2 p = uv * 3.0;

        for (int i = 1; i < 4; i++) {
          float fi = float(i);
          p += vec2(
            0.7 / fi * sin(fi * p.y + t + 0.3 * fi) + 0.8,
            0.4 / fi * sin(fi * p.x + t + 0.3 * fi) + 1.6
          );
        }

        float col = 0.5 + 0.5 * sin(p.x + p.y);

        vec3 gold = vec3(0.83, 0.68, 0.21);
        vec3 darkGold = vec3(0.4, 0.3, 0.1);
        vec3 black = vec3(0.05, 0.05, 0.05);

        vec3 finalCol = mix(black, darkGold, col);
        finalCol = mix(finalCol, gold, pow(col, 3.0));

        gl_FragColor = vec4(finalCol, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      const s = g.createShader(type)!;
      g.shaderSource(s, src);
      g.compileShader(s);
      return s;
    }

    const prog = g.createProgram()!;
    g.attachShader(prog, createShader(g.VERTEX_SHADER, vs));
    g.attachShader(prog, createShader(g.FRAGMENT_SHADER, fs));
    g.linkProgram(prog);
    g.useProgram(prog);

    const buf = g.createBuffer();
    g.bindBuffer(g.ARRAY_BUFFER, buf);
    g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), g.STATIC_DRAW);

    const pos = g.getAttribLocation(prog, "a_position");
    g.enableVertexAttribArray(pos);
    g.vertexAttribPointer(pos, 2, g.FLOAT, false, 0, 0);

    const uTime = g.getUniformLocation(prog, "u_time");
    const uRes = g.getUniformLocation(prog, "u_resolution");

    let mouseX = c.width / 2;
    let mouseY = c.height / 2;

    const handleMouse = (event: MouseEvent) => {
      const rect = c.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouseX = ((event.clientX - rect.left) / rect.width) * c.width;
        mouseY = (1.0 - (event.clientY - rect.top) / rect.height) * c.height;
      }
    };
    window.addEventListener("mousemove", handleMouse);

    let animId: number;

    function render(t: number) {
      syncSize();
      g.viewport(0, 0, c.width, c.height);
      if (uTime) g.uniform1f(uTime, t * 0.001);
      if (uRes) g.uniform2f(uRes, c.width, c.height);
      const uMouse = g.getUniformLocation(prog, "u_mouse");
      if (uMouse) g.uniform2f(uMouse, mouseX, mouseY);
      g.drawArrays(g.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      const ext = g.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
