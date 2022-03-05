/*
* http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX105-280/FX105
*/
import {useRouter} from 'next/router'
function FX105280(){
    const router = useRouter();
    return <h1>Washer Extractors Details FX105-280. Model: {router.query.model}</h1>
}
export default FX105280;