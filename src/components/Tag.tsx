interface TagProps {
  content: string;
}

function Tag({ content }: TagProps) {
  let color = '';
  switch (content) {
    // language
    case 'Java':
      color = 'text-[#007396] border-[#007396]';
      break;
    case 'C':
      color = 'text-[#659bd3] border-[#659bd3]';
      break;
    case 'C++':
      color = 'text-[#659bd3] border-[#659bd3]';
      break;
    case 'Qt':
      color = 'text-[#41CD52] border-[#41CD52]';
      break;
    case 'Swift':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;
    case 'Python':
      color = 'text-[#3776AB] border-[#3776AB]';
      break;
    case 'Django':
      color = 'text-[#3776AB] border-[#3776AB]';
      break;
    case 'JavaScript':
      color = 'text-[#F7DF1E] border-[#F7DF1E]';
      break;
    case 'TypeScript':
      color = 'text-[#007ACC] border-[#007ACC]';
      break;
    case 'Node.js':
      color = 'text-[#1c63ed] border-[#1c63ed]';
      break;

    // tools / libraries
    case 'Graphics' || 'Web GL' || 'Three.js' || 'Framer Motion' || 'Tailwind' || 'SASS':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;

    // domain
    case 'Networks':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;
    case 'Databases':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;
    case 'Web' || 'Mobile' || 'Embedded' || 'AI' || 'Software' || 'MLOps' || 'DevOps' || 'Cloud':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;

    // frameworks
    case 'Vue.js' || 'React.js' || 'Next.js' || 'React Native':
      color = 'text-[#61DAFB] border-[#61DAFB]';
      break;
    case 'Wordpress' || 'Strapi' || 'Drupal':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;
    case 'Docker':
      color = 'text-[#1c63ed] border-[#1c63ed]';
      break;
    case 'Docker' || 'Kubernetes' || 'Jenkins' || 'Azure' || 'AWS' || 'GCP':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;
    case 'ZenML' || 'Minio' || 'Ansible' || 'Vagrant' || '':
      color = 'text-[#FFD700] border-[#FFD700]';
      break;



    default:
      color = 'text-[#FFD700] border-[#FFD700]';
      break;
  }
  return (
    <span className={`px-3 py-1  border-2 rounded-full whitespace-nowrap ${color}`}>
      {content}
    </span>
  );
}

export default Tag;