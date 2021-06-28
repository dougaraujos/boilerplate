/**
 * Button properties type.
 */
export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  onClick?: () => void
}
