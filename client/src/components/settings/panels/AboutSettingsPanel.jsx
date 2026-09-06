export function AboutSettingsPanel({
  appInfo,
  appInfoLoading,
  onDone,
  variant = "desktop",
}) {
  const isMobile = variant === "mobile";
  const versionLabel =
    String(appInfo?.version || "Unknown").trim() || "Unknown";

  return (
    <div className="space-y-4 text-slate-600 dark:text-slate-300">
      <div
        className={
          isMobile
            ? "space-y-3"
            : "app-scroll max-h-[calc(100dvh-18rem)] space-y-3 overflow-y-auto pr-1"
        }
      >
        <div className="flex w-full items-center justify-between gap-3 rounded-2xl border border-emerald-200/70 bg-white/90 px-4 py-3 text-left text-sm font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-slate-900/50 dark:text-emerald-200">
          <p>Version</p>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {appInfoLoading ? "Loading..." : versionLabel}
          </span>
        </div>

        <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 dark:border-emerald-500/30 dark:bg-slate-900/50">
          <div className="space-y-4 text-center">
            <div>
              <p className="text-lg font-bold text-emerald-700 dark:text-emerald-200">
                RYN Chat
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                سازنده: <span className="font-semibold">ramin</span>
              </p>
            </div>

            <div className="border-t border-emerald-100/80 pt-4 dark:border-emerald-500/20">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                📢 کانال پخش‌کننده:
              </p>
              <p className="mt-1 font-semibold text-emerald-700 dark:text-emerald-200">
                @ByteTunnel
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              فضای کاملاً امن و نامحدود برای چت با دوستان، حتی در زمان محدود
              بودن اینترنت.
            </p>

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              برای حمایت، کانال را دنبال کنید تا زحمت‌ها جبران شوند 🌹
            </p>
          </div>
        </div>
      </div>

      {!isMobile ? (
        <div className="flex items-center justify-end pt-1">
          <button
            type="button"
            onClick={() => onDone?.()}
            className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-400"
          >
            Done
          </button>
        </div>
      ) : null}
    </div>
  );
}
