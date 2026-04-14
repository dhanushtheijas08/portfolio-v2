export function formatBlogDate(isoDate: string) {
  const d = new Date(isoDate + "T12:00:00")
  const dd = String(d.getDate()).padStart(2, "0")
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  const yyyy = d.getFullYear()
  return `${dd}.${mm}.${yyyy}`
}

function parseISODate(s: string): Date {
  return new Date(`${s}T12:00:00`)
}

function formatMonthYear(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

export function formatExperiencePeriod(start: string, end: string | null): string {
  const s = parseISODate(start)
  const startStr = formatMonthYear(s)
  if (!end) {
    return `${startStr} – Present`
  }
  return `${startStr} – ${formatMonthYear(parseISODate(end))}`
}

export function formatDurationYears(start: string, end: string | null): string {
  const s = parseISODate(start)
  const e = end ? parseISODate(end) : new Date()
  const ms = Math.max(0, e.getTime() - s.getTime())
  const years = ms / (365.25 * 24 * 60 * 60 * 1000)
  const rounded = Math.round(years * 10) / 10
  if (rounded < 0.1) {
    return "(<0.1 years)"
  }
  if (Math.abs(rounded - 1) < 0.05) {
    return "(1 year)"
  }
  if (Number.isInteger(rounded)) {
    return `(${rounded} years)`
  }
  return `(${rounded.toFixed(1)} years)`
}
