// altın fiyatı API'si
export async function GET() {
  try {
    const apiKey = process.env.GOLD_API_KEY;

    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      method: "GET",
      headers: {
        "x-access-token": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Gold API response not okey. api/route.js");
    }

    const data = await response.json();
    
    if (!data.price) {
      return new Response(
        JSON.stringify({ error: "Invalid gold price data" }),
        {
          status: 500,
        }
      );
    }

    const goldPricePerGram = data.price / 31.1035; // Altın fiyatını gram bazına çevirme (1 ons = 31.1035 gram)
    return new Response(
      JSON.stringify({ goldPrice: goldPricePerGram.toFixed(2) }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "API hatası" }), {
      status: 500,
    });
  }
}
