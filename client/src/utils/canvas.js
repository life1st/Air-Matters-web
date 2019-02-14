function ang2rad(ang) {
  return ang * Math.PI / 180
}
export function arcRect(ctx, r, {x, y, w, h}, fillColor = null) {
  ctx.beginPath()
  ctx.arc(x + r, y + r, r, ang2rad(180), ang2rad(270))
  ctx.arc(x + w - r, y + r, r, ang2rad(270), ang2rad(360))
  ctx.arc(x + w - r, y + h - r, r, ang2rad(0), ang2rad(90))
  ctx.arc(x + r, y + h - r, r, ang2rad(90), ang2rad(180))
  ctx.lineTo(x, y + r)

  ctx.stroke()
  if (fillColor) {
    ctx.fillStyle = fillColor
    ctx.fill()
  }
}