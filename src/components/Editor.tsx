import { useEditor, EditorContent, EditorProvider, BubbleMenu, FloatingMenu, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { initialContent } from '../utils/initialContent'
import { createLowlight } from 'lowlight'
import html from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/github-dark.css'
import { Bold, ChevronDown, Italic, List, ListOrdered, MessageSquare } from 'lucide-react'
import { BubblueButton } from './BubblueButton'

const lowlight = createLowlight()
lowlight.register({ html })

function Editor() {
  const { editor } = useCurrentEditor()
  return (
    <EditorContent
      className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
      editor={editor}
      content={initialContent}
    >
      {editor && (
        <FloatingMenu
          className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-500'
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection

            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === ' '
          }}
        >
          <button>
            <img src="http://www.notion.so/images/blocks/text/en-US.png" alt="Text" />
            <div>
              <span>Text</span>
              <span>Just start writing plain text.</span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-500'
          editor={editor}
        >
          <BubblueButton>
            Text
            <ChevronDown className='w-5 h-5' />
          </BubblueButton>
          <BubblueButton>
            <MessageSquare className='w-5 h-5' />
            Comment
          </BubblueButton>
          <div className='flex items-center'>
            <BubblueButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            //className={editor.isActive('bold') ? 'is-active' : ''}
            >
              <Bold className='w-5 h-5' />
            </BubblueButton>

            <BubblueButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <Italic className='w-5 h-5' />
            </BubblueButton>

            <BubblueButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              data-active={editor.isActive('bulletList')}
            >
              <List className='w-5 h-5' />
            </BubblueButton>

            <BubblueButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              data-active={editor.isActive('orderedList')}
            >
              <ListOrdered className='w-5 h-5' />
            </BubblueButton>
          </div>
        </BubbleMenu>
      )}
    </EditorContent>
  )
}
const extensions = [
  StarterKit,
  CodeBlockLowlight.configure({
    lowlight,
  }),
]
/* const editor = useEditor({
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
}) */
/*  if (!editor) {
   return null
 } */
export default () => {
  return (
    <EditorProvider
      extensions={extensions}
      content={initialContent}
      slotBefore={<Editor />}
      editorProps={{
        attributes: {
          class: 'outline-none',
        },
      }}
    >
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </EditorProvider>
  )
}
