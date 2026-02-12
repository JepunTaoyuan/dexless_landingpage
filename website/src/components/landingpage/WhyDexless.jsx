import React from "react";
import { useMediaQuery } from "@orderly.network/hooks";

const FEATURES = [
  {
    title: "Data Ownership by Traders",
    desc: "Users retain access to their full trading history — not limited by platform policies.",
    color: "#d4f7a3",
    bgColor:
      "linear-gradient(212deg, rgba(255, 255, 255, 0.08) 0%, rgba(236.61, 236.61, 236.61, 0.22) 17%, rgba(186, 247, 120, 0.40) 36%, rgba(155, 241, 189, 0.40) 60%, rgba(230.48, 230.48, 230.48, 0.28) 86%, rgba(231.71, 231.71, 231.71, 0.16) 100%)",
    url: "/images/landingpage/trader.png",
  },
  {
    title: "Designed for Financial Intelligence",
    desc: "DEXless is built with the belief that future trading is driven by data, intelligence, and iteration.",
    color: "#c2f3e8",
    bgColor:
      "linear-gradient(212deg, rgba(255, 255, 255, 0.08) 0%, rgba(236.61, 236.61, 236.61, 0.22) 17%, rgba(162, 255, 229, 0.40) 36%, rgba(162, 210.05, 255, 0.40) 60%, rgba(230.48, 230.48, 230.48, 0.28) 86%, rgba(231.71, 231.71, 231.71, 0.16) 100%)",
    url: "/images/landingpage/bot.png",
  },
  {
    title: "Seamless Trading Experience",
    desc: "DEXless removes unnecessary friction so traders can focus purely on decision-making.",
    color: "#c7e3ff",
    bgColor:
      "linear-gradient(212deg, rgba(255, 255, 255, 0.08) 0%, rgba(236.61, 236.61, 236.61, 0.22) 17%, rgba(145.89, 202.77, 255, 0.40) 36%, rgba(158.15, 192.05, 255, 0.40) 60%, rgba(230.48, 230.48, 230.48, 0.28) 86%, rgba(231.71, 231.71, 231.71, 0.16) 100%)",
    url: "/images/landingpage/seamless.png",
  },
  {
    title: "Permanent Trading History",
    desc: "Every trade is recorded on-chain, enabling long-term analysis, backtesting, and learning.",
    color: "#e0d7ff",
    bgColor:
      "linear-gradient(212deg, rgba(255, 255, 255, 0.08) 0%, rgba(236.61, 236.61, 236.61, 0.22) 17%, rgba(156.17, 147.12, 255, 0.40) 36%, rgba(144.87, 134.86, 255, 0.40) 60%, rgba(230.48, 230.48, 230.48, 0.28) 86%, rgba(231.71, 231.71, 231.71, 0.16) 100%)",
    url: "/images/landingpage/history.png",
  },
];

export default function WhyDexless() {
  const isLG = useMediaQuery("(min-width: 768px)");

  return (
    <section
      className="relative bg-cover bg-center text-black flex justify-center"
      style={{
        backgroundImage: "url('/images/landingpage/dexlessImage.png')",
        paddingTop: "50px",
        paddingBottom: "50px",
        minHeight: "100vh",
      }}
    >
      <div>
        <div
          className="space-y-4 flex flex-col items-center text-center"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <h2
            style={{
              fontSize: isLG ? "56px" : "32px",
              fontWeight: "600",
            }}
          >
            Why Dexless?
          </h2>

          <p
            style={{
              fontSize: isLG ? "22px" : "14px",
              maxWidth: "650px",
              fontWeight: "400",
              color: "#666",
              paddingRight:"20px",
              paddingLeft:"20px"
            }}
          >
            Trading platforms shouldn’t just execute trades — they should help
            traders understand, improve, and evolve.
          </p>
        </div>

        <div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          style={{
            justifyItems: "center",
          }}
        >
          {FEATURES.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: "32px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "480px",
                width: "350px",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  flex: 1.2,
                  background: item.bgColor,
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  style={{
                    width: "188px",
                    height: "250px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "24px",
                  backgroundColor: item.color,
                  height: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h3
                  style={{
                    fontSize: isLG ? "20px" : "16px",
                    fontWeight: "bold",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: isLG ? "14px" : "12px",
                    color: "rgba(0,0,0,0.6)",
                    lineHeight: "1.5",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
