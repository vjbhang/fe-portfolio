import styles from "./MissionControlPrompt.module.css";
import { ReactNode } from "react";

export default function MissionControlPrompt({
  children,
  status,
}: {
  children: ReactNode;
  status?: string;
}) {
  return (
    <div className={`${styles.cornerBox} w-130 p-0.5`}>
      <div className="relative flex flex-col w-full px-5 py-3 gap-4 items-start bg-black/70">
        {status && (
          <div className="font-inconsolata text-white/70 text-sm absolute top-0 right-0 pr-4 pt-1.5 text-right">
            <p className="text-xs">STAGE</p>
            <p className="-mt-1 font-bold">{status}</p>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
