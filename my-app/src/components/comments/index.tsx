import {
	StyledComment,
	StyledCommentContent,
	StyledCommentDetail,
	StyledCommentLog,
	StyledUserName,
	StyledUserTag,
} from './style';

export const Comment = () => {
	return (
		<StyledComment>
			<StyledCommentContent>
				<StyledUserTag>JL</StyledUserTag>
				<StyledUserName>Júlia Lima</StyledUserName>
				<StyledCommentLog> - há 3 dias</StyledCommentLog>
			</StyledCommentContent>
			<StyledCommentDetail>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
				dolore, tenetur maiores ad corrupti aliquid consequuntur
				eligendi possimus in. Fugiat hic recusandae cum at voluptates
				dolor ex consequuntur excepturi magni!
			</StyledCommentDetail>
		</StyledComment>
	);
};
