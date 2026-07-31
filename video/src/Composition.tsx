import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

const FPS = 30;
const OPENING_FRAMES = 90;
const ICONS_FRAMES = 210;
const TEAR_FRAMES = 210;
const CLOSING_FRAMES = 90;
const TOTAL_FRAMES =
  OPENING_FRAMES + ICONS_FRAMES + TEAR_FRAMES + CLOSING_FRAMES;

const colors = {
  background: "#f9fafc",
  ink: "#1b2740",
  muted: "#5e6677",
  brand: "#0e6340",
  brandLight: "#d3eadf",
  brandSoft: "#eaf5ef",
  white: "#ffffff",
};

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const BrandMark: React.FC<{ inverse?: boolean }> = ({ inverse = false }) => {
  const light = inverse ? "rgba(255, 255, 255, 0.7)" : "#2f9e68";
  const dark = inverse ? "#ffffff" : colors.brand;

  return (
    <svg
      width={52}
      height={52}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 16 8 10.4v11.2z" fill={light} />
      <path d="M10 5.5h5.5v21H10z" fill={light} />
      <path d="M10 5.5h5.5v10.5H10z" fill={dark} />
      <path d="M17.5 4.5 30 4.5 20 11.6z" fill={dark} />
      <path d="M17.5 27.5 30 27.5 20 20.4z" fill={dark} />
      <path d="M17.5 12.6 24 16l-6.5 3.4z" fill={light} />
    </svg>
  );
};

const BrandLockup: React.FC<{ inverse?: boolean; compact?: boolean }> = ({
  inverse = false,
  compact = false,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: compact ? 12 : 16,
      color: inverse ? colors.white : colors.brand,
    }}
  >
    <BrandMark inverse={inverse} />
    <span
      style={{
        fontSize: compact ? 38 : 46,
        fontWeight: 800,
        letterSpacing: -1.8,
      }}
    >
      WebIngressos
    </span>
  </div>
);

const ValidationTag: React.FC<{ inverse?: boolean }> = ({
  inverse = false,
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 16px",
      borderRadius: 999,
      backgroundColor: inverse ? "rgba(255, 255, 255, 0.12)" : colors.brandSoft,
      color: inverse ? colors.white : colors.brand,
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 2.4,
    }}
  >
    INFRAESTRUTURA EM VALIDAÇÃO
  </div>
);

const Opening: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 34,
          opacity: interpolate(frame, [0, 18, 80], [0, 1, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          }),
          translate: `0px ${interpolate(frame, [0, 28], [28, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          })}px`,
        }}
      >
        <BrandLockup />
        <ValidationTag />
        <div
          style={{
            maxWidth: 1040,
            color: colors.ink,
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2.6,
            textAlign: "center",
          }}
        >
          Venda ingressos sem perder o controle do evento.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const IconsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const contentTransition = interpolate(frame, [0, 28], [-32, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  const contentOpacity = interpolate(frame, [0, 22, 190, 210], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background }}>
      <div
        style={{
          position: "absolute",
          top: -240,
          right: -180,
          width: 760,
          height: 760,
          borderRadius: "50%",
          backgroundColor: colors.brandSoft,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -360,
          left: -220,
          width: 720,
          height: 720,
          borderRadius: "50%",
          border: `2px solid ${colors.brandLight}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 154,
          left: 150,
          width: 720,
          opacity: contentOpacity,
          translate: `${contentTransition}px 0px`,
        }}
      >
        <ValidationTag />
        <div
          style={{
            marginTop: 34,
            color: colors.ink,
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2.4,
          }}
        >
          Do ingresso ao fechamento.
        </div>
        <div
          style={{
            width: 560,
            marginTop: 28,
            color: colors.muted,
            fontSize: 30,
            lineHeight: 1.4,
          }}
        >
          Uma proposta pensada para a operação real de eventos universitários.
        </div>
      </div>
      <Video
        name="Ticket icons"
        src={staticFile("assets/animated-flat-design-event-ticket-icons.mov")}
        muted
        objectFit="contain"
        style={{
          position: "absolute",
          top: 80,
          right: 20,
          width: 1120,
          height: 630,
          opacity: contentOpacity,
          scale: interpolate(frame, [0, 36], [0.88, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          }),
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 150,
          bottom: 106,
          color: colors.brand,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 3,
        }}
      >
        VENDAS · OPERAÇÃO · CONTAS
      </div>
    </AbsoluteFill>
  );
};

const TearScene: React.FC = () => {
  const frame = useCurrentFrame();
  const contentTransition = interpolate(frame, [0, 28], [-32, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  const contentOpacity = interpolate(frame, [0, 22, 190, 210], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.brand }}>
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 120,
          width: 460,
          height: 460,
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 172,
          right: 192,
          width: 316,
          height: 316,
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 174,
          left: 150,
          width: 650,
          color: colors.white,
          opacity: contentOpacity,
          translate: `${contentTransition}px 0px`,
        }}
      >
        <ValidationTag inverse />
        <div
          style={{
            marginTop: 34,
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2.4,
          }}
        >
          Uma operação que acompanha o evento.
        </div>
        <div
          style={{
            width: 600,
            marginTop: 28,
            color: "rgba(255,255,255,0.72)",
            fontSize: 30,
            lineHeight: 1.4,
          }}
        >
          Vendas, promoters, check-in e prestação de contas conectados em uma
          única proposta.
        </div>
      </div>
      <Video
        name="Ticket tear reveal"
        src={staticFile("assets/flat-design-ticket-tear-reveal-animation.mov")}
        muted
        objectFit="contain"
        style={{
          position: "absolute",
          top: 78,
          right: 16,
          width: 1120,
          height: 630,
          opacity: contentOpacity,
          scale: interpolate(frame, [0, 36], [0.88, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          }),
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 150,
          bottom: 106,
          color: "rgba(255,255,255,0.72)",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 3,
        }}
      >
        PARA QUEM FAZ O EVENTO ACONTECER
      </div>
    </AbsoluteFill>
  );
};

const Closing: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          opacity: interpolate(frame, [0, 16, 80], [0, 1, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          }),
          translate: `0px ${interpolate(frame, [0, 24], [26, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: ease,
          })}px`,
        }}
      >
        <BrandLockup compact />
        <div
          style={{
            marginTop: 10,
            color: colors.ink,
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          Quero participar do piloto
        </div>
        <div
          style={{
            padding: "18px 30px",
            borderRadius: 16,
            backgroundColor: colors.brand,
            color: colors.white,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          webingressos.com.br/#piloto
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Presentation: React.FC = () => (
  <AbsoluteFill>
    <Sequence name="Opening" durationInFrames={OPENING_FRAMES}>
      <Opening />
    </Sequence>
    <Sequence
      name="Ticket icons"
      from={OPENING_FRAMES}
      durationInFrames={ICONS_FRAMES}
    >
      <IconsScene />
    </Sequence>
    <Sequence
      name="Ticket tear reveal"
      from={OPENING_FRAMES + ICONS_FRAMES}
      durationInFrames={TEAR_FRAMES}
    >
      <TearScene />
    </Sequence>
    <Sequence
      name="Closing CTA"
      from={OPENING_FRAMES + ICONS_FRAMES + TEAR_FRAMES}
      durationInFrames={CLOSING_FRAMES}
    >
      <Closing />
    </Sequence>
  </AbsoluteFill>
);

export const WebIngressosComposition: React.FC = () => (
  <Composition
    id="WebIngressosPresentation"
    component={Presentation}
    durationInFrames={TOTAL_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
