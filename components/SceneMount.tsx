"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { Theme } from "./AppShell";
import { useReducedMotionPref } from "@/lib/motion";

const DataTunnel = dynamic(() => import("./scene/DataTunnel"), {
  ssr: false,
  loading: () => null,
});

export default function SceneMount({
  theme,
  booted,
}: {
  theme: Theme;
  booted: boolean;
}) {
  const [ready, setReady] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const [visible, setVisible] = useState(true);
  const [lowPower, setLowPower] = useState(false);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    setReady(true);

    // Skip the WebGL tunnel on phones and low-core devices; the CSS fallback grid shows instead.
    const small = window.matchMedia("(max-width: 767px)").matches;
    const cores = navigator.hardwareConcurrency || 8;
    setLowPower(small || cores <= 4);

    try {
      const canvas = document.createElement("canvas");
      const context =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      setWebgl(Boolean(context));
    } catch {
      setWebgl(false);
    }

    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const showCanvas = ready && webgl && !reduced && !lowPower;

  return (
    <div className="scene" aria-hidden="true">
      <div className={`scene-backdrop ${theme}`} />
      <div className={`scene-fallback ${showCanvas ? "opacity-0" : "opacity-100"}`} />
      {showCanvas && (
        <div className="absolute inset-0">
          <DataTunnel theme={theme} booted={booted} visible={visible} />
        </div>
      )}
      <div className="scene-vignette" />
    </div>
  );
}
