import { useState } from 'react'

function Control() {

    let[formData,setFormData] = useState({FirstName : "", LastName : "", Email : "", Mobile:"", Password  : "", ConPassword : ""})

    let [userData, setUserData] = useState([])

    const formSubmit = (event) => {
        event.preventDefault();
        // console.log(formData);

        if(formData.Password === formData.ConPassword){
            setUserData([...userData, formData])
            setFormData({FirstName : "", LastName : "", Email : "", Mobile:"", Password  : "", ConPassword : ""})
        }
    }

    return (
        <>
            <form className='bg-secondary w-25 border-3 border border-primary rounded m-auto mt-4 p-3' onSubmit={formSubmit}>
            <table>
                <tr>
                    <td><label className='text-white p-3 fw-bold'>FirstName</label></td>
                    <td className='w-100'><input type="text" className='form-control' required value={formData.FirstName} onChange={(event) => setFormData({...formData, FirstName : event.target.value})}/></td>
                </tr>

                <tr>
                    <td><label className='text-white p-3 fw-bold'>LastName</label></td>
                    <td className='w-100'><input type="text" className='form-control' required value={formData.LastName} onChange={(event) => setFormData({...formData, LastName : event.target.value})} /></td>
                </tr>

                <tr>
                    <td><label className='text-white p-3 fw-bold'>Email Id</label></td>
                    <td  className='w-100'><input type="email" className='form-control' required value={formData.Email} onChange={(event) => setFormData({...formData, Email : event.target.value})} /></td>
                </tr>

                <tr>
                    <td><label className='text-white p-3 fw-bold'>Mobile.No</label></td>
                    <td  className='w-100'><input type="text" className='form-control' required value={formData.Mobile} onChange={(event) => setFormData({...formData, Mobile : event.target.value})} /></td>
                </tr>

                <tr>
                    <td><label className='text-white p-3 fw-bold'>Password</label></td>
                    <td  className='w-100'><input type="text" className='form-control' required value={formData.Password} onChange={(event) => setFormData({...formData, Password : event.target.value})} /></td>
                </tr>

                <tr>
                    <td><label className='text-white p-3 fw-bold'>Confirm Password</label></td>
                    <td  className='w-100'><input type="text" className='form-control' required value={formData.ConPassword} onChange={(event) => setFormData({...formData, ConPassword : event.target.value})} /></td>
                </tr>
                <tr>
                    <td colSpan="2" align='center'>
                        <input type="submit" className='btn btn-warning px-5 fw-bold ' />
                    </td>
                </tr>
            </table>

            </form>
            {/* {console.log(formData)} */}

            <table className='border border-3 border-dark mx-3'>
                <thead style={{backgroundColor:'cyan', color:'red' }}>
                    <tr className='text-center'>
                        <th className='p-3'>ID</th>
                        <th className='p-3'>FirstName</th>
                        <th className='p-3'>LaststName</th>
                        <th className='p-3'>Email</th>
                        <th className='p-3'>Mobile</th>
                    </tr>
                </thead>

                <tbody style={{backgroundColor:'black', color:'white'}}>
                    {
                        userData.map((element,i) => {
                            return (
                                <tr className='border border-3 border-dark text-center'>
                                    <td className='p-3'><b>{i+1}</b></td>
                                    <td className='p-3'><b>{element.FirstName}</b></td>
                                    <td className='p-3'><b>{element.LastName}</b></td>
                                    <td className='p-3'><b>{element.Email}</b></td>
                                    <td className='p-3'><b>{element.Mobile}</b></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Control;
