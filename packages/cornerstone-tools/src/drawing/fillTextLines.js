import { getFont, getDefaultStyleProperty } from '../stateManagement/toolStyle'

/**
 * Draw multiple lines of text within a bounding box.
 * @public
 * @method fillTextLines
 * @memberof Drawing
 *
 * @param {CanvasRenderingContext2D} context - Target context
 * @param {Object} boundingBox - `{ left, top }` in canvas coordinates. Only the top-left corner is specified, as the text will take up as much space as it needs.
 * @param {String[]} textLines - The text to be displayed.
 * @param {FillStyle} fillStyle - The fillStyle to apply to the text.
 * @param {Number} padding - The amount of padding above/below each line in canvas units. Note this gives an inter-line spacing of `2*padding`.
 * @returns {undefined}
 */
export default function (context, boundingBox, textLines, fillStyle, padding) {
  const fontSize =
    parseInt(getDefaultStyleProperty('textBox.fontSize'), 10) || 14

  context.font = getFont()
  context.textBaseline = 'top'
  context.fillStyle = fillStyle
  textLines.forEach(function (text, index) {
    context.fillText(
      text,
      boundingBox.left + padding,
      boundingBox.top + padding + index * (fontSize + padding)
    )
  })
}
