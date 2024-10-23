import loadImg from './assets/loading.png'
import './Spinner.css' // We'll create this CSS file

const Spinner = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
        <img width={40} height={40} src={loadImg} alt="loading" className="spinner" />
    </div>
  )
}

export default Spinner
