import React from "react";
import { useMediaQuery } from "@orderly.network/hooks";

export default function SecurityAndRisk() {
  const isLG = useMediaQuery("(min-width: 1024px)");
  

  const steps = [
    {
      img: "/images/landingpage/settlement1.png",
      desc: "On-chain settlement",
      bgGradient:
        "linear-gradient(180deg, white 0%, #E4E4E4 50%, #E0FF98 100%)",
    },
    {
      img: "/images/landingpage/publicly1.png",
      desc: "Publicly verifiable data",
      bgGradient:
        "linear-gradient(180deg, white 0%, #E4E4E4 50%, #8883E9 100%)",
    },
    {
      img: "/images/landingpage/mechanics1.png",
      desc: "Clear liquidation mechanics",
      bgGradient:
        "linear-gradient(180deg, white 0%, #E4E4E4 50%, #E0FF98 100%)",
    },
  ];
  return (
    <section
      className="space-y-5 bg-white text-black flex flex-col items-center text-center"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        minHeight: "835px",
      }}
    >
      <div className="pb-10">
        <p
          style={{
            fontSize: isLG ? "48px" : "32px",
            fontWeight: "600",
            lineHeight: "1.1",
            paddingBottom: "24px",
            maxWidth: "100%",
          }}
        >
          Security & Risk
        </p>
        <p
          style={{
            fontSize: isLG ? "30px" : "22px",
            fontWeight: "500",
            maxWidth: "830px",
          }}
        >
          Security Philosophy
        </p>
        <p
          style={{
            fontSize: isLG ? "20px" : "14px",
            fontWeight: "400",
            color: "#666",
          }}
        >
          DEXless is designed around transparency, verifiability, and risk
          awareness.
        </p>
      </div>
      {/* 卡片排版區域 */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl px-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            style={{ width: "300px" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: item.bgGradient,
                borderRadius: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <img
                src={item.img}
                alt={item.desc}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transform: "translateY(5%)",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1a1a1a",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}