import Editor from '@monaco-editor/react';
import { useState, useRef } from 'react';

const App = () => {
  const [content, setContent] = useState('dsdsd');
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    console.log({ editor, monaco });
  };

  const handleSave = () => {
    console.log(editorRef.current.getValue());
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <Editor
        //
        height="90vh"
        theme="vs-dark"
        value={content}
        defaultLanguage="markdown"
        // onChange={handleChange}
        onChange={(value) => setContent(value)}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default App;
