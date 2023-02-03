import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = ()=>{
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar = {actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>


    return(
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
           {showModal && modal}
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tellus id lectus tempor tempor. Etiam sit amet enim sed magna cursus vestibulum. Maecenas molestie venenatis erat. Sed a metus non nulla consequat eleifend sit amet ut ex. Nunc eu mollis neque. Praesent gravida quis eros id malesuada. Pellentesque placerat ante eget dui elementum, eget rutrum massa vehicula. Praesent molestie nisl in venenatis laoreet. Sed ipsum ipsum, pellentesque eget ultrices semper, semper vel tortor. Curabitur a mauris venenatis, consequat erat et, porttitor erat. Nunc ac enim tellus. Suspendisse potenti.
           </p>
           
        </div>
    ) ;
}

export default ModalPage;