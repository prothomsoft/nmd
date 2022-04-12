import React from 'react';
import { useRouter } from 'next/router'

const Fotografia = () => {
    const router = useRouter()

    React.useEffect(() => {
        
          router.push('/')
        
      }, [])

    return (
        <div>
            
        </div>
    );
};

export default Fotografia;