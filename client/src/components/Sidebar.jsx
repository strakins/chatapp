import SearchInput from "./SearchInput"
import Signout from './Signout';
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />

        <div className="divider px-3">

        </div>
        <Conversations/>

        <Signout />
    </div>
  )
}

export default Sidebar