import { css } from 'glamor'

function globals (definitions) {
  Object.keys(definitions).forEach((key) => {
    css.global(key, definitions[key])
  })
}

globals({
  'html, body, #app, [data-reactroot]': {
    height: '100%'
  }
})
