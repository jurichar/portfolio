interface TagProps {
  content: string;
}

function Tag({ content }: TagProps) {
  let color = '';

  switch (content) {
    // Langages de programmation
    case 'Java':
    case 'C':
    case 'C++':
    case 'Swift':
    case 'Python':
    case 'JavaScript':
    case 'TypeScript':
    case 'Node.js':
      color = 'text-[#007396] border-[#007396]';
      break;

    // Frameworks
    case 'Qt':
    case 'Django':
    case 'Vue.js':
    case 'React.js':
    case 'Next.js':
    case 'React Native':
      color = 'text-[#61DAFB] border-[#61DAFB]';
      break;

    // Librairies
    case 'SASS':
    case 'Tailwind':
    case 'Three.js':
    case 'Framer Motion':
      color = 'text-[#38B2AC] border-[#38B2AC]';
      break;

    // Technologies graphiques
    case 'Graphics':
    case 'Web GL':
      color = 'text-[#F9A8D4] border-[#F9A8D4]';
      break;

    // Réseaux et bases de données
    case 'Networks':
    case 'Databases':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;

    // Domaines de développement
    case 'Web':
    case 'Mobile':
    case 'Embedded':
    case 'AI':
    case 'Software':
    case 'MLOps':
    case 'DevOps':
    case 'Cloud':
      color = "text-[orange] border-[orange]";
      break;

    // Outils de déploiement et gestion
    case 'Docker':
    case 'Kubernetes':
    case 'Ansible':
    case 'Vagrant':
      color = 'text-[#1c63ed] border-[#1c63ed]';
      break;

    default:
      color = 'text-[red] border-[red]';
      break;
  }

  return (
    <span className={`px-3 py-1 border-2 rounded-full whitespace-nowrap pointer-events-none ${color}`}>
      {content}
    </span>
  );
}

export default Tag;
