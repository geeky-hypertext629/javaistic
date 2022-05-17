import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/programs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'programs'
)

export const programsNav = {
  'Getting started': [pages['introduction']],
  Introduction: [pages['print-an-integer'], pages['add-two-integers']],
}
