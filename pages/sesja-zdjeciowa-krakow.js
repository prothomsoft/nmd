import React from 'react';
import { useRouter } from 'next/router'

const Fotografia = () => {
    const router = useRouter()

    React.useEffect(() => {
        
          router.push('/plener-slubny-krakow')
        
      }, [])

    return (
        <div>
            
        </div>
    );
};

export default Fotografia;