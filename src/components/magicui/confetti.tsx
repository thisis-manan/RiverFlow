import confetti from "canvas-confetti";

interface ConfettiOptions extends confetti.Options {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    flat?: boolean;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: confetti.Shape[];
    zIndex?: number;
    disableForReducedMotion?: boolean;
    useWorker?: boolean;
    resize?: boolean;
    canvas?: HTMLCanvasElement | null;
    scalar?: number;
}

const Confetti = (options: ConfettiOptions) => {
    if (options.disableForReducedMotion && window.matchMedia("(prefers-reduced-motion)").matches) {
        return;
    }

    const confettiInstance = options.canvas
        ? confetti.create(options.canvas, {
              resize: options.resize ?? true,
              useWorker: options.useWorker ?? true,
          })
        : confetti;

    confettiInstance({
        ...options,
    });
};

Confetti.shapeFromPath = (options: Parameters<typeof confetti.shapeFromPath>[0]) => {
    return confetti.shapeFromPath(options);
};

Confetti.shapeFromText = (options: Parameters<typeof confetti.shapeFromText>[0]) => {
    return confetti.shapeFromText(options);
};

export { Confetti };
