import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';


export const Footer = () => {
    return (
        <MDBFooter className='mt-5 py-3 text-center text-white bg-dark'>
            <MDBContainer>
                <section>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                </section>
            </MDBContainer>
            <>
                © 2023 Bootcamp DWFS UDD
            </>
        </MDBFooter>
    );
}