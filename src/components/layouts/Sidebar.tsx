import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import TheatersSharpIcon from '@mui/icons-material/TheatersSharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul role='list' className="sidbar-nav">
        <li className="sidebar-link"><WindowSharpIcon /><span>Home</span></li>
        <li className="sidebar-link"><TheatersSharpIcon /><span>Movies</span></li>
        <li className="sidebar-link"><OndemandVideoSharpIcon /><span>TV Series</span></li>
        <li className="sidebar-link"><BookmarkSharpIcon /><span>Bookmarks</span></li>
      </ul>
    </aside>
  )
}

export default Sidebar
