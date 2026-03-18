"use client";

import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";

type UrlParams = {
  format?: string;
  style?: string;
  bodyStyle?: string;
  [key: string]: string | undefined;
};

function parseUrlParams(search: string): UrlParams {
  const params: UrlParams = {};
  new URLSearchParams(search).forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

export default function Clock() {
  const [timeText, setTimeText] = useState<string>("");

  const urlParams = useMemo<UrlParams>(() => {
    if (typeof window === "undefined") return {};
    return parseUrlParams(window.location.search);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const output = document.getElementById("output");

    if (urlParams.style && output instanceof HTMLElement) {
      output.style.cssText = urlParams.style;
    }

    if (urlParams.bodyStyle) {
      document.body.style.cssText = urlParams.bodyStyle;
    }

    const format = urlParams.format || "HH:mm:ss [PST]";

    const update = () => {
      const formatted = moment().format(format);
      setTimeText(formatted);
      if (output instanceof HTMLElement) {
        output.innerText = formatted;
      }
    };

    update();

    const timer = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [urlParams]);

  return (
    <div id="output" className="text-white">
      {timeText}
    </div>
  );
}
