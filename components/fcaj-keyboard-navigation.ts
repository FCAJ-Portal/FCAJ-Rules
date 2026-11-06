const contentPageMarker = '[data-fcaj-content-page]'
const previousLink = '[data-fcaj-pagination="previous"]'
const nextLink = '[data-fcaj-pagination="next"]'

const interactiveRoles = new Set([
  'button',
  'checkbox',
  'combobox',
  'link',
  'listbox',
  'menuitem',
  'radio',
  'slider',
  'spinbutton',
  'switch',
  'tab',
])

const isInteractiveTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof Element)) {
    return false
  }

  const element = target.closest<HTMLElement>(
    'a, button, input, select, textarea, summary, [contenteditable], [data-fcaj-interactive], [role], pre, dialog',
  )

  if (!element) {
    return false
  }

  if (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement ||
    element.isContentEditable
  ) {
    return true
  }

  if (
    element.matches('a, button, summary, [contenteditable], [data-fcaj-interactive], pre, dialog')
  ) {
    return true
  }

  return interactiveRoles.has(element.getAttribute('role') ?? '')
}

const handleKeydown = (event: KeyboardEvent): void => {
  if (
    event.defaultPrevented ||
    event.isComposing ||
    event.repeat ||
    event.ctrlKey ||
    event.altKey ||
    event.metaKey ||
    event.shiftKey ||
    !document.querySelector(contentPageMarker) ||
    isInteractiveTarget(event.target) ||
    isInteractiveTarget(document.activeElement)
  ) {
    return
  }

  const selector =
    event.key === 'ArrowLeft' ? previousLink : event.key === 'ArrowRight' ? nextLink : null

  if (!selector) {
    return
  }

  const link = document.querySelector<HTMLAnchorElement>(selector)
  if (!link) {
    return
  }

  event.preventDefault()
  link.click()
}

export const initKeyboardNavigation = (): void => {
  const root = document.documentElement
  if (root.dataset.fcajKeyboardNavigation === 'true') {
    return
  }

  root.dataset.fcajKeyboardNavigation = 'true'
  document.addEventListener('keydown', handleKeydown)
}
