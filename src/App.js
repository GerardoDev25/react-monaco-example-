import Editor from '@monaco-editor/react';

const App = () => {
  return (
    <div>
      <Editor height="90vh" theme="vs-dark" defaultLanguage="typescript" />
    </div>
  );
};

export default App;
