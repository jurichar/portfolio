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

    // Frameworks et bibliothèques
    case 'Qt':
    case 'Django':
    case 'Vue.js':
    case 'React.js':
    case 'Next.js':
    case 'React Native':
      color = 'text-[#61DAFB] border-[#61DAFB]';
      break;

    // Technologies graphiques
    case 'Graphics':
    case 'Web GL':
    case 'Three.js':
    case 'Framer Motion':
    case 'Tailwind':
    case 'SASS':
      color = 'text-[#FFD700] border-[#FFD700]';
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
      color = 'text-[#FFD700] border-[#FFD700]';
      break;

    // Outils de déploiement et gestion
    case 'Docker':
    case 'Kubernetes':
    case 'Jenkins':
    case 'Azure':
    case 'ZenML':
    case 'Minio':
    case 'Ansible':
    case 'Vagrant':
      color = 'text-[#1c63ed] border-[#1c63ed]';
      break;

    default:
      color = 'text-[red] border-[red]';
      break;
  }

  return (
    <span className={`px-3 py-1 border-2 rounded-full whitespace-nowrap ${color}`}>
      {content}
    </span>
  );
}

export default Tag;
