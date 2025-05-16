declare module 'monaco-jsx-highlighter' {
  import { traverse as babelTraverse } from '@babel/traverse';
  import * as monaco from 'monaco-editor'; 
  export default class MonacoJSXHighlighter {
    constructor(
      monaco: typeof monaco, 
      parse: (code: string) => ParseResult<File>, 
      traverse: typeof babelTraverse, 
      editor: monaco.editor.IStandaloneCodeEditor
    );

    highlightOnDidChangeModelContent(): void;
    addJSXCommentCommand(): void;
  }
  export function makeBabelParse(parse: (input: string, options?: ParserOptions) => ParseResult<File>, isJSX: boolean): ParseResult<File>;
}
