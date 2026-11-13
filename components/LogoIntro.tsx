"use client";

// Apertura della home: i pistilli si raccolgono e diventano i tre fili del logo, poi la pagina appare.
// Una volta per sessione; si salta con un clic o un tasto; nessuna animazione con "riduci movimento".

import { useEffect, useRef, useState } from "react";

const PTS: [number, number, number][] = [[0, 0.2732, 0.3915], [0, 0.2146, 0.3333], [0, 0.2634, 0.4225], [0, 0.3902, 0.5969], [0, 0.2537, 0.2984], [0, 0.161, 0.3101], [0, 0.3317, 0.5], [0, 0.2585, 0.314], [0, 0.3122, 0.407], [0, 0.3415, 0.5349], [1, 0.4683, 0.1085], [1, 0.5024, 0.6512], [1, 0.5122, 0.2248], [1, 0.5268, 0.093], [1, 0.4439, 0.1279], [1, 0.4732, 0.4961], [1, 0.478, 0.469], [1, 0.4732, 0.1163], [1, 0.5171, 0.2481], [1, 0.5366, 0.1279], [1, 0.5024, 0.7984], [1, 0.5073, 0.4767], [2, 0.7317, 0.3062], [2, 0.678, 0.5155], [2, 0.761, 0.3256], [2, 0.7463, 0.3566], [2, 0.639, 0.5698], [2, 0.6439, 0.5659], [2, 0.6341, 0.531], [2, 0.7561, 0.3062], [2, 0.6293, 0.5271], [2, 0.6634, 0.531]];
const BASE = 0.97, TOP = [0.275, 0.062, 0.275], START = [1500, 1250, 1600], GROW = 1100;
const WORD_AT = 2900, WORD_DUR = 1300, END = 4600, HOLD = 700, FADE = 800;
const KEY = "zafrane-intro";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const inout = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const rnd = (i: number, k: number) => { const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); };
const arrive = ([k, , y]: [number, number, number]) => START[k] + clamp((BASE - y) / (BASE - TOP[k])) * GROW;

export default function LogoIntro() {
  const [show, setShow] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const word = useRef<HTMLImageElement>(null);
  const strands = useRef<(HTMLImageElement | null)[]>([]);
  const parts = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const force = new URLSearchParams(window.location.search).has("intro");
    try { if (!force && sessionStorage.getItem(KEY)) return; sessionStorage.setItem(KEY, "1"); } catch {}
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    let raf = 0, done = false;
    const t0 = performance.now();
    document.documentElement.style.overflow = "hidden";
    const finish = () => {
      if (done) return; done = true;
      cancelAnimationFrame(raf);
      const el = root.current;
      if (el) { el.style.transition = `opacity ${FADE}ms ease`; el.style.opacity = "0"; }
      document.documentElement.style.overflow = "";
      setTimeout(() => setShow(false), FADE);
    };
    const skip = () => finish();
    window.addEventListener("keydown", skip);

    const frame = (now: number) => {
      const t = now - t0;
      const st = root.current, bx = box.current;
      if (!st || !bx) return;
      const sr = st.getBoundingClientRect(), br = bx.getBoundingClientRect();
      const R = Math.min(sr.width, sr.height);
      const cx = br.left - sr.left + br.width / 2, cy = br.top - sr.top + br.height * 0.6;
      PTS.forEach((pt, i) => {
        const el = parts.current[i]; if (!el) return;
        const ta = arrive(pt), [, px, py] = pt;
        const ang = rnd(i, 1) * Math.PI * 2, rad = R * (0.28 + rnd(i, 2) * 0.22);
        const sx = cx + Math.cos(ang) * rad + Math.sin(t / 900 + i) * 8;
        const sy = cy + Math.sin(ang) * rad * 0.85 + Math.cos(t / 1100 + i) * 8;
        const tx = br.left - sr.left + px * br.width, ty = br.top - sr.top + py * br.height;
        const depart = ta - 1150 - rnd(i, 3) * 250;
        const u = inout(clamp((t - depart) / (ta - depart)));
        const x = sx + (tx - sx) * u, y = sy + (ty - sy) * u - Math.sin(u * Math.PI) * 30;
        const o = clamp((t - rnd(i, 4) * 500) / 500) * (1 - clamp((t - ta + 120) / 260));
        const sc = (0.3 + rnd(i, 5) * 0.22) * (1 - 0.35 * u);
        const rot = (1 - u) * (rnd(i, 6) * 360 + t / 14);
        el.style.width = br.width + "px";
        el.style.opacity = o.toFixed(3);
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
      });
      strands.current.forEach((s, k) => {
        if (!s) return;
        const g = ease(clamp((t - START[k]) / GROW));
        s.style.clipPath = `inset(${(Math.max(0, BASE - (BASE - TOP[k] + 0.03) * g) * 100).toFixed(2)}% 0 0 0)`;
      });
      const w = inout(clamp((t - WORD_AT) / WORD_DUR));
      if (word.current) {
        const pos = `${(100 - w * 100).toFixed(2)}% 0`;
        word.current.style.maskPosition = pos;
        word.current.style.webkitMaskPosition = pos;
      }
      if (t < END + HOLD) raf = requestAnimationFrame(frame);
      else finish();
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", skip); document.documentElement.style.overflow = ""; };
  }, [show]);

  if (!show) return null;
  return (
    <div
      ref={root}
      onClick={() => window.dispatchEvent(new KeyboardEvent("keydown"))}
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden bg-[var(--paper)] px-4"
      role="img"
      aria-label="ZAFRANE"
    >
      <div className="w-[min(460px,84vw)]">
        <div ref={box} className="relative mx-auto aspect-[205/258] w-[23.3%]">
          {[0, 1, 2].map((k) => (
            <img
              key={k}
              ref={(el) => { strands.current[k] = el; }}
              src={`/intro/strand${k}.png`}
              alt=""
              className="absolute inset-0 h-full w-full"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            />
          ))}
        </div>
        <img
          ref={word}
          src="/intro/wordmark.png"
          alt=""
          width={880}
          height={124}
          className="mt-[4.5%] block h-auto w-full"
          style={{
            maskImage: "linear-gradient(90deg, #000 40%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(90deg, #000 40%, transparent 60%)",
            maskSize: "300% 100%",
            WebkitMaskSize: "300% 100%",
            maskPosition: "100% 0",
            WebkitMaskPosition: "100% 0",
          }}
        />
      </div>
      {PTS.map((pt, i) => (
        <img
          key={i}
          ref={(el) => { parts.current[i] = el; }}
          src={`/intro/strand${pt[0]}.png`}
          alt=""
          className="pointer-events-none absolute left-0 top-0 opacity-0"
        />
      ))}
      <span className="absolute bottom-8 text-[13px] tracking-[0.06em] text-[var(--muted)]">Tocca per entrare</span>
    </div>
  );
}
