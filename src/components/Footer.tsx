const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Información de contacto */}
        <div className="text-gray-700 text-sm">
          <p>Celular: 0978706157</p>
          <p>Correo: jenny@gmail.com</p>
        </div>

        {/* Información de la institución */}
        <div className="text-gray-700 text-sm mt-4 md:mt-0">
          <p className="font-semibold">Marketing Gastronómico</p>
          <p>Escuela Superior Politécnica de Chimborazo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;