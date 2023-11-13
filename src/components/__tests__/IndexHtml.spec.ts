import { describe, it, expect, } from 'vitest'

import { mount, } from '@vue/test-utils'
import IndexHtml from '../IndexHtml.vue'

describe('IndexHTML', () => {
    it('renders properly', () => {
        const wrapper = mount(IndexHtml)
        // , { props: { msg: 'Hello Vitest', }, }
        expect(wrapper.text()).toContain('Hello, Frontend Staff!!!')
    })
})
