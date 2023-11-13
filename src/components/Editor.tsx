import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { initialContent } from '../utils/initialContent'
import { createLowlight } from 'lowlight'
import html from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/github-dark.css'

const lowlight = createLowlight()
lowlight.register({ html })

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    }
  })

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-violet"
        editor={editor}
      />
      {editor && (
        <BubbleMenu editor={editor}>
          <button className="text-sm text-zinc-800 bg-zinc-200 p-2">N</button>
        </BubbleMenu>
      )}
    </>
  )
}
