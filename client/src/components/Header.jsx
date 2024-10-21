import logo from './assets/logo.png'

const Header = () => {
  return (
    <nav className='bg-gray-200 mb-4 p-3 flex justify-center'>
        <div className='container'>
            <a href="/">
                <div className='flex items-center gap-3'>
                    <img src={logo} alt="logo h bhai" width={38} height={38}/>
                    <div className='text-xl text-pink-500 tracking-wide'>ProjectMgmt</div>
                </div>
            </a>
        </div>
    </nav>
  )
}

export default Header