import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { initialContent } from '../utils/initialContent'
import { createLowlight } from 'lowlight'
import html from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/github-dark.css'
import { Bold, Italic, List, MessageSquare, Text, Underline } from 'lucide-react'
import { BubblueButton } from './Button'

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
    },
    onUpdate() {
      console.clear()
      console.log(editor?.getHTML())
    },
  })
  if (!editor) {
    return null
  }

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
        content={initialContent}
      >
        {editor && (
          <BubbleMenu
            className='bg-zinc-600 rounded-sm overflow-hidden flex divide-x divide-zinc-500'
            /* bg-zinc-700 shadow-xl border border-zinc-400 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600 */
            editor={editor}
          >
            <BubblueButton>
              Text
              <Text size={20} />
            </BubblueButton>
            <BubblueButton>
              <MessageSquare size={20} />
            </BubblueButton>
            <div className='flex items-center'>
              <BubblueButton>
                <Bold size={20} />
              </BubblueButton>
              <BubblueButton>
                <Italic size={20} />
              </BubblueButton>
              <BubblueButton>
                <Underline size={20} />
              </BubblueButton>
              <BubblueButton>
                <List size={20} />
              </BubblueButton>
            </div>
          </BubbleMenu>
        )}
      </EditorContent>
    </>
  )
}
