import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { TailSpin } from 'react-loader-spinner'
import s from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={s.center}>
      <TailSpin color="#00BFFF" height={50} width={50} />
    </div>
  )
}

export default Spinner
