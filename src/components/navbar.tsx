import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const handleMenuItemClick = () => {
        console.log('OK');
        setDropdownOpen(false);
        console.log(dropdownOpen);
    };

    return (
        <nav className="bg-sky-900 border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-20" alt="Arduino Proto Academy" />
                    <span className="self-center text-3xl font-bold whitespace-nowrap text-white dark:text-white">
                        Arduino Proto Academy
                    </span>
                </a>
                <button data-collapse-toggle="navbar-multi-level"  onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Abrir Menu Principal</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {/* Prototipação */}
                        <li>
                            <Link to="/prototipacao" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page" onClick={handleMenuItemClick}>
                                Prototipação
                            </Link>
                        </li>
                        {/* Arduino */}
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={toggleDropdown} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                O Arduino
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" ${dropdownOpen ? 'block' : 'hidden'}`}>  
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link to="/arduino" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleMenuItemClick}>
                                            O Que é Arduino?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/model/943bae9bb86842408fc718b6e4c92ddb" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleMenuItemClick}>
                                            Placa Arduino UNO
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/model/a20196fc7110435991f60eabf7886807" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Projeto Irrigador Automático
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Outros Componentes */}
                        <li>
                            <button id="dropdownNavbarComponentsLink" data-dropdown-toggle="dropdownNavbarComponents" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Outros Componentes 
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button> 
                            <div id="dropdownNavbarComponents" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">

                                    {/* Dispositivos de Entrada */}
                                    <li aria-labelledby="dropdownNavbarComponentsLink">
                                        <button id="dropdownInputDevicesLink" data-dropdown-toggle="dropdownInputDevices" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dispositivos de Entrada
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <div id="dropdownInputDevices" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                                            <div className="py-1">
                                                <Link 
                                                    to="/dispositivos-entrada" 
                                                    onClick={handleMenuItemClick} 
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    O que são os Dispositivos de Entrada?
                                                </Link>
                                            </div>    
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInputDevicesLink">
                                                <li>
                                                    <Link 
                                                        to="/model/f82080d1a0d34a049e048c8fcfbcdc89" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Sensor | Ultrassônico (HC-SR04)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/1afc1475e7114976a98854eca8b42767" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Sensor | Umidade do Solo
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/9d83702926b04a40bca3f2b684a4e9df" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Sensor | Temperatura (LM35)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/ca9e4a249d964844ac5aa0bf49814b32" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Sensor | Luminosidade  (LDR)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/ee4e9d38fba44a51ad0ec0225995b813" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Controle | Potenciômetro (B10K)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* Dispositivos de Saída */}
                                    <li aria-labelledby="dropdownNavbarComponentsLink">
                                        <button id="dropdownOutputDevicesLink" data-dropdown-toggle="dropdownOutputDevices" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dispositivos de Saída
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <div id="dropdownOutputDevices" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                                            <div className="py-1">
                                                <Link 
                                                    to="/dispositivos-saida" 
                                                    onClick={handleMenuItemClick} 
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    O que são os Dispositivos de Saída?
                                                </Link>
                                            </div>    
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInputDevicesLink">
                                                <li>
                                                    <Link 
                                                        to="/model/6b6b19f1986e4dcdba38d2642c8fc61c" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Atuador | Motor DC
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/863b04f543a94b82ad5f660aafd997de" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Atuador | Servo Motor (SG90)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/554dd0d074fa463098061ffcd7b4829d" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Atuador | Motor de Passo (28BYJ-48)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/901e655ec1df457eb3923c0f12330a9c" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Indicador | Led RGB
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/54a65095d68c40ef84eb4bc02ba7af00" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Indicador | Led Verde
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/a79703f3835f458a86a0eaace29c8aeb" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Indicador | Display LCD
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/917cce8c366c4fe18c3347366d91d57c" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Indicador | Display OLED
                                                    </Link>
                                                </li> 
                                            </ul>
                                        </div>
                                    </li>
                                    {/* Módulos de Comunicação */}
                                    <li aria-labelledby="dropdownNavbarComponentsLink">
                                        <button id="dropdownComunicationModulesLink" data-dropdown-toggle="dropdownComunicationModules" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Módulos de Comunicação
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <div id="dropdownComunicationModules" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                                            <div className="py-1">
                                                <Link 
                                                    to="/modulos-comunicacao" 
                                                    onClick={handleMenuItemClick} 
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    O que são os Módulos de Comunicação?
                                                </Link>
                                            </div>    
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInputDevicesLink">
                                                <li>
                                                    <Link 
                                                        to="/model/a3b67619409343c49e80012a81762653" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Módulo Bluetooth (HC-05)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/3319f2d2df5047708763a7f5d1eaf7b0" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Módulo WiFi (ESP8266)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/af0569c61bab47978aa1eb74eb7c21c6" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Módulo Receptor RF (433MHz)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/16501915e98143e49930a755a87272b3" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Módulo RFID (RC522)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                     {/* Componentes da Fonte de Alimentação */}
                                     <li aria-labelledby="dropdownNavbarComponentsLink">
                                        <button id="dropdownPowerSupplyLink" data-dropdown-toggle="dropdownPowerSupply" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Componentes de Fonte de Alimentação
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <div id="dropdownPowerSupply" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                                            <div className="py-1">
                                                <Link 
                                                    to="/fonte-alimentacao" 
                                                    onClick={handleMenuItemClick} 
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    O que são os Componentes de Fonte de Alimentação?
                                                </Link>
                                            </div>    
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInputDevicesLink">
                                                <li>
                                                    <Link 
                                                        to="/model/8da31e535056495b8fb2c1d6b3674ae8" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Bateria 9V
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/a3a2bdf1311f4b1b858c2ea079b9d298" 
                                                        onClick={handleMenuItemClick} 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Regulador de Voltagem | Transistor (To220)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* Placas de Prototipagem e Conectors */}
                                    <li aria-labelledby="dropdownNavbarComponentsLink">
                                        <button id="dropdownBoardsConnectorsLink" data-dropdown-toggle="dropdownBoardsConnectors" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Placas de Prototipagem e Conectores
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <div id="dropdownBoardsConnectors" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                                            <div className="py-1">
                                                <Link 
                                                    to="/placas-conectores" 
                                                    onClick={handleMenuItemClick} 
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    O que são as Placas de Prototipagem e Conectores?
                                                </Link>
                                            </div>    
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInputDevicesLink">
                                                <li>
                                                    <Link 
                                                        to="/model/d3bb5dfd2b4e44e4b2bffb35cc207ae7" 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Protoboard/Breadboard
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/03912ee1ff6448f7bd43e8410f572910" 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Fios de Ligação/Jumpers 
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        to="/model/c79dbc14dd1c4f7bb1b16dde69cd51ea" 
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Conector de Bateria 9v
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        {/* QUIZ */}
                        <li>
                            <Link to="/quiz" className="block py-2 px-3 text-whit rounded md:bg-transparent md:p-0 md:dark:text-blue-500 md:hover:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                                Quiz ❓
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;