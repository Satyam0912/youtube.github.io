import React from 'react'
import { Nav } from 'react-bootstrap';
import { FaHome, FaBook, FaCode, FaMusic, FaPodcast, FaGamepad } from 'react-icons/fa';
import { MdMovie, MdSportsBaseball, MdLiveTv, MdOutlineFaceRetouchingNatural, MdTheaterComedy } from 'react-icons/md';
import { TbHanger2 } from 'react-icons/tb';

const SideBar = () => {
    return (
        <div className="sidebar">

            <Nav variant="pills" defaultActiveKey="#new" className='d-flex flex-column'>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#new"><FaHome />&ensp;New</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#coding"><FaCode />&ensp;Coding</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#reactjs"><FaCode />&ensp;ReactJS</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#nextjs"><FaCode />&ensp;NextJs</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#music"><FaMusic />&ensp;Music</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#education"><FaBook />&ensp;Education</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#podcast"><FaPodcast />&ensp;Podcast</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#movie"><MdMovie />&ensp;Movie</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#gaming"><FaGamepad />&ensp;Gaming</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#live"><MdLiveTv />&ensp;Live</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#sport"><MdSportsBaseball />&ensp;Sport</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#fashion"><TbHanger2 />&ensp;Fashion</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#beauty"><MdOutlineFaceRetouchingNatural />&ensp;Beauty</Nav.Link>
                </Nav.Item>
                <Nav.Item className='sideBarItem'>
                    <Nav.Link href="#comedy"><MdTheaterComedy />&ensp;Comedy</Nav.Link>
                </Nav.Item>
            </Nav>
        </div >
    )
}

export default SideBar