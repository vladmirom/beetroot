import { createElement } from 'react'

{/* Alternative method instead JSX */}
function SliderAlternative() {
  return createElement(
    'div',
    {className: 'slider-test'},
    createElement(
      'h1',
      {},
      'Alterrnative slider title'
    ),
    createElement(
      'div',
      {},
      'Lipsum'
    )
  )
}

export default SliderAlternative;