import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useMarketsStream } from "@orderly.network/hooks";
import { generatePath } from "@orderly.network/i18n";
import { useMediaQuery } from "@orderly.network/hooks";

export default function Markets() {
  const navigate = useNavigate();
  const isLG = useMediaQuery("(min-width: 1024px)");

  // 取得 Orderly 即時市場資訊
  const { data: markets } = useMarketsStream();

  const handleTradeNow = () => {
    // 根據你的需求導向市場頁面
    // navigate(generatePath({ path: "/markets" }));
    window.location.href = "https://dexless.exchange/markets";
  };

  /**
   * 數據處理與防呆優化
   */
  const marketData = React.useMemo(() => {
    // 如果數據還沒載入或不是陣列，回傳空陣列避免 map 報錯
    if (!markets || !Array.isArray(markets)) return [];

    const desiredOrder = ["PERP_BTC_USDC", "PERP_ETH_USDC"];

    return desiredOrder
      .map((symbol) => {
        const market = markets.find((m) => m.symbol === symbol);
        if (!market) return null; // 過濾掉暫時抓不到的市場

        const isBTC = market.symbol.includes("BTC");

        return {
          symbol: isBTC ? "BTC" : "ETH",
          pair: isBTC ? "BTC-PERP" : "ETH-PERP",
          price: market["24h_close"]
            ? `$${market["24h_close"].toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : "$0.00",
          // 確保 change 有數值，避免顯示 NaN%
          change: `${((market.change || 0) * 100).toFixed(2)}%`,
          tag: isBTC ? "BITCOIN" : "ETHEREUM",
        };
      })
      .filter(Boolean); // 移除 null 項目
  }, [markets]);

  return (
    <section
      className="relative bg-cover bg-center text-black flex justify-center text-center py-[120px] min-h-[835px]"
      style={{ backgroundImage: "url('/images/landingpage/markets.png')" }}
    >
      <div className="w-full max-w-7xl px-4">
        {/* 標題區 */}
        <h2 className="text-6xl font-medium"  
        style={{
          fontSize: isLG ? "56px" : "32px",
          fontWeight: "600",
        }}>
          Markets
        </h2>
        <p 
          className="text-2xl py-4 text-[#666]"
          style={{
            fontSize: isLG ? "24px" : "16px",
          }}
        >
          Perpetual Markets Available
        </p>

        {/* CTA */}
        <button
          onClick={handleTradeNow}
          className="px-6 py-2 cursor-pointer rounded-full text-white font-bold transition-transform hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(90deg, #7053f3, #70c3b6 44.8%, #d0f473 78.01%)",
          }}
        >
          View Markets
        </button>

        {/* 市場卡片區 - 使用原生 Tailwind Flex 取代 Orderly UI Flex */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-16">
          {marketData.map((market) => (
            <div key={market.pair} className="flex flex-col items-center">
              {/* 市場標題 */}
              <p className="mb-4 font-bold text-lg tracking-widest uppercase">
                {market.pair}
              </p>

              {/* 卡片容器 */}
              <div
                className="bg-white rounded-xl p-8 text-left relative w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-[#f0f0f0]"
              >
                {/* 幣種與標籤 */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold" style={{fontSize: isLG ? "" : "14px",}}>{market.symbol}</span>
                  <span
                    className="text-[10px] text-white px-3 py-1 rounded-full font-bold"
                    style={{ background: "linear-gradient(90deg, #7b61ff, #b4e391)" }}
                  >
                    {market.tag}
                  </span>
                </div>

                {/* 價格與漲跌 */}
                <div className="flex justify-between items-end">
                  <div>
                    <p 
                      className="text-4xl font-bold mb-4"
                      style={{fontSize: isLG ? "36px" : "28px",}}
                    >
                      {market.price}
                    </p>
                    <span className="px-4 py-1 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium">
                      {market.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Hint */}
        <div 
          onClick={handleTradeNow}
          className="mt-16 flex items-center justify-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <p className="text-xl">More markets coming</p>
          <span className="text-2xl">→</span>
        </div>
      </div>
    </section>
  );
}