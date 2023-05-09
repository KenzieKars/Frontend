import { Footer } from '../../components/footer';
import { Main } from '../../components/main';
import { NavBar } from '../../components/navBar';
import {
	StyledBtnsCarModel,
	StyledCommentTextarea,
	StyledDivAdPics,
	StyledDivBanner,
	StyledDivCarDescription,
	StyledDivCarModel,
	StyledDivContentMain,
	StyledDivDescProfile,
	StyledDivInfo,
	StyledDivInteraction,
	StyledDivProfile,
	StyledImgsDiv,
	StyledNewComment,
	StyledProfileComment,
	StyledSpanTags,
	StyledSuggestedComments,
	StyledTagsDiv,
	Dark,
	StyledModal,
	
} from './style';
import Button from '../../components/buttons';
import { ThemeTitle } from '../../styles/typography';
import { Comment } from '../../components/comments';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import {
	StyledComment,
	StyledCommentContent,
	StyledCommentDetail,
	StyledCommentLog,
	StyledUserName,
	StyledUserTag,
} from './style';

export const AdPage = () => {
	const { id } = useParams();

	const [anunciosInfo, setAnuncioInfo] = useState<any>([]) as any;
	const [userInfo, setUserInfo] = useState<any>([]) as any;
	const [userLogado, setUserLogado] = useState<any>([]) as any;
	const [comments, setComments] = useState<any>([]) as any;
	const [commentId, setCurrentComment] = useState<string>("");
	

	const navigate = useNavigate();

	useEffect(() => {
		api.get(`/advertisement/${id}`)
			.then((res) => {

				setAnuncioInfo(res.data)
			})
			.catch((err) => {
				console.log(err)
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		let user = localStorage.getItem("usuarioAnuncio")
		api.get(`/advertisement/users/${user}`)
			.then((res) => {
				
				setUserInfo(res.data[0].user);
			})
			.catch((err) => {
				console.log(err)
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const token: string | null = localStorage.getItem("@user:Token")
		const userId: string | null = localStorage.getItem('@user:ID');
			api
				.get(`/users/${userId}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => {
					setUserLogado(res.data.foundUserByParam);
				})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
			api
				.get(`/comentario/${id}`)
				.then((res) => {
					setComments(res.data)
				})
				.catch((err)=>{
					console.log(err)
				})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<NavBar />
			<StyledModal>
				<div className='none4'>
					<div className='none5' onClick={(event: any)=>{
						let div = document.querySelector(".content")
						if(event.target===div){
							return
						}
						if(event.target.parentElement === div){
							return
						}
						else{
							let close = document.querySelector(".overlay")
							let close2 = document.querySelector(".modal")
							if(close && close2){
								close.className="none5"
								close2.className="none4"
							}
						}
					}}>
						<div className='content'>
							<button className='fechar' onClick={()=>{
								let close = document.querySelector(".overlay")
								let close2 = document.querySelector(".modal")
								if(close && close2){
									close.className="none5"
									close2.className="none4"
								}
							}}>x</button>
							<p>Deseja editar seu comentário?</p>
							
							<input className='editCom' type="text" placeholder='Digite aqui seu comentário'/>
							<button className='send' onClick={()=>{
								let comment = document.querySelector(".editCom") as HTMLFormElement
								let data = {comentario: comment.value}
								const token: string | null = localStorage.getItem("@user:Token")
								api
								.patch(`/comentario/${commentId}`, data, {
									headers: { Authorization: `Bearer ${token}` },
								})
								.then((res) => {
									document.location.reload();
								})
								.catch((err)=>{
									console.log(err)
								})
							}}>Editar</button>
						</div>
					</div>
				</div>
				</StyledModal>
				<StyledModal>
					<div className='none2'>
						<div className='none3' onClick={(event:any)=>{
						let div = document.querySelector(".content2")
						console.log(event.target, div)
						if(event.target===div){
			
							return
						}
						if(event.target.parentElement === div){
							return
						}
						if(event.target.parentElement.parentElement === div){
							return
						}
						else{
							let close = document.querySelector(".overlay")
							let close2 = document.querySelector(".modal")
							if(close && close2){
								close.className="none3"
								close2.className="none2"
							}
						}
					}}>
					<div className='content2'>
					<button className='fechar' onClick={()=>{
						let close = document.querySelector(".overlay")
						let close2 = document.querySelector(".modal")
						if(close && close2){
							close.className="none3"
							close2.className="none2"
						}
					}}>x</button>
					<p>Deseja realmente deletar seu comentário?</p>
					<div className='btns'>
						<button className='send' onClick={()=>{
							const token: string | null = localStorage.getItem("@user:Token")
							api
							.delete(`/comentario/${commentId}`, {
								headers: { Authorization: `Bearer ${token}` },
							})
							.then((res) => {
								document.location.reload();
							})
							.catch((err)=>{
								console.log(err)
							})
						}}>Sim</button>
						<button className='send' onClick={()=>{
						let close = document.querySelector(".overlay")
						let close2 = document.querySelector(".modal")
						if(close && close2){
							close.className="none3"
							close2.className="none2"
						}
					}}>Não</button>
					</div>
				</div>
						</div>
					</div>
				</StyledModal>
			<Main>
				<StyledDivContentMain>
					<StyledDivInfo>
						<StyledDivBanner>
							{anunciosInfo.imagens?.map((imagem:string , index: number) => {
								if(index === 0){
									return(
										<img src={imagem} alt="foto" />
									)
								}
								return null
							})}
						</StyledDivBanner>
						<StyledDivCarModel>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-6-600"
							>
								{anunciosInfo.marca}  {anunciosInfo.modelo}
							</ThemeTitle>
							<StyledTagsDiv>
								<div>
									<StyledBtnsCarModel>
										<StyledSpanTags>{anunciosInfo.ano}</StyledSpanTags>
										<StyledSpanTags>{anunciosInfo.quilometragem} KM</StyledSpanTags>
									</StyledBtnsCarModel>
									<Button
										backgroundColor="var(--color-brand2)"
										border=""
										backgroundColorHover=""
										borderHover=""
										fontColor="var(--color-whiteFixed)"
										fontColorHover=""
										onClick={() => {}}
										type="button"
										className=""
									>
										Comprar
									</Button>
								</div>
								<div>
									<ThemeTitle
										tag="h3"
										className=""
										titleSize="Heading-7-500"
									>
									{`${parseFloat(anunciosInfo.preco).toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
									})}`}
									</ThemeTitle>
								</div>
							</StyledTagsDiv>
						</StyledDivCarModel>
						<StyledDivCarDescription>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-6-600"
							>
								Descrição
							</ThemeTitle>
							<p>
							{anunciosInfo.descricao}
							</p>
						</StyledDivCarDescription>
					</StyledDivInfo>
					<StyledDivProfile>
						<StyledDivAdPics>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-6-600"
							>
								Fotos
							</ThemeTitle>
							<StyledImgsDiv>
							{anunciosInfo.imagens?.map((imagem:string)=>{
								return(
									<img src={imagem} alt="foto" />
								)
							})}
							</StyledImgsDiv>
						</StyledDivAdPics>
						<StyledDivDescProfile>
						{userLogado && Object.keys(userLogado).length > 0 && <img src={userLogado.imagem} alt="user" />}
							<ThemeTitle
								tag="h3"
								className=""
								titleSize="Heading-6-600"
							>
								{userInfo.nome}
							</ThemeTitle>
							<p>
								{userInfo.bio}
							</p>
							<Button
								backgroundColor="var(--color-grey0)"
								border=""
								backgroundColorHover=""
								borderHover=""
								fontColor="var(--color-whiteFixed)"
								fontColorHover=""
								onClick={() => {navigate(`/`)}}
								type="button"
								className=""
							>
								Ver todos anúncios
							</Button>
						</StyledDivDescProfile>
					</StyledDivProfile>
				</StyledDivContentMain>
				<StyledDivInteraction>
					<ThemeTitle tag="h3" className="" titleSize="Heading-6-600">
						Comentários
					</ThemeTitle>
					<ul>
						{ comments ? comments.map((obj:any)=>{
							const date2 = new Date(obj.created_at)
							const date:Date = new Date()
							let dia = (date2.getDate() - date.getDate())
							return(
								<StyledComment>
									<StyledCommentContent>
										<img className='img' src={obj.user.imagem} alt="user" />
										<StyledUserName>{obj.user.nome}</StyledUserName>
										<StyledCommentLog> - há {dia + 2*dia} dias</StyledCommentLog>
										{obj.editado?<StyledCommentLog>&#40;editado&#41;</StyledCommentLog> : null}
										
										{userLogado && Object.keys(userLogado).length > 0 && obj.user.id === userLogado.id &&
										<div className='div'>
											<button onClick={()=>{

												setCurrentComment(obj.id)
												let modal2 = document.querySelector(".none4")
												let modal3 = document.querySelector(".none5")
												if(modal2 && modal3){
													modal2.className="modal"
													modal3.className="overlay"
												}
											}}>
												<img className='edit' src="https://cdn-icons-png.flaticon.com/512/176/176318.png" alt="editar" />
											</button>
											<button onClick={()=>{
												setCurrentComment(obj.id)
												let modal2 = document.querySelector(".none2")
												let modal3 = document.querySelector(".none3")
												if(modal2 && modal3){
													modal2.className="modal"
													modal3.className="overlay"
												}
											}}>
												<img className='edit' src="https://cdn-icons-png.flaticon.com/512/18/18297.png" alt="excluir" />
											</button>
										</div>
										}

										
									</StyledCommentContent>
									<StyledCommentDetail>
										{obj.comentario}
									</StyledCommentDetail>
								</StyledComment>
							)
						}) : null}
					</ul>
				</StyledDivInteraction>
				<StyledNewComment>
					<StyledProfileComment>
					{userLogado && Object.keys(userLogado).length > 0 && <img src={userLogado.imagem} alt="user" />}
					{userLogado && Object.keys(userLogado).length > 0 && <span>{userLogado.nome}</span>}

					</StyledProfileComment>
					<div>
						<StyledCommentTextarea
							id="comment"
							placeholder="Digitar comentário..."
							type='text'
						></StyledCommentTextarea>
						<Button
							backgroundColor="var(--color-brand2)"
							border=""
							backgroundColorHover=""
							borderHover=""
							fontColor="var(--color-whiteFixed)"
							fontColorHover=""
							onClick={() => {
								let input = document.getElementById("comment") as HTMLTextAreaElement
								const token: string | null = localStorage.getItem("@user:Token")
								let data = {
									comentario: input.value
								}
								api
									.post(`/comentario/${id}`, data, {
										headers: { Authorization: `Bearer ${token}` },
									})
									.then((res) => {
										document.location.reload();
									})
									.catch((err)=>{
										console.log(err)
										navigate("/login")
									})
			
							}}
							type="button"
							className=""
						>
							Comentar
						</Button>
					</div>
					<StyledSuggestedComments>
						<li onClick={()=>{
							let input = document.getElementById("comment") as HTMLTextAreaElement
							input.value = "Gostei muito!"
						}}>Gostei muito!</li>
						<li onClick={()=>{
							let input = document.getElementById("comment") as HTMLTextAreaElement
							input.value = "Incrível"
						}}>Incrível</li>
						<li onClick={()=>{
							let input = document.getElementById("comment") as HTMLTextAreaElement
							input.value = "Recomendarei para meus amigos!!"
						}}>Recomendarei para meus amigos!</li>
					</StyledSuggestedComments>
				</StyledNewComment>
			</Main>
			<Footer />
		</>
	);
};
