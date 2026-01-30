"use client";

import Script from "next/script";
import Image from "next/image";

export default function InchCalculatorCountdown() {
  return (
    <>
      <div
        id="inch-calculator-icw"
        data-ct="countdown_timer"
        data-cw="100%"
        data-ch="550"
        data-cv="MTE3Njk3NjYwNjE="
        className="glass-card rounded-2xl overflow-hidden w-full max-w-4xl mx-auto"
      >
        <div id="inch-calculator-icwh">Countdown Timer</div>
        <div id="inch-calculator-icwf">
          <a
            id="inch-calculator-icwi"
            href="https://www.inchcalculator.com/countdown-timer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              id="inch-calculator-icwl"
              src="https://cdn.inchcalculator.com/e/inch-calculator-logo-tiny.png"
              alt="Inch Calculator Logo"
              width={40}
              height={49}
              unoptimized
            />
            <span id="inch-calculator-icwb">Inch Calculator</span>
          </a>
        </div>
      </div>
      <Script
        src="https://cdn.inchcalculator.com/e/widgets.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
