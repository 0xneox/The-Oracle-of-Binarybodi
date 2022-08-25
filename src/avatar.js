/** @jsx jsx */
import { jsx } from 'theme-ui'


export default ({
  size = 64,
  ...props
}) =>
  <div
    {...props}
    sx={{
      width: size,
      height: size,
    }}>

  </div>
