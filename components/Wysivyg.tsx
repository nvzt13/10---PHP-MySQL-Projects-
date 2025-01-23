import Editor from 'react-simple-wysiwyg';
import { ContentEditableEvent } from 'react-simple-wysiwyg';
import { BlogProps } from '@/types/types';


export default function Wysiwyg({ html, setHtml }: BlogProps) {
  function onChange(event: ContentEditableEvent) {
    setHtml(event.target.value);
  }

  return (
    <div className="mt-4">
      <Editor
        value={html}
        onChange={onChange}
        style={{ 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          padding: '12px', 
          minHeight: '200px', 
          fontFamily: 'inherit',
          backgroundColor: '#f9fafb',
          outline: 'none',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
}
