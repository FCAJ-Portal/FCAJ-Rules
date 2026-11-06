import { defineComponents } from 'blume'
import PageFooter from './components/PageFooter.astro'
import Pagination from './components/Pagination.astro'

export default defineComponents({
  layout: {
    PageFooter,
    Pagination,
  },
})
