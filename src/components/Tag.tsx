interface TagProps {
  content: string;
}

function Tag({ content }: TagProps) {
  let color = '';
  switch (content) {

    default:
      color = 'text-[#FF6347] border-[#FF6347]';
      break;
  }
  return (
    <span className={`px-3 py-1  border-2 rounded-full whitespace-nowrap ${color}`}>
      {content}
    </span>
  );
}

export default Tag;