import React  from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

//const NavMenu =()=>{

//        return (
//            <header>
//                {/*<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>*/}
//                {/*    <NavbarBrand tag={Link} to="/">*/}
//                {/*        <img alt="logo" src="skpatel_logo.svg" className="logo" />*/}
//                {/*    </NavbarBrand>*/}
//                {/*    <NavbarToggler  className="mr-2" />*/}
//                {/*    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={true} navbar>*/}
//                {/*        <ul className="navbar-nav flex-grow">*/}
//                {/*            <NavItem>*/}
//                {/*                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>*/}
//                {/*            </NavItem>*/}
//                {/*            <NavItem>*/}
//                {/*                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>*/}
//                {/*            </NavItem>*/}
//                {/*            <NavItem>*/}
//                {/*                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>*/}
//                {/*            </NavItem>*/}
//                {/*            <NavItem>*/}
//                {/*                <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>*/}
//                {/*            </NavItem>*/}
//                {/*        </ul>*/}
//                {/*    </Collapse>*/}
//                {/*</Navbar>*/}

//				<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
//					<NavbarBrand tag={Link} to="/">
//						<img alt="logo" src="skpatel_logo.svg" className="logo" />
//					</NavbarBrand>
//					<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//						<span className="navbar-toggler-icon"></span>
//					</button>

//					<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
//						<ul className="navbar-nav flex-grow">
//							<NavItem>
//								<NavLink tag={Link} className="nav-item nav-link" to="/">Home</NavLink>
//							</NavItem>
//							<NavItem>
//								<NavLink tag={Link} className="nav-item nav-link" to="/counter">Counter</NavLink>
//							</NavItem>
//							<NavItem>
//								<NavLink tag={Link} className="nav-item nav-link" to="/fetch-data">Fetch data</NavLink>
//							</NavItem>
//							<NavItem>
//								<NavLink tag={Link} className="nav-item nav-link" to="/login">Login</NavLink>
//							</NavItem>
//						</ul>
//						{/*<div class="navbar-nav">*/}
//						{/*	<a href="#" class="nav-item nav-link">Home</a>*/}
//						{/*	<a href="#" class="nav-item nav-link">About</a>*/}
//						{/*	<div class="nav-item dropdown">*/}
//						{/*		<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Services</a>*/}
//						{/*		<div class="dropdown-menu">*/}
//						{/*			<a href="#" class="dropdown-item">Web Design</a>*/}
//						{/*			<a href="#" class="dropdown-item">Web Development</a>*/}
//						{/*			<a href="#" class="dropdown-item">Graphic Design</a>*/}
//						{/*			<a href="#" class="dropdown-item">Digital Marketing</a>*/}
//						{/*		</div>*/}
//						{/*	</div>*/}
//						{/*	<a href="#" class="nav-item nav-link active">Pricing</a>*/}
//						{/*	<a href="#" class="nav-item nav-link">Blog</a>*/}
//						{/*	<a href="#" class="nav-item nav-link">Contact</a>*/}
//						{/*</div>*/}
//						<form className="navbar-form form-inline">
//							<div className="input-group search-box">
//								<input type="text" id="search" class="form-control" placeholder="Search here..."></input>
//									<div class="input-group-append">
//										<span class="input-group-text"><i class="material-icons">&#xE8B6;</i></span>
//									</div>
//							</div>
//						</form>
//						<div class="navbar-nav action-buttons ml-auto">
//							<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle mr-3">Login</a>
//							<div class="dropdown-menu login-form">
//								<form action="/examples/actions/confirmation.php" method="post">
//									<div class="form-group">
//										<label>Username</label>
//										<input type="text" class="form-control" required="required"></input>
//									</div>
//									<div class="form-group">
//										<div class="clearfix">
//											<label>Password</label>
//											<a href="#" class="float-right text-muted"><small>Forgot?</small></a>
//										</div>
//										<input type="password" class="form-control" required="required"></input>
//									</div>
//									<input type="submit" class="btn btn-primary btn-block" value="Login"></input>
//								</form>
//							</div>
//							<a href="#" className="btn btn-primary">Get Started</a>
//						</div>
//					</div>
//				</Navbar>
//            </header>

//        );
//    }

// create classes
const NavBar = (props) => { 
  
        return (
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                <div className="container-fluid">
                    {/*<div className="navbar-header">*/}
                    {/*    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">*/}
                    {/*        <span className="sr-only">Toggle navigation</span>*/}
                    {/*        <span className="icon-bar"></span>*/}
                    {/*        <span className="icon-bar"></span>*/}
                    {/*        <span className="icon-bar"></span>*/}
                    {/*    </button>*/}
                       
                    {/*</div>*/}
                    <NavBrand linkTo={props.brand?.linkTo} text={props.brand?.text} />
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <NavMenu links={props?.links} />
                    </div>
                </div>
            </Navbar>
        );
    }

const NavBrand = (props) => {
    
        return (
            <a className="navbar-brand" href={props?.linkTo}>
                <Logo/>
                </a>
        );
    }

const NavMenu = (props) => {
    console.log(props);
    var links = props.links.map((link, index) => {
            if (link.dropdown) {
                return (
                    <NavLinkDropdown links={link.links} key={index} text={link.text} active={link.active} />
                );
            }
            else {
                return (
                    <NavLink linkTo={link.linkTo} key={index} text={link.text} active={link.active} />
                );
            }
        });
        return (
            <ul className="nav navbar-nav">
                {links}
            </ul>
        );
    }

const NavLinkDropdown = (props)=> {
        var active = false;
        var links = props.links.map((link,index)=> {
            if (link.active) {
                active = true;
            }
            return (
                <NavLink linkTo={link.linkTo} text={link.text} key={index} active={link.active} />
            );
        });
        return (
            <li className={"dropdown " + (active ? "active" : "")}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    {props?.text}
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {links}
                </ul>
            </li>
        );
    }

const NavLink = (props)=> {
        return (
            <li className={(props?.active ? "active" : "")}><a href={props?.linkTo}>{props?.text}</a></li>
        );
}

const Logo = () => {
    return <><img alt="logo" src="skpatel_logo.svg" className="logo" /></>
}


export default NavBar;