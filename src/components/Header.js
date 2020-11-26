import locationIcon from '@iconify/icons-mdi/fire-alert';
import { Icon } from "@iconify/react";


const Header = () => {
  return (
    <div>
      <h1 className="header"><Icon icon={locationIcon} />WildFire Tracker (powered by NASA)</h1>
    </div>
  )
}

export default Header
