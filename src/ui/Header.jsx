import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/user/UserName"

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-yellow-500 uppercase px-4 py-3
     border-stone-200 p-4 sm:px-6">
        <Link to='/' className="tracking-widest">React Pizza</Link>
        <SearchOrder />

        <UserName/>
    </header>
  )
}
