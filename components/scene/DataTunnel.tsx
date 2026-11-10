"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Theme = "dark" | "light";

const PALETTE = {
  dark: {
    line: "#37f5bb",
    accent: "#9dffc9",
    mote: "#c6ffe6",
    portal: "#54ffd0",
  },
  light: {
    line: "#0b6b57",
    accent: "#0a8f6d",
    mote: "#1f6f5f",
    portal: "#0a7a5f",
  },
} as const;

const GATE_POSITIONS = [-16, -40, -64, -88, -112, -136, -160];
const TRAVEL = 158;

function getScrollProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

function CameraRig({ booted }: { booted: boolean }) {
  const { camera, size } = useThree();
  const pointer = useRef({ x: 0, y: 0 });
  const intro = useRef(0);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    const mobile = size.width < 768;
    const progress = getScrollProgress();
    intro.current = THREE.MathUtils.damp(intro.current, booted ? 1 : 0, 2.2, delta);

    const targetZ = 6 - progress * TRAVEL + (1 - intro.current) * 1.5;
    const damp = 1 - Math.exp(-delta * 4);

    camera.position.z += (targetZ - camera.position.z) * damp;

    const px = mobile ? 0 : pointer.current.x;
    const py = mobile ? 0 : pointer.current.y;
    const dampXY = 1 - Math.exp(-delta * 2.2);

    camera.position.x += (px * 0.8 - camera.position.x) * dampXY;
    camera.position.y += (py * 0.45 - camera.position.y) * dampXY;

    camera.lookAt(px * 0.9, py * 0.5, camera.position.z - 14);
    camera.rotation.z += Math.sin(state.clock.elapsedTime * 0.12) * 0.01;
  });

  return null;
}

const tunnelVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const tunnelFragment = `
  precision highp float;

  uniform float uTime;
  uniform float uScroll;
  uniform vec3 uColor;
  uniform vec3 uAccent;
  uniform float uDensityU;
  uniform float uDensityV;
  uniform float uSpeed;
  uniform float uOpacity;
  uniform float uLight;
  varying vec2 vUv;

  float lineMask(float value, float width) {
    float d = abs(fract(value + 0.5) - 0.5);
    return 1.0 - smoothstep(width, width * 3.0, d);
  }

  void main() {
    float scroll = uScroll * 26.0;
    float time = uTime * uSpeed;

    float v = vUv.y * uDensityV + time * 0.22 + scroll;
    float u = vUv.x * uDensityU;

    float rings = lineMask(v, 0.018);
    float spokes = lineMask(u + 0.25, 0.014) * 0.55;

    float dash = step(0.32, fract(vUv.y * 34.0 - time * 0.18 + scroll * 0.2));
    spokes *= 0.35 + 0.65 * dash;

    float streak = pow(0.5 + 0.5 * sin(vUv.x * 6.28318 * 5.0 + sin(v * 0.07) * 2.4), 16.0);
    float beam = exp(-abs(vUv.x - 0.5) * 14.0) * 0.24;

    float grid = rings * 0.62 + spokes * 0.7 + streak * 0.2 + beam;

    float edge = smoothstep(0.0, 0.055, vUv.y) * smoothstep(0.0, 0.16, 1.0 - vUv.y);
    float pulse = 0.68 + 0.32 * sin(v * 0.35 + vUv.x * 6.28318 * 2.0 + time);

    vec3 color = mix(uColor, uAccent, 0.5 + 0.5 * sin(v * 0.18 + vUv.x * 6.28318 * 3.0));
    float alpha = grid * edge * uOpacity * pulse;

    if (uLight > 0.5) {
      alpha *= 0.55;
    }

    gl_FragColor = vec4(color, alpha);
  }
`;

function TunnelShell({
  theme,
  radius,
  densityU,
  densityV,
  speed,
  opacity,
}: {
  theme: Theme;
  radius: number;
  densityU: number;
  densityV: number;
  speed: number;
  opacity: number;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const target = useRef({
    line: new THREE.Color(PALETTE[theme].line),
    accent: new THREE.Color(PALETTE[theme].accent),
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uColor: { value: new THREE.Color(PALETTE[theme].line) },
      uAccent: { value: new THREE.Color(PALETTE[theme].accent) },
      uDensityU: { value: densityU },
      uDensityV: { value: densityV },
      uSpeed: { value: speed },
      uOpacity: { value: opacity },
      uLight: { value: theme === "light" ? 1 : 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    target.current.line.set(PALETTE[theme].line);
    target.current.accent.set(PALETTE[theme].accent);
    if (!material.current) return;
    material.current.blending =
      theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending;
    material.current.needsUpdate = true;
    material.current.uniforms.uLight.value = theme === "light" ? 1 : 0;
  }, [theme]);

  useFrame((state, delta) => {
    const mat = material.current;
    if (!mat) return;
    const blend = Math.min(1, delta * 3.5);

    mat.uniforms.uTime.value = state.clock.elapsedTime;
    mat.uniforms.uScroll.value = getScrollProgress();
    mat.uniforms.uColor.value.lerp(target.current.line, blend);
    mat.uniforms.uAccent.value.lerp(target.current.accent, blend);
    mat.uniforms.uOpacity.value = THREE.MathUtils.damp(
      mat.uniforms.uOpacity.value,
      theme === "light" ? opacity * 0.85 : opacity,
      3,
      delta
    );
  });

  return (
    <mesh position={[0, 0, -110]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[radius, radius, 280, 80, 96, true]} />
      <shaderMaterial
        ref={material}
        vertexShader={tunnelVertex}
        fragmentShader={tunnelFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.BackSide}
        blending={theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending}
      />
    </mesh>
  );
}

const portalFragment = `
  precision highp float;

  uniform float uTime;
  uniform vec3 uColor;
  uniform vec3 uAccent;
  uniform float uOpacity;
  uniform float uLight;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float d = length(p);

    float core = exp(-d * 6.0);
    float ring = exp(-pow((d - 0.45) * 10.0, 2.0));
    float rays = pow(0.5 + 0.5 * sin(atan(p.y, p.x) * 28.0 + uTime * 0.35), 18.0);
    rays *= smoothstep(0.7, 0.2, d);

    float alpha = (core * 0.7 + ring * 0.85 + rays * 0.45) * uOpacity;
    alpha *= smoothstep(1.0, 0.2, d);

    vec3 color = mix(uColor, uAccent, 0.45 + 0.55 * ring);

    if (uLight > 0.5) {
      alpha *= 0.5;
    }

    gl_FragColor = vec4(color, alpha);
  }
`;

const portalVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function Portal({ theme }: { theme: Theme }) {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const targetLine = useRef(new THREE.Color(PALETTE[theme].line));
  const targetAccent = useRef(new THREE.Color(PALETTE[theme].accent));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(PALETTE[theme].line) },
      uAccent: { value: new THREE.Color(PALETTE[theme].accent) },
      uOpacity: { value: theme === "light" ? 0.5 : 1 },
      uLight: { value: theme === "light" ? 1 : 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    targetLine.current.set(PALETTE[theme].line);
    targetAccent.current.set(PALETTE[theme].accent);
    if (!material.current) return;
    material.current.blending =
      theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending;
    material.current.needsUpdate = true;
    material.current.uniforms.uLight.value = theme === "light" ? 1 : 0;
    material.current.uniforms.uOpacity.value = theme === "light" ? 0.5 : 1;
  }, [theme]);

  useFrame((state, delta) => {
    const mat = material.current;
    if (mat) {
      const blend = Math.min(1, delta * 3.5);
      mat.uniforms.uTime.value = state.clock.elapsedTime;
      mat.uniforms.uColor.value.lerp(targetLine.current, blend);
      mat.uniforms.uAccent.value.lerp(targetAccent.current, blend);
    }
    if (mesh.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.55) * 0.018;
      mesh.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -212]}>
      <planeGeometry args={[34, 34]} />
      <shaderMaterial
        ref={material}
        vertexShader={portalVertex}
        fragmentShader={portalFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function Gate({
  z,
  index,
  theme,
}: {
  z: number;
  index: number;
  theme: Theme;
}) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.MeshBasicMaterial>(null);
  const outer = useRef<THREE.MeshBasicMaterial>(null);

  const target = useRef(
    new THREE.Color(
      index % 2 === 0 ? PALETTE[theme].line : PALETTE[theme].accent
    )
  );

  useEffect(() => {
    target.current.set(
      index % 2 === 0 ? PALETTE[theme].line : PALETTE[theme].accent
    );
    [inner.current, outer.current].forEach((mat) => {
      if (!mat) return;
      mat.blending =
        theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending;
      mat.needsUpdate = true;
    });
  }, [theme, index]);

  useFrame((state, delta) => {
    const distance = Math.abs(state.camera.position.z - z);
    const near = THREE.MathUtils.clamp(1 - distance / 32, 0, 1);
    const blend = Math.min(1, delta * 3);

    if (inner.current) {
      inner.current.color.lerp(target.current, blend);
      inner.current.opacity = (theme === "light" ? 0.1 : 0.06) + near * (theme === "light" ? 0.55 : 0.95);
    }
    if (outer.current) {
      outer.current.color.lerp(target.current, blend);
      outer.current.opacity = (theme === "light" ? 0.04 : 0.03) + near * (theme === "light" ? 0.22 : 0.3);
    }
    if (group.current) {
      group.current.rotation.z =
        index * 0.35 + state.clock.elapsedTime * (index % 2 === 0 ? 0.025 : -0.02);
      const scale =
        1 +
        near * 0.035 +
        Math.sin(state.clock.elapsedTime * 0.7 + index) * 0.002;
      group.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={group} position={[0, 0, z]}>
      <mesh>
        <torusGeometry args={[7.4, 0.012, 6, 180]} />
        <meshBasicMaterial
          ref={inner}
          color={PALETTE[theme].line}
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending}
        />
      </mesh>
      <mesh scale={1.12}>
        <torusGeometry args={[7.4, 0.006, 6, 180]} />
        <meshBasicMaterial
          ref={outer}
          color={PALETTE[theme].line}
          transparent
          opacity={0.05}
          depthWrite={false}
          blending={theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

const moteVertex = `
  attribute float aSize;
  attribute float aPhase;
  uniform float uTime;
  varying float vAlpha;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float twinkle = 0.55 + 0.45 * sin(uTime * 1.3 + aPhase);
    gl_PointSize = aSize * (190.0 / max(1.0, -mv.z)) * (0.7 + twinkle * 0.5);
    gl_PointSize = clamp(gl_PointSize, 0.5, 9.0);
    gl_Position = projectionMatrix * mv;
    vAlpha = twinkle;
  }
`;

const moteFragment = `
  precision highp float;

  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float a = smoothstep(0.5, 0.08, d);
    gl_FragColor = vec4(uColor, a * vAlpha * uOpacity);
  }
`;

function Motes({ theme }: { theme: Theme }) {
  const { size } = useThree();
  const mobile = size.width < 768;
  const count = mobile ? 380 : 1100;
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const target = useRef(new THREE.Color(PALETTE[theme].mote));

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.6 + Math.random() * 7.6;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = 10 - Math.random() * 232;
      sizes[i] = 0.5 + Math.random() * 2.1;
      phases[i] = Math.random() * Math.PI * 2;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    return geo;
  }, [count]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(PALETTE[theme].mote) },
      uOpacity: { value: theme === "light" ? 0.5 : 0.9 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    target.current.set(PALETTE[theme].mote);
    if (!material.current) return;
    material.current.blending =
      theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending;
    material.current.needsUpdate = true;
    material.current.uniforms.uOpacity.value = theme === "light" ? 0.5 : 0.9;
  }, [theme]);

  useFrame((state, delta) => {
    const mat = material.current;
    if (mat) {
      mat.uniforms.uTime.value = state.clock.elapsedTime;
      mat.uniforms.uColor.value.lerp(target.current, Math.min(1, delta * 3));
    }
    if (points.current) {
      points.current.rotation.z += delta * 0.006;
    }
  });

  return (
    <points ref={points} geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        vertexShader={moteVertex}
        fragmentShader={moteFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function DataTunnel({
  theme,
  booted,
  visible,
}: {
  theme: Theme;
  booted: boolean;
  visible: boolean;
}) {
  return (
    <Canvas
      flat
      dpr={[1, 1.5]}
      frameloop={visible ? "always" : "never"}
      camera={{ position: [0, 0, 6], fov: 68, near: 0.1, far: 320 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <CameraRig booted={booted} />
      <TunnelShell
        theme={theme}
        radius={9}
        densityU={42}
        densityV={104}
        speed={1}
        opacity={0.5}
      />
      <TunnelShell
        theme={theme}
        radius={6.3}
        densityU={26}
        densityV={68}
        speed={0.7}
        opacity={0.26}
      />
      <Portal theme={theme} />
      {GATE_POSITIONS.map((z, index) => (
        <Gate key={z} z={z} index={index} theme={theme} />
      ))}
      <Motes theme={theme} />
    </Canvas>
  );
}
