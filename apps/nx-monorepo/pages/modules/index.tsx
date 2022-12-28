import styles from './index.module.css'
import { Button } from '@nx-monorepo/ui'

/* eslint-disable-next-line */
export interface ModulesProps {}

export function Modules(props: ModulesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Modules List Pages!</h1>
      <Button color={'purple'}>Purple</Button>
    </div>
  )
}

export default Modules
