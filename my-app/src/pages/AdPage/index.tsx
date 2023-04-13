import { Footer } from '../../components/footer';
import { Main } from '../../components/main';
import NavBar from '../../components/navBar';
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
} from './style';
import mockedCar from '../../assets/mocked-car.svg';
import Button from '../../components/buttons';
import { ThemeTitle } from '../../styles/typography';
import { Comment } from '../../components/comments';

export const AdPage = () => {
	return (
		<>
			<NavBar />
			<Main>
				<StyledDivContentMain>
					<StyledDivInfo>
						<StyledDivBanner>
							<img src={mockedCar} alt="mocked-car" />
						</StyledDivBanner>
						<StyledDivCarModel>
							<ThemeTitle
								tag="h2"
								className=""
								titleSize="Heading-6-600"
							>
								Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes
								Benz A 200
							</ThemeTitle>
							<StyledTagsDiv>
								<div>
									<StyledBtnsCarModel>
										<StyledSpanTags>2013</StyledSpanTags>
										<StyledSpanTags>0 KM</StyledSpanTags>
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
										R$ 00.000,00
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Provident praesentium
								officiis, totam, possimus tempore eos omnis
								distinctio consequuntur ullam quas nihil, at
								maxime eligendi architecto numquam mollitia
								sequi quidem quae?
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
								<img src={mockedCar} alt="mocked-car" />
								<img src={mockedCar} alt="mocked-car" />
								<img src={mockedCar} alt="mocked-car" />
								<img src={mockedCar} alt="mocked-car" />
								<img src={mockedCar} alt="mocked-car" />
								<img src={mockedCar} alt="mocked-car" />
							</StyledImgsDiv>
						</StyledDivAdPics>
						<StyledDivDescProfile>
							<span>SL</span>
							<ThemeTitle
								tag="h3"
								className=""
								titleSize="Heading-6-600"
							>
								Samuel Leão
							</ThemeTitle>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Adipisci illum sint facere
								quae. Placeat, sunt ullam! Omnis libero
								asperiores provident, maxime dolore magni
								aliquam error blanditiis eligendi quisquam
								voluptatibus tenetur?
							</p>
							<Button
								backgroundColor="var(--color-grey0)"
								border=""
								backgroundColorHover=""
								borderHover=""
								fontColor="var(--color-whiteFixed)"
								fontColorHover=""
								onClick={() => {}}
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
						<Comment />
						<Comment />
						<Comment />
					</ul>
				</StyledDivInteraction>
				<StyledNewComment>
					<StyledProfileComment>
						<span>SL</span>
						<span>Samuel Leão</span>
					</StyledProfileComment>
					<div>
						<StyledCommentTextarea
							name="comment"
							id="comment"
							placeholder="Digitar comentário..."
							rows={5}
							cols={50}
							maxLength={800}
						></StyledCommentTextarea>
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
							Comentar
						</Button>
					</div>
					<StyledSuggestedComments>
						<li>Gostei muito!</li>
						<li>Incrível</li>
						<li>Recomendarei para meus amigos!</li>
					</StyledSuggestedComments>
				</StyledNewComment>
			</Main>
			<Footer />
		</>
	);
};
