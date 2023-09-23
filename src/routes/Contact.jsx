import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { addDoc, doc, deleteDoc, setDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase.js'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const validarInputs = () => {

    const input1 = document.getElementById('input-nombre').value;
    const input2 = document.getElementById('input-apellido').value;
    const input3 = document.getElementById('input-correo').value;
    const input4 = document.getElementById('input-hora').value;
    const input5 = document.getElementById('input-dia').value;

    if (input1 == "") {
        Swal.fire({
            icon: 'warning',
            text: 'Ingrese Nombre',
        })
        return false;
    }
    if (input2 == "") {
        Swal.fire({
            icon: 'warning',
            text: 'Ingrese Apellido',
        })
        return false;
    }
    if (input4 == "") {
        Swal.fire({
            icon: 'warning',
            text: 'Ingrese Hora',
        })
        return false;
    }
    if (input5 == "") {
        Swal.fire({
            icon: 'warning',
            text: 'Ingrese Dia',
        })
        return false;
    }
    if (input3 == "") {
        Swal.fire({
            icon: 'warning',
            text: 'Ingrese Correo',
        })
        return false;
    } else if (!input3.includes("@")) {
        Swal.fire({
            icon: 'warning',
            text: 'Correo no valido',
        })
        return false;
    }
    return true;
}

export const Contact = () => {

    const reservasRef = collection(db, 'reservas');

    const [reservas, setReservas] = useState([]);

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [dia, setDia] = useState("")
    const [hora, setHora] = useState("")

    const getReservas = async () => {
        const data = await getDocs(reservasRef)
        setReservas(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    const crearReservas = async () => {
        if (validarInputs()) {
            await addDoc(reservasRef, { nombre, apellido, correo, hora, dia })
            Swal.fire({
                icon: 'success',
                text: 'Reserva agregada',
            })
            getReservas()
            document.getElementById('input-nombre').value = "";
            document.getElementById('input-apellido').value = "";
            document.getElementById('input-correo').value = "";
            document.getElementById('input-hora').value = null;
            document.getElementById('input-dia').value = null;

        }
    }

    const borrarReservas = async (id) => {
        const reservaDoc = doc(db, 'reservas', id)
        await deleteDoc(reservaDoc)
        Swal.fire({
            title: '¿Desea eliminar la reserva Seleccionada?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `No estoy seguro`,
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Reserva Eliminada', '', 'success')
                getReservas()
                document.getElementById('input-nombre').value = "";
                document.getElementById('input-apellido').value = "";
                document.getElementById('input-correo').value = "";
                document.getElementById('input-hora').value = null;
                document.getElementById('input-dia').value = null;

                document.getElementById('btn-crear').disabled = false;
                document.getElementById('btn-editar').disabled = true;
            } else if (result.isDenied) {
                Swal.fire('Reserva no se eliminará', '', 'info')
            }
        })
    }

    const editarReservas = (updateid, nombre, apellido, correo, hora, dia) => {

        document.getElementById('btn-crear').disabled = true;
        document.getElementById('btn-editar').disabled = false;

        document.getElementById('input-nombre').value = nombre;
        document.getElementById('input-apellido').value = apellido;
        document.getElementById('input-correo').value = correo;
        document.getElementById('input-hora').value = hora;
        document.getElementById('input-dia').value = dia;

        let boton = document.getElementById('btn-editar');

        boton.onclick = async () => {

            if (validarInputs()) {
                const ref = doc(db, "reservas", updateid);

                let no = document.getElementById('input-nombre').value;
                let ape = document.getElementById('input-apellido').value;
                let co = document.getElementById('input-correo').value;
                let ho = document.getElementById('input-hora').value;
                let di = document.getElementById('input-dia').value;

                try {
                    await setDoc(ref, {
                        nombre: no,
                        apellido: ape,
                        correo: co,
                        hora: ho,
                        dia: di
                    });
                    Swal.fire({
                        icon: 'success',
                        text: 'Reserva editada',
                    });

                    getReservas()

                    document.getElementById('btn-crear').disabled = false;
                    document.getElementById('btn-editar').disabled = true;

                    document.getElementById('input-nombre').value = "";
                    document.getElementById('input-apellido').value = "";
                    document.getElementById('input-correo').value = "";
                    document.getElementById('input-hora').value = null;
                    document.getElementById('input-dia').value = null;

                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        text: 'Reserva no se pudo modificar',
                    });
                }
            }
        }
    }

    useEffect(() => {
        getReservas()
    }, [])

    return (
        <>
            <Row>
                <Col className='col-12 mb-3 col-md-5 mb-md-auto'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Reserva aqui tu mesa</Card.Title>
                            <Card.Text>
                                Llena nuestro formulario para solicitar tu reserva, tambien puedes contactarte a nuestro telefono.
                            </Card.Text>
                            <Form>
                                <Form.Group controlId="input-correo" value={correo} onChange={(event) => setCorreo(event.target.value)} className="mb-3" >
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group controlId="input-nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="input-apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} className="mb-3">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="input-dia" value={dia} onChange={(event) => setDia(event.target.value)} className="mb-3">
                                    <Form.Label>Dia</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group controlId="input-hora" value={hora} onChange={(event) => setHora(event.target.value)} className="mb-3">
                                    <Form.Label>Hora</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>
                            </Form>
                            <Button className="m-1" id='btn-crear' onClick={crearReservas} variant="primary" type="submit">
                                Guardar Reserva
                            </Button>
                            <Button className="m-1" id='btn-editar' variant="warning" type="submit" disabled>
                                Guardar Cambios
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-12 col-md-5 offset-md-2'>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Informacion de Contacto
                            </Card.Title>
                            <Card.Text>
                                <svg className="my-icon" xmins="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                Avenida Paicavi 2023 - Concepción
                            </Card.Text>
                            <Card.Text>
                                <svg className="my-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                +56 41 2123456
                            </Card.Text>
                            <Card.Text>
                                <svg className="my-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                </svg>
                                Lunes a Sabado de 11:00 a 23:00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='mt-3'>
                    <h2 className='text-center'>Listado Reservas</h2>
                    <Table responsive="sm" className='text-center' striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Dia</th>
                                <th>Hora</th>
                                <th>Operación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservas.map(reserva => (
                                    <tr key={reserva.id}>
                                        <td>{reserva.nombre}</td>
                                        <td>{reserva.apellido}</td>
                                        <td>{reserva.correo}</td>
                                        <td>{reserva.dia}</td>
                                        <td>{reserva.hora}</td>
                                        <td>
                                            <Button onClick={() => { editarReservas(reserva.id, reserva.nombre, reserva.apellido, reserva.correo, reserva.hora, reserva.dia) }} className="m-1" variant='warning'>Editar</Button>
                                            <Button onClick={() => { borrarReservas(reserva.id) }} className="m-1" variant="danger">Eliminar</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}