export function richBulletText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    const m = part.match(/^\*\*(.+)\*\*$/)
    if (m) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {m[1]}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}
