import type { MarkdownRenderer } from 'vitepress'

/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function zoomablePlugin(md: MarkdownRenderer) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options)
    })

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self)

    const srcIndex = token.attrIndex('src')
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self)

    const src = token.attrs[srcIndex][1]
    const alt = token.content || ''

    // The component builds its own <img> from a raw string prop, so the src never
    // passes through Vite's asset pipeline. Relative paths would be emitted verbatim
    // and 404 in the production build — leave those to the default renderer.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self)
    }

    // Props, not a slot: the component owns the <img>, so there is one source of
    // truth. <ClientOnly> keeps the zoom UI out of the SSR pass so there is no
    // markup for hydration to mismatch against. Explicit closing tag is required.
    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`
  }
}
