import { ComponentProps } from "react";

export interface BubblueButtonProps extends ComponentProps<'button'> {
    children: React.ReactNode
}
export function BubblueButton(props: BubblueButtonProps) {
    return (
        <button
            className="text-sm hover:bg-zinc-700 bg-zinc-600 p-2"
            {...props}
        /> /* bg-zinc-200 */
    )
}