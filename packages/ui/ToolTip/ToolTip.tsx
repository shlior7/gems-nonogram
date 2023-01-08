import { FunctionComponent, useState } from 'react';
import Image from 'next/image'
import Popover from 'react-popover';
import './ToolTip.css';

const TipCopy = (
  <div className="tip-copy">
    <div className="tip-line"><b>Select:</b> Click a cell</div>
    <div className="tip-line"><b>Assign Number:</b> Single click on desired number control</div>
    <div><b>Tag Number as Note:</b> Double click on the desired number control</div>
  </div>
)


export const ToolTip:FunctionComponent<{}> = ()=> {
    const [openState, setOpen] = useState(false);
    
    const toggleOpen = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      // This prevents ghost click.
      event.preventDefault();
      setOpen(!open);
    }

    const close = () => {
      setOpen(false);
    }

    const open = () => {
      setOpen(true);
    }
    
      return (
        <Popover
          isOpen={openState}
          preferPlace="below"
          body={TipCopy}
          style={{ width: '90vw', maxWidth: '40em' }}
        >
          <div
            onClick={toggleOpen}
            onMouseEnter={() => 
              setOpen(true)
            }
            onMouseLeave={close}
          >
            <Image className="icon" src="./svg/help.svg" alt='help' />
          </div>
        </Popover>
      );
}
