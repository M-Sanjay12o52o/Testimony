import Signin from '@/components/Signin'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Signin />
    </div>
}

export default page