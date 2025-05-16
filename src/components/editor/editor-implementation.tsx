import { useCallback } from 'react';
import { Editor, OnMount } from '@monaco-editor/react';
import MonacoJSXHighlighter, { makeBabelParse } from 'monaco-jsx-highlighter';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import Loader from '@/components/own/loader/loader';

const activateMonacoJSXHighlighter: OnMount = (monacoEditor, monaco) => {
  const parseJSX = makeBabelParse(parse, true);

  const monacoJSXHighlighter = new MonacoJSXHighlighter(monaco, parseJSX, traverse, monacoEditor);
  monacoJSXHighlighter.highlightOnDidChangeModelContent();

  monacoJSXHighlighter.addJSXCommentCommand();
};

export default function MonacoEditorImplementation({ language, initialValue, path }: { language: string; initialValue: string; path: string }) {
  const handleEditorDidMount: OnMount = useCallback((monacoEditor, monaco) => {
    activateMonacoJSXHighlighter(monacoEditor, monaco);
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true
    });
  }, []);

  return (
    <>
      <Editor
        onMount={(editor, monaco) => handleEditorDidMount(editor, monaco)}
        className='h-full relative flex-1'
        defaultLanguage={language}
        defaultValue={initialValue}
        theme='vs-dark'
        path={path}
        options={{
          minimap: {
            enabled: true
          },
          scrollbar: {
            vertical: 'hidden'
          },
          wordWrap: 'on'
        }}
        loading={<Loader />}
      />
    </>
  );
}
