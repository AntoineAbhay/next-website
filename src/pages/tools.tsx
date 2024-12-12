import type { NextPage } from "next";
import { useId, useState } from "react";

const YEAR_2100_EPOCH_SECONDS = 4_102_444_800;

const parseDate = (input: string) => {
  if (!input) {
    return null;
  }
  const parsedNumber = Number.parseInt(input, 10);
  if (input.indexOf("-") > 0 || Number.isNaN(parsedNumber)) {
    const epochMs = new Date(input).getTime();
    if (Number.isNaN(epochMs)) {
      return <div>Invalid date 🤨</div>;
    }
    return (
      <div>
        <div>Epoch: {epochMs / 1000}</div>
        <div>Epoch (ms): {epochMs}</div>
      </div>
    );
  }

  if (Math.abs(parsedNumber) > Number.MAX_SAFE_INTEGER / 10) {
    return <div>Invalid date 🤨</div>;
  }

  if (parsedNumber > YEAR_2100_EPOCH_SECONDS) {
    return (
      <div>
        <span>{new Date(parsedNumber).toISOString()}</span>{" "}
        <span className="text-xs">(From epoch in ms)</span>
      </div>
    );
  }
  return (
    <div>
      <div>
        <span>{new Date(parsedNumber * 1000).toISOString()}</span>{" "}
        <span className="text-xs">(From epoch in s)</span>
      </div>
      <div>
        <span>{new Date(parsedNumber).toISOString()}</span>{" "}
        <span className="text-xs">(From epoch in ms)</span>
      </div>
    </div>
  );
};

const EpochConverter = () => {
  const dateInputId = useId();
  const [input, setInput] = useState("");
  const result = parseDate(input);

  return (
    <div>
      <form className="rounded-md border border-indigo-900 border-opacity-20 p-4 dark:border-slate-400 dark:bg-slate-800">
        <h3 className="mb-4 text-xl font-bold dark:text-slate-200">
          Epoch converter
        </h3>
        <div className="mb-4">
          <label className="text-sm" htmlFor={dateInputId}>
            Date or timestamp
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none dark:dark:bg-slate-600"
            id={dateInputId}
            value={input}
            onInput={(e) => setInput(e.currentTarget.value)}
            type="text"
            placeholder="Date or timestamp"
          />
        </div>
        <div className="mb-2">{result}</div>
      </form>
    </div>
  );
};

const HEXA_CHARS = "0123456789abcdef";

const isHexaColor = (color: string) =>
  (color.length === 6 || color.length === 8) &&
  [...color].every((char) => HEXA_CHARS.includes(char.toLowerCase()));

const parseRgbColor = (color: string) => {
  if (!color.toLowerCase().startsWith("rgb(") || !color.endsWith(")")) {
    return '';
  }
  const colors = color
    .slice(4, -1)
    .split(",")
    .map((value) => Number.parseInt(value, 10));
  if (
    colors.length !== 3 ||
    colors.some((value) => Number.isNaN(value) || value < 0 || value > 255)
  ) {
    return '';
  }
  return colors.map((value) => value.toString(16).padStart(2, '0')).join('')
};

const checkColor = (input: string) => {
  const color =
    input.length === 7 && input.charAt(0) === "#" ? input.slice(1) : input;
  if (isHexaColor(color)) {
    return color;
  }

  return parseRgbColor(input);
};

const getColor = (input: string) => {
  const color = checkColor(input);
  if (!color) {
    return <div>Invalid color 🤨</div>;
  }

  const red = Number.parseInt(color.slice(0, 2), 16);
  const green = Number.parseInt(color.slice(2, 4), 16);
  const blue = Number.parseInt(color.slice(4, 6), 16);
  return (
    <>
      <div className="p-1">
        #{color} | RGB({red},{green},{blue})
      </div>
      <div style={{ color: `#${color}` }} className="p-1">
        Do you like this color?
      </div>
      <div style={{ backgroundColor: `#${color}` }} className="rounded p-1">
        Or this background color?
      </div>
    </>
  );
};

const ColorConverter = () => {
  const colorInputId = useId();
  const [input, setInput] = useState("");

  return (
    <div>
      <form className="rounded-md border border-indigo-900 border-opacity-20 p-4 dark:border-slate-400 dark:bg-slate-800">
        <h3 className="mb-4 text-xl font-bold dark:text-slate-200">Color converter</h3>
        <div className="mb-4">
          <label className="text-sm" htmlFor={colorInputId}>
            Color
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none dark:dark:bg-slate-600"
            id={colorInputId}
            value={input}
            onInput={(e) => setInput(e.currentTarget.value)}
            type="text"
            placeholder="#ffaa88 | RGB(255,170,136)"
          />
        </div>
        <div className="mb-2">{getColor(input)}</div>
      </form>
    </div>
  );
};

const Tools: NextPage = () => {
  return (
    <div className="m-[auto] flex max-w-3xl flex-col lg:max-w-5xl">
      <section className="m-8">
        <h2 className="mb-8 text-3xl font-bold dark:text-slate-200">Tools</h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <EpochConverter />
          <ColorConverter />
        </div>
      </section>
    </div>
  );
};

export default Tools;
