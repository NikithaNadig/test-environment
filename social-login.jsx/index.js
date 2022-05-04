// import React, {useEffect,useState} from "react";
// import { useLocation } from 'react-router-dom'
// import axios from 'axios'


// const SocialLogin=()=> {
//     const [auth, setAuth] = useState()
//     const location = useLocation()
//     useEffect(() => {
//       if (!location) {
//         return
//       }
//       const { search } = location
//       axios({
//         method: 'GET',
//         url: `http://localhost:1337/auth/facebook/callback?${search}`,
//       })
//         .then((res) => res.data)
//         .then(setAuth)
//     }, [location])
 

//     componentDidMount() {
//         const { match: {params: { provider }}, location: { search } } = this.props;
//         const requestURL = `http://localhost:1337/auth/${provider}/callback${search}`;
       
//        request(requestURL, { method: 'GET' })
//          .then((response) => {
//             auth.setToken(response.jwt, true);
//             auth.setUserInfo(response.user, true);
//             this.redirectUser('/');
//          }).catch(err => {
//             console.log(err.response.payload)
//             this.redirectUser('/auth/login');
//          });
//       }
      
//       redirectUser = (path) => {
//         this.props.history.push(path);
//       }

//     return(
//         <div>
//         {auth && (
//           <>
//             <div>Jwt: {auth.jwt}</div>
//             <div>User Id: {auth.user.id}</div>
//             <div>Provider: {auth.user.provider}</div>
//           </>
//         )}
//       </div>
//     )
// }

// export default SocialLogin