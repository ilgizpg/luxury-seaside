interface ContactCardProps {
  info: {
    id: number;
    icon: string;
    title: string;
    content: string[];
    link: string | null;
  };
}

const ContactCard = ({ info }: ContactCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
      <div className="text-primary text-3xl mb-4">
        <i className={`fas ${info.icon}`}></i>
      </div>
      <h3 className="font-display text-xl font-semibold text-primary mb-3">{info.title}</h3>
      {info.content.map((line, index) => (
        <p key={index} className={`font-body ${index > 0 ? 'text-sm mt-2' : ''}`}>
          {info.link && index === 0 ? (
            <a href={info.link} className="hover:text-accent transition-all">
              {line}
            </a>
          ) : (
            line
          )}
        </p>
      ))}
    </div>
  );
};

export default ContactCard;
