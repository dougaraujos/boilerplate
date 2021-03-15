/**
 * Input properties type.
 */
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control?: any
  innerRef?: LegacyRef<HTMLInputElement>
  mask?: string | Array<(string | RegExp)>
}
