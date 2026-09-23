/* eslint-disable import/order */
import "@/utils/highlight";
import ReactQuill from "react-quill-new";
import { StyledEditor } from "./styles";
import Toolbar, { formats } from "./toolbar";

// TODO: repace react-quill with tiptap
interface Props extends ReactQuill.ReactQuillProps {
	id?: string;
	sample?: boolean;
}
export default function Editor({ id = "app-quill", sample = false, ...other }: Props) {
	const modules = {
		toolbar: {
			container: `#${id}`,
		},
		history: {
			delay: 500,
			maxStack: 100,
			userOnly: true,
		},
		syntax: { hljs: window.hljs },
		clipboard: {
			matchVisual: false,
		},
	};
	return (
		<StyledEditor>
			<Toolbar id={id} isSimple={sample} />
			<ReactQuill modules={modules} formats={formats} {...other} placeholder="Write something awesome..." />
		</StyledEditor>
	);
}
