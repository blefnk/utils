import Link from "next/link";

import type { GenerateMetadata } from "~/utils/types/metadata";
import { getScopedI18n } from "~/utils/server/i18n";
import { typography } from "~/utils/server/text";

const tools = [
  {
    category: "Calculator",
    tools: [
      {
        title: "Alarm",
        description:
          "Set alarms to timely reminders for your tasks and activities.",
        href: "/utils/clock/alarm",
        releasedAt: null,
      },
    ],
  },
  {
    category: "Clock",
    tools: [
      {
        title: "Alarm",
        description:
          "Schedule alarms to prompt you at specific times for your important events.",
        href: "/utils/clock/alarm",
        releasedAt: null,
      },
      {
        title: "Stopwatch",
        description:
          "Utilize a straightforward stopwatch to measure elapsed time.",
        href: "/utils/clock/stopwatch",
        releasedAt: new Date(),
      },
      {
        title: "Timer",
        description:
          "Set timers to manage your tasks and activities efficiently.",
        href: "/utils/clock/timer",
        releasedAt: null,
      },
      {
        title: "Local Clock",
        description:
          "Configure a personalized local clock to stay synchronized with time.",
        href: "/utils/clock",
        releasedAt: new Date(),
      },
      {
        title: "Global Clock",
        description:
          "Set up a world clock to stay aware of various time zones.",
        href: "/utils/clock",
        releasedAt: null,
      },
    ],
  },
  {
    category: "Color",
    tools: [
      {
        title: "Picker",
        description:
          "Use a color picker tool to select and identify colors effortlessly.",
        href: "/utils/color/picker",
        releasedAt: new Date(),
      },
      {
        title: "Random",
        description:
          "Generate random colors for creative projects or inspiration.",
        href: "/utils/color/random",
        releasedAt: new Date(),
      },
      {
        title: "Gradient Generator",
        description:
          "Create gradient color combinations to enhance visual designs.",
        href: "/utils/color/gradient",
        releasedAt: null,
      },
    ],
  },
  {
    category: "Cryptography",
    tools: [
      {
        title: "Binary Code",
        description:
          "Encode and decode text using binary code for secure communication.",
        href: "/utils/crypto/binary",
        releasedAt: new Date(),
      },
      {
        title: "Caesar Cipher",
        description:
          "Encrypt and decrypt text using the Caesar cipher technique.",
        href: "/utils/crypto/caesar-cipher",
        releasedAt: new Date(),
      },
      {
        title: "Hex Code",
        description:
          "Convert text to and from hexadecimal format for data manipulation.",
        href: "/utils/crypto/hex",
        releasedAt: new Date(),
      },
      {
        title: "Morse Code",
        description:
          "Encode and decode messages using Morse code for discreet communication.",
        href: "/utils/crypto/morse",
        releasedAt: new Date(),
      },
      {
        title: "QR Code",
        description: "Generate QR codes for easy sharing of information.",
        href: "/utils/crypto/qr-code",
        releasedAt: new Date(),
      },
      {
        title: "Barcode",
        description:
          "Create a barcode for efficient product identification and tracking.",
        href: "/utils/crypto/barcode",
        releasedAt: null,
      },
    ],
  },
  {
    category: "Currency",
    tools: [
      {
        title: "Currency converter",
        description:
          "Convert currencies accurately for financial calculations and transactions.",
        href: "/utils/currency",
        releasedAt: new Date(),
      },
    ],
  },
  {
    category: "Developer Utils",
    tools: [
      {
        title: "CSS Minifier",
        description:
          "Minimize CSS code to enhance web page loading performance.",
        href: "/utils/dev/css",
        releasedAt: new Date(),
      },
      {
        title: "JSON Formatter",
        description:
          "Organize and format JSON data for improved readability and debugging.",
        href: "/utils/dev/json",
        releasedAt: new Date(),
      },
    ],
  },
  {
    category: "Security",
    tools: [
      {
        title: "Password Generator",
        description:
          "Generate strong and secure passwords to safeguard your accounts.",
        href: "/utils/security/password-generator",
        releasedAt: new Date(),
      },
    ],
  },
  {
    category: "Text",
    tools: [
      {
        title: "Text converter",
        description:
          "Perform various text transformations, such as case conversion and accent removal.",
        href: "/utils/text",
        releasedAt: new Date(),
      },
    ],
  },
  {
    category: "Todo",
    tools: [
      {
        title: "Todo List",
        description:
          "Manage your tasks and to-dos efficiently using a comprehensive task list.",
        href: "/utils/todo",
        releasedAt: new Date(),
      },
    ],
  },
  {
    category: "Units",
    tools: [
      {
        title: "Length",
        description:
          "Convert between different length units for accurate measurements.",
        href: "/utils/units/length",
        releasedAt: new Date(),
      },
      {
        title: "Area",
        description:
          "Perform conversions between various area units for spatial calculations.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Volume",
        description:
          "Convert volume units for accurate fluid or space measurements.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Temperature",
        description: "Convert temperature values between different scales.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Mass",
        description:
          "Perform mass unit conversions for precise weight measurements.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Time",
        description:
          "Convert time units to manage schedules and durations effectively.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Speed",
        description:
          "Calculate speed conversions for motion-related calculations.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Pressure",
        description:
          "Convert pressure units for engineering and scientific purposes.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Frequency",
        description: "Perform frequency unit conversions for signal analysis.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Energy",
        description:
          "Convert energy units for scientific and practical energy calculations.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Digital Storage",
        description:
          "Convert data storage units to manage digital content effectively.",
        href: "/utils/units/length",
        releasedAt: null,
      },
      {
        title: "Data Transfer Rate",
        description:
          "Convert data transfer rate units for networking and data transmission calculations.",
        href: "/utils/units/length",
        releasedAt: null,
      },
    ],
  },
];

function ToolCard({
  title,
  description,
  href,
  releasedAt,
}: (typeof tools)[number]["tools"][number]) {
  if (!releasedAt) {
    return (
      <div
        aria-disabled
        className="relative inline-block h-full w-64 cursor-not-allowed select-none rounded-lg border p-6"
      >
        <div className="absolute inset-0 grid h-full w-full place-content-center rounded-lg bg-gradient-to-br from-background/95 to-background/60">
          <p className="font-semibold">Coming Soon!</p>
        </div>
        <h3 className="mb-2 font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  }

  return (
    <Link
      className="inline-block h-full w-64 space-y-2 rounded-lg border p-6 transition hover:border-border/60"
      href={href}
    >
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools");

  return {
    title: t("title"),
    metadataBase: new URL("https://utils.bleverse.com"),
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
  };
};

export default async function Tools() {
  const t = await getScopedI18n("pages.tools");

  return (
    <main className="container">
      <h1 className={typography.h1}>{t("title")}</h1>
      <div className="mt-8 space-y-12">
        {tools.map((tool) => (
          <section key={tool.category} className="space-y-4">
            <h2 className={typography.h3}>{tool.category}</h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] justify-items-center gap-x-2 gap-y-6 md:justify-items-start">
              {tool.tools.map((tool) => (
                <li key={tool.title}>
                  <ToolCard {...tool} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
